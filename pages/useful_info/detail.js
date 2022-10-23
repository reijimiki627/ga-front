import ReactMarkdown from 'react-markdown'
import {Container, Row, Col, Button} from 'react-bootstrap';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

export default function Tips() {
  const [detail, setDetail] = useState([])

  useEffect(() => {
    const search = window.location.search
    const query = new URLSearchParams(search)
  
    console.log(query.get('id'))
    getUsefulInfo(query.get('id'))
  }, [])

  function getUsefulInfo(id) {
    axios.get('http://localhost:8080/api/useful_info/detail?id='+ id).then(res => {
      console.log(res.data.useful_info)
      setDetail(res.data.useful_info[0])
    }).catch(e => console.error(e))
  }

  function createDatas(useful_info) {
    let resultList = []
    useful_info.forEach(info => {
      let tmp = {
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

  function contentArea() {
    return (
      <ReactMarkdown>
        {detail.contents}
      </ReactMarkdown>
    )
  }

  return (
    <div className='tips-main'>
      {detail !== undefined && // detailを取得した後に表示 
      <Container>
        <Row>
          <Col>
            title: {detail.title}
          </Col>
        </Row>
        <Row>
          <Col>
            ゲーム名: {detail.game_title}
          </Col>
        </Row>
        <Row>
          <Col>
            作成者: {detail.user_name}
          </Col>
          <Col>
            作成日時: {detail.create_date}
          </Col>
        </Row>
        <Row>
          <Col>
            <ReactMarkdown>
              {detail.contents}
            </ReactMarkdown>
          </Col>
        </Row>
      </Container>
      }
    </div>
  );
}