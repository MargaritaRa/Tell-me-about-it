import Header from './Header'
import Footer from './Footer'
import {Outlet} from "react-router-dom"



function App({post, setPost}) {

  return (
    <div>

      <Header />
      <Outlet />
      <Footer />


    </div>
  )
}

export default App