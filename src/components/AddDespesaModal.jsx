import React, { useRef } from 'react'
import { useEntradas } from '../contexts/EntradasContext'

const AddDespesaModal = ({ show, handleClose }) => {
  if(!show) return null
  const descriptionRef = useRef()
  
  const amountRef = useRef()
  const { addDespesa} = useEntradas()

  function handleSubmit(e) {
    e.preventDefault()
    addDespesa({
      description: descriptionRef.current.value,
      amount: parseFloat(amountRef.current.value),
      })
    handleClose()
  }
   

    return (   
          <div>
            <form onSubmit={handleSubmit}>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-4" 
            >
              <div className="relative w-auto my-6 mx-auto max-w-sm">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t gap-2">
                    <h3 className="text-2xl font-semibold">
                      Adicionar despesa
                    </h3>
                    <div onClick={() => handleClose()} className='w-6 hover:bg-red-600 hover:rounded-full cursor-pointer'>
                    <img src="" alt="" srcSet="/assets/close.svg"/>            
                    </div>

                  </div>
                  {/*body*/}

                    <div className="relative px-6 py-1 flex-auto">
                      <p className="my- text-slate-500 text-md leading-relaxed">Descrição:</p>
                      <div className="mb-3 pt-0">
                      <input ref={descriptionRef} type="text" placeholder="Salário..." required className="px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-1 shadow outline-none focus:outline-none focus:ring w-full"/>
                      </div>
                    </div>
                    <div className="relative px-6 py-1 flex-auto">
                      <p className="my- text-slate-500 text-md leading-relaxed">Valor:</p>
                      <div className="mb-3 pt-0">
                      <input ref={amountRef} type="number" placeholder="1000" required className="px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-1 shadow outline-none focus:outline-none focus:ring w-full" />
                      </div>
                    </div>
                  
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit" >
                      Adicionar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </form>
          </div>
        ) 
    }
   



export default AddDespesaModal