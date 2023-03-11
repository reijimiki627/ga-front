import { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Link from 'next/link';
import axios from 'axios'

export default function UsefulUpdate() {
  const [gameId, setGameId] = useState(0)
  const [id, setId] = useState(0)
  const [title, setTitle] = useState('')
  const [contents, setContents] = useState('')
  const [games, setGames] = useState([])

  useEffect(() => {
    const search = window.location.search
    const query = new URLSearchParams(search)

    getGames()
    getDetail(query.get('id'))
  }, [])

  function getDetail(id) {
    axios.get('hhttp://54.238.86.31/api/useful_info/detail?id='+ id).then(res => {
      console.log(res.data.useful_info)
      setId(res.data.useful_info[0].useful_info_id)
      setGameId(res.data.useful_info[0].game_id)
      setTitle(res.data.useful_info[0].title)
      setContents(res.data.useful_info[0].contents)
    }).catch(e => console.error(e))
  }

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

  function updateData() {
    var data = {
      "user_id": 1,
      "id": id,
      "game_id": gameId,
      "title": title,
      "contents": contents
    }

    console.log(data)
    axios.put('http://localhost:8080/api/useful_info', data).then(res => alert('更新に成功しました。')).catch(e => console.error("更新処理でエラー発生。"))
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
            <Form.Select aria-label="Default select example" value={gameId} onChange={e => setGameId(e.target.value)}>
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
            <Button variant="outline-primary" size="md" className='btn-custom' onClick={() => updateData()}>更新</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}