import React, { useEffect, useState } from 'react'
import styles from './register.module.scss'
import { useAppSelector } from '@/store/hooks'
import { EntryState } from '@/store/reducers/pages'

function RegisterForm() {
  const { entry } = useAppSelector(state => state.Pages)
  const [ isShown, setIsShown ] = useState(entry===EntryState.REGISTER)
  
  useEffect(() => {
    setIsShown(entry===EntryState.REGISTER)
  }, [entry])

  return (
    <>
    {
      isShown && (
        <div className='enter-x'>
          Register
        </div>
      )
    }
    </>
  )
}

export default RegisterForm