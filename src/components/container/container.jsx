import React from 'react'

export default function container({children}) {
  return (
    <div className = "w-full px-4 mx-auto max-w-7xl">
      {children}
    </div>
  )
}
