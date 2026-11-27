import React from 'react'

const NAV_ITEMS = ['Home', 'About', 'Service', 'Contact']

export const Navbar = ({ activeTab, onTabChange }) => {
  return (
    <nav className="mx-2 mt-2 flex items-center justify-around rounded-full bg-blue-500 p-1.5 text-white shadow-sm">
      {NAV_ITEMS.map((item) => {
        const isActive = activeTab === item
        return (
          <button
            key={item}
            type="button"
            onClick={() => onTabChange(item)}
            className={`flex-1 cursor-pointer rounded-full py-2 text-center text-sm font-medium transition-colors ${
              isActive
                ? 'border border-white/80 bg-white/15 text-white'
                : 'text-white/90 hover:bg-white/10'
            }`}
          >
            {item}
          </button>
        )
      })}
    </nav>
  )
}
