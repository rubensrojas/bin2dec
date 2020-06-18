import React, { useState, useEffect } from 'react'
import './bin2dec.css'

const Bin2Dec = () => {
  const [binary, setBinary] = useState('')
  const [decimal, setDecimal] = useState()

  useEffect(() => {
    calculate(binary)
  }, [binary])

  const calculate = (binary) => {
    let value = 0
    for(let i = binary.length-1, j = 0; i >= 0; i--, j++){
      value += binary[i] * (2**j)
    }
    setDecimal(value)
  }

  const checkInput = (e) => {
    const lastNumber = e.target.value[e.target.value.length-1]
    
    if(Number(lastNumber) === 0 || Number(lastNumber)  === 1){
      setBinary(e.target.value)
    } else if (lastNumber === undefined){
      setBinary('')
    } else {
      alert("Deve ser 0 ou 1!")
    }
  }
  
  return (
    <div style={{alignContent: 'center'}}>
      <h1 className="titulo">Conversor de binário para decimal</h1>
      <div className='calculator'>
        <div className='input-container'>
          <h2 className="titulo">Digite o binário</h2>
          <input className='input'
            size='1'
            type='text'
            placeholder='Digite 0 ou 1'
            value = {binary}
            onChange = {e => {
              checkInput(e)
            }}
        />
        </div>
        <div className='input-container'>
          <h2 className="titulo">Decimal</h2>
          <input className='input'
            size='1'
            type='text'
            placeholder='Decimal'
            value = {decimal}
            readOnly
          />
        </div>
      </div>
    </div>
  )
}

export default Bin2Dec