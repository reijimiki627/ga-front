import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import moment from 'moment';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Registration() {
    const title = "Other";
function getdate() {
    return moment().format("yyyy-MM-DD")
}
function gettime() {
    return moment().format("HH:mm")
}
    return (
        <div className='registration-main'>
             <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>日時</Form.Label>
                    <Form.Control type="date"defaultValue={getdate()} placeholder="date" />
                    <Form.Control type="time"defaultValue={gettime()} placeholder="time" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>マッチモード</Form.Label>
                </Form.Group>
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
      <Button variant="primary" type="submit">
        登録
      </Button>
    </Form>
        </div>
    );
}