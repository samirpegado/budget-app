import React from 'react'

const Navbar = () => {


  return (
    <div className='flex justify-between px-[5%] p-2 bg-sky-900 items-center'>
        <div className='text-[16px] text-white font-bold'>Monthly Expenses</div>
        <div className='flex gap-2'>
            <button className='text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 text-sm focus:ring-green-300 font-medium rounded-full px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
            onClick={() => {console.log('clicou')}}
            >Entradas</button>
            <button className='text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900'>Despesas</button>
        </div>
    </div>
  )
}

export default Navbar