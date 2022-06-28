import Link from 'next/link';

export default function Home() {
  return (
    <div>
      Hello nextjs🙋‍♀️ -exp
      <ol>
        <li><Link href="/csr">CSR</Link></li>
        <li><Link href="/ssr">SSR</Link></li>
        <li><Link href="/ssg">SSG</Link></li>
        <li><Link href="/isr">ISR</Link></li>
      </ol>
      <ol>
        <li><Link href="/sub">/sub/index.js</Link></li>
        <li><Link href="/sub2">/sub2/index.js</Link></li>
        <li><Link href="/sub/about">/sub/about.js</Link></li>
        <li><Link href="/sub/1">/sub/[id].js</Link></li>
      </ol>
    </div>
  )
}
