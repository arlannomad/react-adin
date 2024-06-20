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
            <Route path='/' element = {<ListPostComponents/>}></Route>
            {/* //http://localhost:3000/posts */}
            <Route path='/posts' element = {<ListPostComponents/>}></Route>
            {/* //http://localhost:3000/add-post */}
            <Route path='/add-post' element = {<PostComponent/>}></Route>
            {/* //http://localhost:3000/update-post/{id} */}
            <Route path='/update-post/:id' element = {<PostComponent/>}></Route>
            {/* //http://localhost:3000/delete-post/{id} */}
             <Route path='/delete-post/:id' element = {<PostComponent/>}></Route>
            {/* //http://localhost:3000/delete-post/{id} */}
            <Route path='/add-photo-to-post/:photo' element = {<PostComponent/>}></Route>
          </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
