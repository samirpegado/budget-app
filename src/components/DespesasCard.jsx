import React from 'react'
import { formatCurrency } from '../utilities/formatCurrency'

const DespesasCard = ({description, amount, del}) => {
  return (
      <div className='w-full h-fit bg-yellow-300 p-2 rounded-md shadow-md '>
      <div className='flex gap-2 justify-between'>
        <div className='text-base font-semibold  text-yellow-900'>{description}</div>        
        <div className='flex gap-2 items-center'>
          <div className='text-lg font-semibold  text-yellow-900'>{formatCurrency(amount)}</div>
          <div onClick={del} className='w-6 hover:bg-red-600 hover:rounded-full cursor-pointer'>
            <img src="" alt="" srcSet="/assets/close.svg"/>            
          </div>
        </div>
      </div>
    </div>
    
  )
}
export default DespesasCard