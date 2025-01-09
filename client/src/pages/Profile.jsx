import { useSelector } from 'react-redux';
import { useRef } from 'react';

export default function Profile() {
  const fileRef = useRef(null)
  const {currentUser} = useSelector((state) => state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='my-7 text-3xl font-semibold text-center text-green-700'>
        Profile
      </h1>
      <form className='flex-col flex gap-4'>
        <input type="file" ref={fileRef} hidden accept='image/*' />
        <img onClick={() => fileRef.current.click()} src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="Profile Picture"
        className='mt-2 h-24 w-26 cursor-pointer rounded-full self-center object-cover' />
        <input className='p-3 border rounded-lg' type="text" placeholder='username' id='username' />
        <input className='p-3 border rounded-lg' type="email" placeholder='email' id='email' />
        <input className='p-3 border rounded-lg' type="password" placeholder='password' id='password' />
        <button className='text-green-500 bg-gray-900 rounded-lg hover:opacity-80 
        uppercase p-3 disabled:opacity-60' >Update</button>
      </form>
      <div className='mt-5 flex justify-between'>
      <span className='cursor-pointer text-red-500'>Delete Account?</span>
      <span className='cursor-pointer text-red-500'>Sign Out?</span>
      </div>
    </div>
  )
}
