// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './views/HomePage/HomePage'
import { LoginPage } from './views/LoginPage/LoginPage'
import { NotFoundPage } from './views/NotFoundPage/NotFoundPage'

export const App: React.FC = () => {
  return (
    <>
      <div className='App'>
          <h1 className='bg-primary'>這裡放 HeaderComponent</h1>
          {/* 註冊路由表 */}
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
          <h1 className='bg-dark text-light'>這裡放 FooterComponent</h1>
      </div>
    </>
  )
}


