import React, { useEffect, useState } from 'react'
import styles from './login.module.scss'
import { useAppSelector } from '@/store/hooks'
import { EntryState } from '@/store/reducers/pages'

function LoginForm() {
  const { entry } = useAppSelector(state => state.Pages)
  const [ isShown, setIsShown ] = useState(entry===EntryState.LOGIN)

  useEffect(() => {
    setIsShown(entry===EntryState.LOGIN)
  }, [entry])
  
  return (
    <>
    {
      isShown && (
        <div className='enter-x'>
          login
        </div>
      )
    }
    </>
  )
}

export default LoginForm