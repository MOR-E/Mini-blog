import React from 'react'

import style from "./Register.module.css"

import { useState, useEffect } from 'react'

const Register = () => {
  return (
    <div>
      <form>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuario e compartilhe suas histórias</p>
        <label>
          <span>Nome:</span>
          <input type="text" name='displayName' required placeholder='Nome do usuario' />
        </label>
        <label>
          <span>Email:</span>
          <input type="email" name='email' required placeholder='Email do usuario' />
        </label>
        <label>
          <span>senha:</span>
          <input type="password" name='password' required placeholder='Insira sua senha' />
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input type="password" name='fonrimPassword' required placeholder='Confirma sua senha' />
        </label>
        <button className='btn'> Cadastrar</button>
      </form>
    </div>
  )
}

export default Register