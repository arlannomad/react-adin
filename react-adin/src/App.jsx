import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListPostComponents from './components/ListPostComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PostComponent from './components/PostComponent'

function App() {

  return (
    <>
       <BrowserRouter>
        <HeaderComponent />
          <Routes>
            {/* //http://localhost:3000 */}
            {/* <Route path='/' element = {<ListPostComponents/>}></Route> */}
            {/* //http://localhost:3000/posts */}
            <Route path='/posts/getAll' element = {<ListPostComponents/>}></Route>
          </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
