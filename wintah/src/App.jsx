import { useState } from 'react'
import Count from '../hooks/Count.jsx'
import { Register } from '../hooks/Register.jsx'
import { Users } from '../hooks/User.jsx'
import { Navbar } from './components/Navbar.jsx'
import { Products } from './components/Products.jsx'

const App = () => {
  const [activeTab, setActiveTab] = useState('Home')

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === 'Home' && <Products />}
      {activeTab === 'About' && (
        <section className="mx-auto max-w-4xl px-4 py-10 text-center">
          <h1 className="mb-2 text-3xl font-normal">About</h1>
          <p className="text-zinc-600">Welcome to the About page.</p>
        </section>
      )}
      {activeTab === 'Service' && (
        <section className="mx-auto max-w-4xl px-4 py-10 text-center">
          <h1 className="mb-2 text-3xl font-normal">Service</h1>
          <p className="text-zinc-600">Explore our services.</p>
        </section>
      )}
      {activeTab === 'Contact' && (
        <section className="mx-auto max-w-4xl px-4 py-10 text-center">
          <h1 className="mb-2 text-3xl font-normal">Contact</h1>
          <p className="text-zinc-600">Get in touch with us.</p>
        </section>
      )}

      <hr className="my-6 border-zinc-200" />

      <div className="px-4 pb-8">
        <Register />
        <Count />
        <Users />
      </div>
    </div>
  )
}

export default App