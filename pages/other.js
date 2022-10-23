import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';


export default function Other() {
  const title = "Other";

  return (
    <div className='other-main'>
      <div className='container'>
        <h3>色々試そう</h3>
      </div>
      <div className=''></div>
      <Link href="/top">
        <Button variant="outline-primary">topに戻る</Button>
      </Link>
      <div className='practice-content'>
        <Container>
          <Row>
            <Col className='practice-col'>1 of 2</Col>
            <Col className='practice-col'>2 of 2</Col>
          </Row>
          <Row>
            <Col className='practice-col'>1 of 3</Col>
            <Col className='practice-col'>2 of 3</Col>
            <Col className='practice-col'>3 of 3</Col>
          </Row>
        </Container>
      </div>
      <div className='practice-content'>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className='practice-content'>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Container>
          <Row>
          <Col xs>マッチモード
                <Form.Select aria-label="Default select example">
                    <option>選択してください</option>
                    <option value="1">ナワバリバトル</option>
                    <option value="2">ガチエリア</option>
                    <option value="3">ガチヤグラ</option>
                    <option value="4">ガチホコ</option>
                    <option value="5">ガチアサリ</option>
                </Form.Select>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>リザルト</Form.Label>
                </Form.Group>
                <Form.Select aria-label="Default select example">
                    <option>選択してください</option>
                    <option value="1">win</option>
                    <option value="2">lose</option>
                </Form.Select>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>メインウェポン</Form.Label>
                </Form.Group>
                <Form.Select aria-label="Default select example">
                    <option>選択してください</option>
                    <option value="1">わかばシューター</option>
                    <option value="2">スプラシューター</option>
                    <option value="3">プロモデラーMG</option>
                    <option value="4">N-ZAP85</option>
                    <option value="5">ボールドマーカー</option>
                </Form.Select>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>サブウェポン</Form.Label>
                </Form.Group>
                <Form.Select aria-label="Default select example">
                    <option>選択してください</option>
                    <option value="1">わかばシューター</option>
                    <option value="2">スプラシューター</option>
                    <option value="3">プロモデラーMG</option>
                    <option value="4">N-ZAP85</option>
                    <option value="5">ボールドマーカー</option>
                </Form.Select>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>キル数</Form.Label>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="number" placeholder="入力してください" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>デス数</Form.Label>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="number" placeholder="入力してください" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>マッチ終了時ポイント</Form.Label>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="number" placeholder="入力してください" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>メモ</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                
          </Col>
            <Col xs>チーム人数
            <Form.Select aria-label="Default select example">
                    <option>選択してください</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </Form.Select>
            </Col>
            <Col xs={{ order: 12 }}>メンバー
            <Form.Select aria-label="Default select example">
                    <option>選択してください</option>
                    <option value="1">はすたろす</option>
                    <option value="2">ぽぽたろす</option>
                    <option value="3">みゆたろす</option>
                    <option value="4">けんたろす</option>
                </Form.Select>
            </Col>
            <Col xs={{ order: 14 }}>メインウェポン
            <Form.Select aria-label="Default select example">
                    <option>選択してください</option>
                    <option value="1">わかばシューター</option>
                    <option value="2">スプラシューター</option>
                    <option value="3">プロモデラーMG</option>
                    <option value="4">N-ZAP85</option>
                    <option value="5">ボールドマーカー</option>
                </Form.Select>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs>
            </Col>
            <Col xs>
            </Col>
            <Col xs={{ order: 12 }}>
            <Form.Select aria-label="Default select example">
                    <option>選択してください</option>
                    <option value="1">はすたろす</option>
                    <option value="2">ぽぽたろす</option>
                    <option value="3">みゆたろす</option>
                    <option value="4">けんたろす</option>
                </Form.Select>
            </Col>
            <Col xs={{ order: 14 }}>
            <Form.Select aria-label="Default select example">
                    <option>選択してください</option>
                    <option value="1">わかばシューター</option>
                    <option value="2">スプラシューター</option>
                    <option value="3">プロモデラーMG</option>
                    <option value="4">N-ZAP85</option>
                    <option value="5">ボールドマーカー</option>
                </Form.Select>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs>
            </Col>
            <Col xs>
            </Col>
            <Col xs={{ order: 1 }}>
            <Form.Select aria-label="Default select example">
                    <option>選択してください</option>
                    <option value="1">はすたろす</option>
                    <option value="2">ぽぽたろす</option>
                    <option value="3">みゆたろす</option>
                    <option value="4">けんたろす</option>
                </Form.Select>
            </Col>
            <Col xs={{ order: 1 }}>
            <Form.Select aria-label="Default select example">
                    <option>選択してください</option>
                    <option value="1">わかばシューター</option>
                    <option value="2">スプラシューター</option>
                    <option value="3">プロモデラーMG</option>
                    <option value="4">N-ZAP85</option>
                    <option value="5">ボールドマーカー</option>
                </Form.Select>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
