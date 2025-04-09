"use client"


import React from 'react'
import ThemeToggle from "./ThemeToggle";
import { motion } from 'framer-motion';


export default function NavBar() {
  return (
    <motion.div 
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 1, ease: "easeInOut" }}
    className='bg-white dark:bg-gray-800 flex justify-between items-center px-5 py-2 shadow-md rounded-xl'>
        <span className='dark:text-white text-black'>
            <img src="/images/logo.svg" alt="Logo"  className='w-30'/>
        </span>
        <div className='flex justify-end rounded-lg hover:bg-gray-200  hover:dark:bg-transparent hover:border-red-600 hover:border '>
            <ThemeToggle />
        </div>  
    </motion.div>
  )
}
