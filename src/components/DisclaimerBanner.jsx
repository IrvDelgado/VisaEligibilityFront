import { useState } from 'react'

export default function DisclaimerBanner({ isVisible, onDismiss }) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 max-w-md mx-auto md:max-w-lg">
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold text-gray-800 text-sm">Aviso Legal</h4>
                <p className="text-gray-600 text-xs mt-1">
                  {isExpanded ? (
                    <>
                      Esta herramienta es solo informativa. No almacenamos tus datos personales. 
                      No garantizamos aprobación de visas. Siempre consulta con un abogado de inmigración certificado.
                    </>
                  ) : (
                    <>
                      Herramienta informativa. No almacenamos datos.
                      <button
                        onClick={() => setIsExpanded(true)}
                        className="text-emerald-600 hover:text-emerald-700 ml-1 underline"
                      >
                        Leer más
                      </button>
                    </>
                  )}
                </p>
              </div>
              
              <button
                onClick={onDismiss}
                className="text-gray-400 hover:text-gray-600 ml-2 flex-shrink-0"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {isExpanded && (
              <div className="mt-2 pt-2 border-t border-gray-200">
                <button
                  onClick={onDismiss}
                  className="text-xs text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Entendido ✓
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}