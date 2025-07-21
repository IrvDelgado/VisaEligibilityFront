import { useState } from 'react'

export default function Tooltip({ children, content, position = 'top' }) {
  const [isVisible, setIsVisible] = useState(false)

  const positionClasses = {
    top: '-top-2 -translate-y-full left-1/2 -translate-x-1/2',
    bottom: '-bottom-2 translate-y-full left-1/2 -translate-x-1/2',
    left: 'top-1/2 -translate-y-1/2 -left-2 -translate-x-full',
    right: 'top-1/2 -translate-y-1/2 -right-2 translate-x-full'
  }

  return (
    <div 
      className="relative inline-flex"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={`absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg max-w-xs ${positionClasses[position]}`}>
          {content}
          <div className={`absolute w-2 h-2 bg-gray-900 rotate-45 ${
            position === 'top' ? 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2' :
            position === 'bottom' ? 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2' :
            position === 'left' ? 'top-1/2 right-0 -translate-y-1/2 translate-x-1/2' :
            'top-1/2 left-0 -translate-y-1/2 -translate-x-1/2'
          }`} />
        </div>
      )}
    </div>
  )
}