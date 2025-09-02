import { useState } from 'react'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import { SyncusHomePage } from './features/homepage/pages/home'
import { SignInPage } from './features/auth/pages/login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<SyncusHomePage />} />
      <Route path='/login' element={<SignInPage/>} />
    </Routes>
  )
}

export default App



// import './App.css'
// import { Route, Routes } from 'react-router-dom';
// import { Layout } from './components/layout';
// import { DashboardPage } from './pages/dashboard';
// import { CustomerPage } from './pages/customer';
// import ProductPage from './pages/product';
// import { Login } from './pages/auth/Login';
// import { Register } from './pages/auth/register';
// import ProtectedRoute from './pages/protectedRoute';
// import { ContactPage } from './pages/contact';
// import { Ecommerce } from './pages/ecommerce';
// import { Vendor } from './pages/vendor';
// import { Profile } from './pages/profile';
// function App() {


//   return (
//     <Routes>
//       <Route path='/login' element={<Login />} />
//       <Route path='/register' element={<Register />} />
//       <Route element={
//         <ProtectedRoute>
//           <Layout />
//         </ProtectedRoute>
//       }>
//         <Route path='/' element={<DashboardPage />} />
//         <Route path='/ecommerce' element={<Ecommerce />} />
//         <Route path='/customer' element={<CustomerPage />} />
//         <Route path='/product' element={<ProductPage />} />
//         <Route path='/contact' element={<ContactPage />} />
//         <Route path='/vendor' element={<Vendor />} />
//         <Route path='/profile' element={<Profile />} />
//       </Route>
//     </Routes>
//   )
// }

// export default App
