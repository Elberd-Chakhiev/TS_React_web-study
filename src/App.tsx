import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Blog from './components/pages/Blog'
import Contacts from './components/pages/Contacts'
import NotFound from './components/pages/NotFound'

const App: React.FC = () => {
  return (
    <div className="App bg-primary--theme">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<NotFound />}></Route>
        <Route path='contacts/' element={<Contacts />}></Route>
        <Route path='blog/' element={<Blog />} ></Route>
      </Routes>
    </div>
  )
}

export default App
