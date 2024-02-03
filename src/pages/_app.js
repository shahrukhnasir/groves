import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/globals.css'
import MainLayout from '../layout/MainLayout'
import '../css/style.css'


function MyApp({ Component, pageProps }) {
  return (<><div className="html">

        <MainLayout><Component {...pageProps} /></MainLayout>


  </div></>)

}

export default MyApp
