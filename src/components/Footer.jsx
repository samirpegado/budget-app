import React from 'react'
import { formatCurrency } from '../utilities/formatCurrency'

const Footer = ({recebido, gasto, sobra}) => {
  return (
    <div className='grid gap-1'>
      <div className='w-full h-fit bg-emerald-800 p-2 rounded-md shadow-md'>
        <div className='flex gap-2 justify-between'>
          <div className='text-base text-white'>Total das receitas</div>
          <div className='text-lg text-white'>{formatCurrency(recebido)}</div>
        </div>      
      </div>
      <div className='w-full h-fit bg-yellow-500 p-2 rounded-md shadow-md'>
        <div className='flex gap-2 justify-between'>
          <div className='text-base text-white'>Total das despesas</div>
          <div className='text-lg text-white'>{formatCurrency(gasto)}</div>
        </div>      
      </div>
      <div className='w-full h-fit bg-sky-900 p-2 rounded-md shadow-md'>
        <div className='flex gap-2 justify-between'>
          <div className='text-base font-semibold  text-white'>Receitas - Despesas</div>
          <div className='text-lg font-semibold  text-white'>{formatCurrency(sobra)}</div>
        </div>      
      </div>
      

    </div>
  
  )
}

export default Footer