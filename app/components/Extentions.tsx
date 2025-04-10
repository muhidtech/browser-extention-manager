"use client"
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

type Extension = {
  logo: string
  name: string
  description: string
  isActive: boolean
}

export default function Extensions() {
  const [data, setData] = useState<Extension[]>([])
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all')

  useEffect(() => {
    fetch('/data.json') // data.json should be in /public folder
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error('Error fetching extensions:', err))
  }, [])

  const filteredData = data.filter((ext) => {
    if (filter === 'all') return true
    return filter === 'active' ? ext.isActive : !ext.isActive
  })

  return (
    <div className="">
      <div className='flex justify-between items-center max-md:flex-col'>
        <motion.h1 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="text-4xl font-bold text-black dark:text-white mb-4">
            Extension List
        </motion.h1>
        <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="space-x-2 mb-6">
            <button onClick={() => setFilter('all')} className={`btn ${filter === 'all' ? 'bg-red-500 text-white dark:text-gray-700' : 'bg-white'}`}>
            All
            </button>
            <button onClick={() => setFilter('active')} className={`btn ${filter === 'active' ? 'bg-red-500 text-white dark:text-gray-700' : 'bg-white'}`}>
            Active
            </button>
            <button onClick={() => setFilter('inactive')} className={`btn ${filter === 'inactive' ? 'bg-red-500 text-white dark:text-gray-700' : 'bg-white'}`}>
            Inactive
            </button>
        </motion.div>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredData.map((item, id) => (
            <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: id * 0.5 }}
            whileHover={{ scale: 1.05 }}
            key={id} 
            className="p-4 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className='flex items-center gap-5 mb-5 '>
                    <img src={item.logo} alt={item.name} className="w-15 h-15 mb-2" />
                    <div className='flex flex-col gap-2'>
                        <h2 className="font-semibold text-xl ">{item.name}</h2>
                        <p className='text-sm md:w-45 sm:w-80'>{item.description}</p>
                    </div>
                </div>

                <div className='flex justify-between items-center pr-3'>
                    <button className='btn dark:text-white border'>
                        Remove
                    </button>

                    {/* Radial Toggle for Active State */}
                <div className="relative">
                    <button
                    className={`w-12 h-6 bg-gray-300 rounded-full p-1 transition-all duration-300 cursor-pointer hover:border-red-600 hover:border ${
                        item.isActive ? 'bg-red-500' : 'bg-gray-400'
                    }`}
                    onClick={() => {
                        // Handle toggling active state here
                        // If you want to toggle this state and update it
                    }}
                    >
                    <span
                        className={`cursor-pointer block w-4 h-4 bg-white rounded-full transition-all duration-300 ${
                        item.isActive ? 'translate-x-6' : 'translate-x-0'
                        }`}
                    />
                    </button>
                </div>
                </div>

        </motion.div>
            ))}
        </div>
    </div>
  )
}
