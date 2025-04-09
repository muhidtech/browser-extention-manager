'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (storedTheme) {
      setTheme(storedTheme)
      document.documentElement.classList.add(storedTheme)
    } else {
      // default to light
      document.documentElement.classList.add('light')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
  }, [theme])

  return (
    <button
      className=" text-black dark:text-white transition cursor-pointer"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <img src={theme === 'dark' ? '/images/icon-sun.svg' : '/images/icon-moon.svg'} alt="Dark Mode Toggle" className='px-3 py-2'/>
    </button>   
  )
}
