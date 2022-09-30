import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Link from 'next/link';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export default function MatchLog() {

  const [columnDefs, setColumnDefs] = useState([
    {field: 'make', filter: true},
    {field: 'model', filter: true},
    {field: 'price'}
  ]);

  return (
    <div className='match-list Crown'>
      <div className='practice-header'>
        <Row>
          <Col className='practice-col'>
            <Link href="/top">
              <Button variant="outline-primary">topに戻る</Button>
            </Link>
          </Col>
          <Col className='practice-col'>一覧</Col>
          <Col className='practice-col'>
            <Link href="/registration">
              <Button variant="outline-primary">登録</Button>
            </Link>
          </Col>
          </Row>
      </div>
      <div className='practice-content'>
        {/* <Container>
          <Row>
            <Col className='practice-col'>マッチ日時</Col>
            <Col className='practice-col'>ゲーム</Col>
            <Col className='practice-col'>作成日時</Col>
          </Row>
        </Container> */}
      </div>
      <div className="ag-theme-alpine" style={{width: 500, height: 500}}>
        <AgGridReact rowData={[{"make": 1, "model": 2, "price": 3}, {"make": 4, "model": 5, "price": 6}, {"make": 7, "model": 8, "price": 9}]} columnDefs={columnDefs} />
      </div>
    </div>
  )
}