import { useState, useEffect } from 'react'
import FormWizard from './FormWizard'
import ResultSection from './ResultSection'
import AdBox from './AdBox'
import LoadingSpinner from './LoadingSpinner'
import DisclaimerBanner from './DisclaimerBanner'
import { checkEligibility } from '../lib/api'

export default function Home() {
  
      const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const [showDisclaimer, setShowDisclaimer] = useState(false)
  const [disclaimerDismissed, setDisclaimerDismissed] = useState(false)

  useEffect(() => {
    // Show disclaimer banner after 5 seconds (after user has seen ads)
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem('visaPathwayDisclaimerDismissed')
      if (!dismissed) {
        setShowDisclaimer(true)
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handleDismissDisclaimer = () => {
    setShowDisclaimer(false)
    setDisclaimerDismissed(true)
    sessionStorage.setItem('visaPathwayDisclaimerDismissed', 'true')
  }

  const handleSubmit = async (formData) => {
    console.log('🎯 App.handleSubmit called with data:', formData)
    setLoading(true)
    setError(null)
    setResult(null)
    try {
      console.log('📡 Sending data to API:', formData)
      const res = await checkEligibility(formData)
      console.log('📥 API response:', res)
      setResult(res)
    } catch (err) {
      console.error('🚨 API Error:', err)
      console.error('🚨 Full error details:', {
        status: err.response?.status,
        statusText: err.response?.statusText,
        data: err.response?.data,
        url: err.config?.url,
        method: err.config?.method
      })
      
      if (err.response?.data?.errors) {
        console.error('🚨 Specific API errors:', err.response.data.errors)
      }
      
      let errorMessage = 'Error desconocido al consultar el API'
      
      if (err.response?.status === 400) {
        let baseMessage = err.response?.data?.message || 'Los datos enviados no son correctos'
        
        // If there are specific field errors, include them
        if (err.response?.data?.errors && Array.isArray(err.response.data.errors)) {
          const specificErrors = err.response.data.errors.map(error => 
            typeof error === 'string' ? error : error.message || JSON.stringify(error)
          ).join(', ')
          baseMessage += ` Detalles: ${specificErrors}`
        }
        
        errorMessage = `Datos inválidos (Error 400): ${baseMessage}`
      } else if (err.response?.status === 500) {
        errorMessage = `Error del servidor (Error 500): ${err.response?.data?.message || 'Problema interno del servidor'}`
      } else if (err.response?.status === 404) {
        errorMessage = `Servicio no encontrado (Error 404): El endpoint no existe`
      } else if (err.response?.data?.message) {
        errorMessage = `Error ${err.response.status}: ${err.response.data.message}`
      } else if (err.message) {
        errorMessage = `Error de conexión: ${err.message}`
      }
      
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

 return (
    <>

      <header className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black bg-opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            
            {/* Icon */}

            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-white bg-opacity-20 rounded-2xl backdrop-blur-sm">
              <img src="/favicon.svg" alt="VisaPathway Logo" className="w-22 h-22"/>
            </div>

            
            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
              VisaPathway
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-emerald-300 to-cyan-300 rounded-full"></div>
              <div className="h-1 w-6 bg-emerald-200 rounded-full"></div>
              <div className="h-1 w-12 bg-gradient-to-r from-cyan-300 to-emerald-300 rounded-full"></div>
            </div>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-emerald-50 mb-8 max-w-3xl mx-auto leading-relaxed">
              Tu puerta hacia el sueño americano. Descubre tu elegibilidad para visas estadounidenses con inteligencia artificial.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
                <div className="w-12 h-12 bg-emerald-400 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">Análisis Instantáneo</h3>
                <p className="text-emerald-700 text-sm">Resultados en segundos con IA avanzada</p>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
                <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">100% Personalizado</h3>
                <p className="text-emerald-700 text-sm">Evaluación basada en tu perfil único</p>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
                <div className="w-12 h-12 bg-teal-400 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">Guía Paso a Paso</h3>
                <p className="text-emerald-700 text-sm">Te acompañamos en todo el proceso</p>
              </div>
            </div>

            {!result && (
              <div className="mt-10 max-w-2xl mx-auto">
                <div className="bg-emerald-500 bg-opacity-30 backdrop-blur-sm rounded-2xl p-6 border border-emerald-300 border-opacity-30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-300 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-emerald-700" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-white text-lg mb-2">¿Cómo funciona?</h3>
                      <p className="text-emerald-50 text-base leading-relaxed">
                        Completa nuestro formulario inteligente en 4 pasos simples. Nuestro sistema analizará tu perfil y te mostrará tu elegibilidad para diferentes tipos de visas estadounidenses, junto con recomendaciones personalizadas para mejorar tus posibilidades.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Top Banner Ad - Premium placement */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <AdBox position="Header Banner" />
      </div>

      <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-5 gap-6">
        
        {/* Sidebar Ads izquierda */}
        <aside className="hidden md:block md:col-span-1 sticky top-20 space-y-6">
          <AdBox position="Sidebar Left Top" />
          <AdBox position="Sidebar Left Middle" />
          <AdBox position="Sidebar Left Bottom" />
        </aside>

        {/* Contenido principal: Form + Resultados */}
        <section className="md:col-span-3 space-y-6">
          {/* In-content ad before form */}
          <div className="w-full">
            <AdBox position="Pre-Form Banner" />
          </div>

          {!result ? (
            <FormWizard onSubmit={handleSubmit} loading={loading} />
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-lg">
              {loading && <LoadingSpinner />}
              {error && (
                <div className="mt-4 p-6 bg-red-50 border-2 border-red-300 rounded-xl shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-red-800 mb-2">¡Ups! Algo salió mal</h3>
                      <p className="text-red-800 mb-3">{error}</p>
                      <div className="bg-red-100 p-3 rounded-lg">
                        <p className="text-red-700 text-sm font-medium mb-1">💡 Posibles soluciones:</p>
                        <ul className="text-red-700 text-sm space-y-1">
                          <li>• Verifica que todos los campos requeridos estén llenos</li>
                          <li>• Asegúrate de que los números sean válidos</li>
                          <li>• Intenta refrescar la página y llenar el formulario nuevamente</li>
                        </ul>
                      </div>
                      <button
                        onClick={() => setError(null)}
                        className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                      >
                        Cerrar mensaje
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              {result ? (
                <>
                  {/* Ad between results */}
                  <div className="mb-6">
                    <AdBox position="Mid-Results Banner" />
                  </div>
                  <ResultSection result={result.data || result} />
                </>
              ) : (
                <p className="text-gray-500 mt-6">Introduce tus datos y presiona Enviar para ver resultados.</p>
              )}
              
              <div className="mt-6 pt-4 border-t">
                <button
                  onClick={() => setResult(null)}
                  className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Nueva Consulta
                </button>
              </div>
            </div>
          )}

          {/* Banner bottom ad - moved closer to content */}
          <div className="w-full">
            <AdBox position="Post-Content Banner" />
          </div>
        </section>

        {/* Sidebar Ads derecha */}
        <aside className="hidden md:block md:col-span-1 sticky top-20 space-y-6">
          <AdBox position="Sidebar Right Top" />
          <AdBox position="Sidebar Right Middle" />
          <AdBox position="Sidebar Right Bottom" />
        </aside>
      </main>

      {/* Bottom sticky ad for maximum visibility */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <AdBox position="Bottom Sticky Banner" />
      </div>

      <footer className="bg-gray-50 text-center text-gray-600 py-8 mt-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="font-semibold text-gray-800">VisaPathway</span>
            </div>
            <p className="text-sm">© 2025 VisaPathway. Tu puerta hacia el sueño americano.</p>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <span>Powered by</span>
              <span className="text-emerald-600 font-semibold">DS Technology</span>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col md:flex-row justify-center items-center text-xs text-gray-500 mb-6 gap-2">
            <a href="/privacidad" className="hover:underline text-gray-600">
              Política de Privacidad
            </a>
            <span className="hidden md:inline">|</span>
            <a href="/terminos" className="hover:underline text-gray-600">
              Términos y Condiciones
            </a>
          </div>


          {/* Legal Disclaimer */}
          <div className="border-t border-gray-200 pt-6">
            <div className="bg-gray-100 rounded-lg p-4 text-left">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-xs text-gray-600 leading-relaxed">
                  <p className="font-semibold mb-1">Aviso Legal Importante:</p>
                  <p className="mb-2">
                    <strong>VisaPathway es una herramienta informativa y educativa.</strong> No almacenamos, vendemos ni compartimos tus datos personales. 
                    Esta evaluación no garantiza la aprobación de ninguna visa y no sustituye el asesoramiento legal profesional. 
                  </p>
                  <p>
                    Los requisitos de visa pueden cambiar sin previo aviso. <strong>Siempre consulta con un abogado de inmigración certificado</strong> 
                    antes de tomar decisiones importantes sobre tu proceso de visa. Este servicio se ofrece "tal como está" sin garantías de ningún tipo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Non-intrusive disclaimer banner */}
      <DisclaimerBanner 
        isVisible={showDisclaimer}
        onDismiss={handleDismissDisclaimer}
      />
    </>
  )
}
