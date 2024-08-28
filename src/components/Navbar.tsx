import Link from 'next/link'
import React from 'react'
import SigninBtn from './SigninBtn'
import { getAuthSession } from '@/lib/auth'
import UserAccountNav from './UserAccountNav'

type Props = {}

const Navbar = async (props: Props) => {
  const session=await getAuthSession()
  console.log(session)
  return (
   <>
    <nav className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300 py-2">
        <div className="flex items-center justify-center h-full gap-2 px-8 mx-auto sm:justify-between max-w-7xl">
            <Link href='/gallery'>
        <p className="rounded-lg border-2 border-b-4 border-r-4 bg-violet-600 text-white border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
          EduForge
          </p>
          </Link>
          <span className="inline-flex items-center px-3 py-1 text-sm font-semibold text-violet-800 bg-violet-100 rounded-full">
          Beta Stage
        </span>
          <div className='flex items-center'>
          <Link href="/" className='mr-3 hover:text-violet-600'  >Home</Link>
            <Link href='/courses' className='mr-3 hover:text-violet-600'>Courses</Link>
            {session?.user && (<>
              <Link href="/gencourse" className='mr-3 hover:text-violet-600'  >Generate course</Link>
          {/* <Link href='/settings' className='mr-3 hover:text-violet-600'>Settings</Link> */}
         
            </>)}
            {session?.user ? (
              <UserAccountNav user={session.user} />
            ) : (
              <SigninBtn />
            )}
            
         </div>
        </div>
    </nav>
   
  
   
   </>
  )
}

export default Navbar