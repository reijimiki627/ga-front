import Link from 'next/link';
import Button from 'react-bootstrap/Button';

export default function Other() {
    const title = "Other";

    return (
        <div>
            <h1 className="bg-primary px-3 text-white display-4">
                React
            </h1>
            <div className='container'>
                <h3></h3>
            </div>
            <Link href="/">
                <Button variant="outline-primary">前のページに戻る</Button>
            </Link>
            <Link href="/index">
                <a>最初のページへ戻る</a>
            </Link>
        </div>
    );
}
