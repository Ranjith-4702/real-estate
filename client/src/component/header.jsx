import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default function header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
          <Link to='/'> <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Ranju</span>
            <span className='text-slate-700'>Estates</span>
        </h1> </Link>
          
        <form className='bg- bg-slate-100 p-3 rounded-full flex items-center' >
            <input type="text" placeholder='search...' className='focus:outline-none w-24 sm:w-64'/>
            <FaSearch className='text-slate-500' />
        </form>
        <ul className='flex gap-4'>
          <Link to='/'><li className='text-slate-700 hidden sm:inline hover:underline'>Home</li></Link>
          <Link to='/about'><li className='text-slate-700 hidden sm:inline hover:underline'>About</li></Link>
          <Link to='/signin'><li className='text-slate-700 hidden sm:inline hover:underline'>SignIn</li></Link>
        </ul>
      </div>
    </header>
  )
}
