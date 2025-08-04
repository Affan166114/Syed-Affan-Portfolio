import React, { useEffect, useState } from 'react'

const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("")
  const fullText = "<Hello, I'm Syed Affan/>"

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      index++
      setText(fullText.substring(0, index))

      if (index >= fullText.length) {
        clearInterval(interval)
        setTimeout(() => {
          onComplete()
        }, 1000)
      }
    }, 100)

    // Fallback timeout to prevent infinite loading
    const timeout = setTimeout(() => {
      clearInterval(interval)
      onComplete()
    }, 10000) // 10 second timeout

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [onComplete])

  return (
    <div className='fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center min-h-screen'>
      <div className="mb-4 text-6xl font-bold font-mono">
        {text} <span className='animate-blink ml-1'>|</span>
      </div>

      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  )
}

export default LoadingScreen