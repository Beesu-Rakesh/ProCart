import NavBar from './components/NavBar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import User from './pages/User'
import ProductDetails from './pages/ProductDetails'
import PageNotFound from './pages/PageNotFound'
import './App.css'
import { Routes,Route,Navigate } from 'react-router-dom'
import PaginationProvider from './contexts/PaginationContext'

function App() {

  return (
    <PaginationProvider>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/product/:id" element={<ProductDetails></ProductDetails>}></Route>
        <Route path="/user" element={<User></User>}></Route>
        <Route path="/home" element={<Navigate to="/"></Navigate>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </PaginationProvider>
  )
}

export default App
