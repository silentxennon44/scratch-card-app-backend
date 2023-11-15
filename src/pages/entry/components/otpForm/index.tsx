import React, { useEffect, useState } from 'react'
import styles from './authenticate.module.scss'
import { useAppSelector } from '@/store/hooks'
import { EntryState } from '@/store/reducers/pages'

function OtpForm() {
  const { entry } = useAppSelector(state => state.Pages)
  const [ isShown, setIsShown ] = useState(entry===EntryState.OTP)
  
  useEffect(() => {
    setIsShown(entry===EntryState.OTP)
  }, [entry])
  return (
    <>
    {
      isShown && (
        <div className='enter-x'>
          OTP
        </div>
      )
    }
    </>
  )
}

export default OtpForm