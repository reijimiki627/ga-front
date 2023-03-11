import Link from 'next/link';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useState, useEffect } from 'react';
import axios from 'axios'

export default function UsefulResistration() {
  const [games, setGames] = useState([])
  const [selectedGame, setSelectedGame] = useState(0)
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  useEffect(() => getGames(), [])

  function getGames() {
    axios.get('http://54.238.86.31/api/game/list')
    .then(res => {
      setGames(res.data.games)
    }).catch(e => {
      console.error(e)
    })
  }

  function createGames() {
    var list = []
    list.push(<option key={0}>Open this select game</option>)
    games.forEach((game, index) => {
      list.push(<option key={index+1} value={game.id}>{game.title}</option>)
    })
    return list
  }

  function postData() {
    var data = {
      "user_id": 1,
      "game_id": selectedGame,
      "title": title,
      "contents": contents
    }

    axios.post('http://localhost:8080/api/useful_info', data).then(res => alert('登録に成功しました。')).catch(e => console.error("エラー発生"))
  }

  return (
    <div className='useful-info-main'>
      <Container>
        <Row>
          <Col>
            <Link href="/useful_info/list">
              <Button variant="outline-primary" size="md" className='btn-custom'>一覧に戻る</Button>
            </Link>
          </Col>
          <Col>役立ち情報投稿</Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>ゲームタイトル</Form.Label>
          </Col>
          <Col>
            <Form.Select aria-label="Default select example" onChange={e => setSelectedGame(e.target.value)}>
              {createGames()}
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>投稿タイトル</Form.Label>
          </Col>
          <Col>
            <Form.Control type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='投稿タイトルを入力してください' />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>内容</Form.Label>
          </Col>
          <Col>
            <Form.Control as="textarea" rows={10} value={contents} onChange={(e) => setContents(e.target.value)} placeholder='投稿内容' />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="outline-primary" size="md" className='btn-custom' onClick={() => postData()}>投稿</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}