"use client"

// components/ToggleButton.js
import { useState } from 'react'
import { useTheme } from 'next-themes'
import { LuSunMedium, LuMoonStar } from "react-icons/lu";
import { RxDesktop } from "react-icons/rx";

const DarkMode = () => {
  const { setTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState('system')

  const handleToggle = () => {
    if (currentTheme === 'system' || currentTheme === 'light') {
      setTheme('dark')
      setCurrentTheme('dark')
    }
    if (currentTheme === 'dark') {
      setTheme('light')
      setCurrentTheme('light')
    }
  }

  const renderIcon = () => {
    if (currentTheme === 'dark') {
      return <LuMoonStar className='h-4 w-4' />
    } 
    if (currentTheme === 'light') {
      return <LuSunMedium className='h-4 w-4 text-' />
    } 
    if (currentTheme === 'system') {
      return <RxDesktop className='h-4 w-4' />
    }
  }

  return (
    <button onClick={handleToggle} className='outline outline-2 outline-primary dark:outline-accentwhite p-2 rounded-full'>
      {renderIcon()}
    </button>
  )
}

export default DarkMode
