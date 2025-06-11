import {Suspense} from 'react'
import MyNavbar from '../15_browserRouter/MyNavbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <MyNavbar/>
        <Suspense fallback={<h1 className='bg-green-200 text-5xl text-center mt-10'>Loading...</h1>}>
          <Outlet/>
        </Suspense>
        
    </div>
  )
}

export default Layout