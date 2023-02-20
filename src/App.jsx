import React, { useState } from 'react'
import AddEntradaModal from './components/AddEntradaModal'
import AddDespesaModal from './components/AddDespesaModal'
import EntradasCard from './components/EntradasCard'
import DespesasCard from './components/DespesasCard'
import { useEntradas } from './contexts/EntradasContext'
import Footer from './components/Footer'


function App() {
  const [showAddEntrada, setShowAddEntrada] = useState(false)
  const [showAddDespesa, setShowAddDespesa] = useState(false)
  const { entrada, despesa, deleteEntrada, deleteDespesa } = useEntradas()
  
  const totalEntrada = entrada.reduce(getEntrada, 0)
  function getEntrada(total, item){
    return total + item.amount
  }

  const totalSaida= despesa.reduce(getSaida, 0)
  function getSaida(total, item){
    return total + item.amount
  }


  return (
    <div>

      {/* Navbar */}
      <div>
        <div className='flex justify-between px-[5%] p-2 bg-sky-900 items-center'>
          <div className='text-[16px] text-white font-bold'>Monthly Expenses</div>
          <div className='flex gap-2'>
              <button className='text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 text-sm focus:ring-green-300 font-medium rounded-full px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
              onClick={() => {setShowAddEntrada(true)}}
              >Add Receita</button>
              <button className='text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900' onClick={() => setShowAddDespesa(true)}>Add Despesa</button>
          </div>
        </div>
      </div>

      {/* Entrada Modal */}

      <AddEntradaModal show={showAddEntrada} handleClose={() => setShowAddEntrada(false)} />
      <AddDespesaModal show={showAddDespesa} handleClose={() => setShowAddDespesa(false)} />
      

      {/* Body Container */}
      <div className='mx-[8%] my-4 gap-2 grid'>

        <div className='md:flex md:justify-between mx-[8%] my-4 gap-2 grid'>
          <div className='grid w-full h-fit gap-y-1'>
            <div>
              <p className='text-xl font-bold '>Receitas</p>
              <hr />            
            </div>

            <div className='grid gap-1'>
              {entrada.map(entra => (
              <EntradasCard
              key={entra.id} 
              description={entra.description} 
              amount={entra.amount}
              del={() => deleteEntrada(entra)}
              />
              ))}
            </div>
          </div>

          <div className='grid w-full h-fit gap-y-1'>
            <div>
              <p className='text-xl font-bold '>Despesas</p>
              <hr />            
            </div>

            <div className='grid gap-1'>
              {despesa.map(saida => (
              <DespesasCard
              key={saida.id} 
              description={saida.description} 
              amount={saida.amount}
              del={() => deleteDespesa(saida)} 
              />))}
            </div>         
          </div>
        </div>

        {/* Footer */}
        <div className='mx-[8%] grid'>
          <div>
            <p className='text-xl font-bold '>Resumo</p>
            <hr />            
          </div>

          <div>            
            <Footer recebido={totalEntrada} gasto={totalSaida} sobra={totalEntrada - totalSaida}/>
          </div>
        </div>

      </div>

    </div>
  )
}

export default App
