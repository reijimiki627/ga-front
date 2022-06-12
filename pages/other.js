import Link from 'next/link';

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
                <a>前のページへ戻る</a>
            </Link>
            <Link href="/index">
                <a>前のページへ戻る</a>
            </Link>
        </div>
    );
}
