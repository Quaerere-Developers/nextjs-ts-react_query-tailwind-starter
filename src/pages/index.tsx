import Link from 'next/link'
import Layout from '../components/Layout'
import Button from "@material-tailwind/react/Button";
const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1 className="my-2">Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <Button>button</Button>
  </Layout>
)

export default IndexPage
