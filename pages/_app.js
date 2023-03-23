import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default function App({ Component, pageProps }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
