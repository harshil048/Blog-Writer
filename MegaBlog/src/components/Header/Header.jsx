import React from 'react'
import { Container, Logo, LogoutButton } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import img1 from '../../assets/1.png'

function Header() {

  const authStatus = useSelector((state) => state.auth.status);

  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]


  return (
    <header className='shadow bg-[#040D12]'>
      <Container>
        <nav className='flex'>
          <div>
            <Link to='/'>
              <div className='flex'>
                <img src={img1} width='50px' className='mt-2 mb-3' />
                <p className='mt-[21%] ml-3 text-2xl text-[#93B1A6] font-semibold' style={{fontFamily: 'Zeyada'}}>Mega-Blog</p>
              </div>
            </Link>
          </div>
          <ul className='flex gap-3 items-center mx-auto text-lg text-[#93B1A6] font-bold font-sans'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 hover:text-black rounded-full'
                  >{item.name}</button>
                </li>
              ) : null
            )}
            {
              authStatus && (
                <li>
                  <LogoutButton />
                </li>
              )
            }
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header