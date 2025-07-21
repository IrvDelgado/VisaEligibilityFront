import { useState } from 'react'
import Form from './components/Form'
import ResultSection from './components/ResultSection'
import AdBox from './components/AdBox'
import LoadingSpinner from './components/LoadingSpinner'
import { checkEligibility } from './lib/api'

export default function App() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const handleSubmit = async (formData) => {
    setLoading(true)
    setError(null)
    setResult(null)
    try {
      const res = await checkEligibility(formData)
      setResult(res)
    } catch (err) {
      setError('Error al consultar la API')
    } finally {
      setLoading(false)
    }
  }

 return (
    <>
      <header className="bg-blue-700 text-white p-6 text-center font-bold text-3xl shadow-md">
        Visa Eligibility Checker
      </header>

      <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-5 gap-6 min-h-screen">
        
        {/* Sidebar Ads izquierda */}
        <aside className="hidden md:block md:col-span-1 sticky top-20">
          <AdBox position="Sidebar Left" />
        </aside>

        {/* Contenido principal: Form + Resultados */}
        <section className="md:col-span-3 bg-white p-6 rounded-lg shadow-lg flex flex-col">
          <Form onSubmit={handleSubmit} loading={loading} />
          {loading && <LoadingSpinner />}
          {error && <p className="mt-4 text-red-600 font-semibold">{error}</p>}

          {result?.success ? (
            <ResultSection result={result.data} />
          ) : (
            <p className="text-gray-500 mt-6">Introduce tus datos y presiona Enviar para ver resultados.</p>
          )}

          {/* Banner bottom ad */}
          <div className="mt-auto pt-6">
            <AdBox position="Bottom Banner" />
          </div>
        </section>

        {/* Sidebar Ads derecha */}
        <aside className="hidden md:block md:col-span-1 sticky top-20">
          <AdBox position="Sidebar Right" />
        </aside>
      </main>

      <footer className="text-center text-gray-600 py-4 mt-12 border-t">
        © 2025 VisaChecker. Todos los derechos reservados.
      </footer>
    </>
  )
}
