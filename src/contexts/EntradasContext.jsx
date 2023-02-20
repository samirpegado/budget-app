import React, { createContext, useContext, useState }from 'react'
import { v4 as uuidV4 } from 'uuid'
import useLocalStorage from '../hooks/useLocalStorage'

const EntradasContext = createContext({})

export function useEntradas() {
    return useContext(EntradasContext)
}

export const EntradasProvider = ({ children }) => {

    const [entrada, setEntrada] = useLocalStorage("entrada", [])
    const [despesa, setDespesa] = useLocalStorage("despesa", [])

    function addEntrada({ entradaId, description, amount}){
      setEntrada(entradaAnterior => {
        return [...entradaAnterior, {id: uuidV4(), entradaId, description, amount}]
      })

    }
    function addDespesa({ despesaId, description, amount}){
      setDespesa(despesaAnterior => {
        return [...despesaAnterior, {id: uuidV4(), despesaId, description, amount}]
      })

    }
    function deleteEntrada({ id }){
      setEntrada(entradaAnterior => {
        return entradaAnterior.filter(entrada => entrada.id !== id)
      })

    }
    function deleteDespesa({ id }){
      setDespesa(despesaAnterior => {
        return despesaAnterior.filter(despesa => despesa.id !== id)
      })

    }

  return (
    <EntradasContext.Provider value={{
        entrada,
        despesa,
        addEntrada,
        addDespesa,
        deleteEntrada,
        deleteDespesa
    }}>{children}</EntradasContext.Provider>
    
  )
}
