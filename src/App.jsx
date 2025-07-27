import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Privacidad from './components/Privacidad'
import Terminos from './components/Terminos'

export default function App() {
  const [accepted, setAccepted] = useState(() => {
    return localStorage.getItem('cookiesAccepted') === 'true'
  })

  useEffect(() => {
    if (accepted) {
      localStorage.setItem('cookiesAccepted', 'true')
    }
  }, [accepted])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/terminos" element={<Terminos />} />
        </Routes>
      </Router>

      {!accepted && (
        <div className="fixed bottom-0 w-full bg-white border-t p-4 shadow-md z-50 text-sm text-gray-700 text-center">
          <p>
            Usamos cookies para mejorar tu experiencia. Al continuar, aceptas nuestra{' '}
            <a href="/privacidad" className="text-emerald-600 underline">política de privacidad</a>.
          </p>
          <button
            onClick={() => setAccepted(true)}
            className="mt-2 px-4 py-1 bg-emerald-600 text-white rounded hover:bg-emerald-700"
          >
            Aceptar
          </button>
        </div>
      )}
    </>
  )
}
