import Link from 'next/link';
import { AgGridReact } from 'ag-grid-react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import GridButton from '../parts/grid-button'

export default function Tips() {
  const [columnDefs, setColumnDefs] = useState([
    {headerName: 'タイトル', field: 'title', filter: true},
    {headerName: 'ゲーム名', field: 'game_title', filter: true},
    {headerName: '投稿者', field: 'user_name'},
    {headerName: '更新日時', field: 'update_date'},
    {headerName: '投稿日時', field: 'create_date'},
    {field: 'id', cellRenderer: (params) => {
      const url = '/useful_info/detail?id=' + params.value
      console.log(url)
      return (
        <Link href={url}>
          <Button variant="outline-primary" size="md" className='btn-custom'>詳細</Button>
        </Link>
      )
    }},
  ]);
  const [list, setList] = useState([])
  const [mockData, setMockData] = useState([{
    'title': '〇〇ギア効果まとめ',
    'game_title': 'splatoon3',
    'user_name': 'hasutaros',
    'create_date': '2022-10-01 07:00',
    'update_date': '2022-10-01 08:51',
  },{
    'title': '各ギア最高率まとめ',
    'game_title': 'splatoon3',
    'user_name': 'hasutaros',
    'create_date': '2022-09-30 21:00',
    'update_date': '2022-09-30 21:00',
  },{
    'title': '★最強★パーク構成',
    'game_title': 'Dead by Daylight',
    'user_name': 'popotaros',
    'create_date': '2022-09-30 23:00',
    'update_date': '2022-09-30 23:23',
  }])

  useEffect(() => getUseulInfoList(), [])

  function getUseulInfoList() {
    axios.get('http://localhost:8080/api/useful_info/list').then(res => {
      console.log(res.data.useful_info)
      createDatas(res.data.useful_info)
    }).catch(e => console.error(e))
  }

  function createDatas(useful_info) {
    let resultList = []
    useful_info.forEach(info => {
      let tmp = {
        'id': info.useful_info_id,
        'title': info.title,
        'game_title': info.game_title,
        'user_name': info.user_name,
        'create_date': moment(info.create_date).utc(false).format("YYYY-MM-DD hh:mm:ss"),
        'update_date': moment(info.update_date).utc(false).format("YYYY-MM-DD hh:mm:ss"),
      }
      resultList.push(tmp)
    });
    
    setList(resultList);
  }


  return (
    <div className='tips-main'>
      <Container>
        <Row>
          <Col>
            <Link href="/top">
              <Button variant="outline-primary" size="md" className='btn-custom'>topに戻る</Button>
            </Link>
          </Col>
          <Col>役立ち情報</Col>
          <Col>
            <Link href="/useful_info/registration">
              <Button variant="outline-primary" size="md" className='btn-custom'>登録</Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <div className="ag-theme-alpine" style={{width: 1050, height: 500}}>
            <AgGridReact rowData={list} columnDefs={columnDefs} />
          </div>
       </Row>
      </Container>
    </div>
  );
}