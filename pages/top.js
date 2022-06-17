import Link from 'next/link';
import Button from 'react-bootstrap/Button';

export default function Top() {
    const title = "Other";

    return (
        <div className='top-main'>
            <div className='menu-button'>
                <Link href="/">
                    <Button variant="outline-primary" size="lg" className='btn-custom'>登録</Button>
                </Link>
            </div>
            <br/>
            <div className='menu-button'>
                <Link href="/">
                    <Button variant="outline-primary" size="lg" className='btn-custom'>一覧</Button>
                </Link>
            </div>
            <br/>
            <div className='menu-button'>
                <Link href="/">
                    <Button variant="outline-primary" size="lg" className='btn-custom'>分析</Button>
                </Link>
            </div>
            <br/>
            <div className='menu-button'>
                <Link href="/other">
                    <Button variant="outline-primary" size="lg" className='btn-custom'>コンポーネント試す用画面</Button>
                </Link>
            </div>
        </div>
    );
}
