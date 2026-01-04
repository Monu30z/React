import React from 'react'
import style from './Header.module.css'

function Header() {
  return (
    <div className={style.header}>
        <h3 className={style.h3}>Rama</h3>
        <button>Login</button>
    </div>
  )
}

export default Header