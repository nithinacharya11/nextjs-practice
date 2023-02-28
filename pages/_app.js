import '@/styles/globals.css'
import Layout from '@/components/layout'

export default function App({ Component, pageProps }) {
  return (
    <div className='bg-gray-200 h-screen w-full'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
