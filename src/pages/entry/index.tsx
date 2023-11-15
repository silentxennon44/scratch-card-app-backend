import React, { createContext, useContext, useEffect } from 'react'
import styles from './styles.module.scss'
import Background from '@/components/plum'

import LoginForm from './components/loginForm'
import RegisterForm from './components/registerForm'
import OtpForm from './components/otpForm'
import { useAppSelector } from '@/store/hooks'

function Entry() {

  const { entry } = useAppSelector(state => state.Pages)

  useEffect(() => {
    console.log(entry)
  }, [entry])
  
  // const [pageState, setPage]
  return (
    <main className={styles.mainContainer}>
      <Background/>

      <div className={styles.formsContainer}>
        <LoginForm/>
        <RegisterForm/>
        <OtpForm/>
      </div>
    </main>
  )
}

export default Entry