import { useState } from 'react'

export default function LegalDisclaimer({ isVisible, onAccept, onDecline }) {
  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Aviso Legal y Privacidad</h2>
              <p className="text-gray-600">Términos de uso del servicio de evaluación de visas</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Privacy Section */}
          <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
            <h3 className="font-semibold text-emerald-800 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Protección de Datos Personales
            </h3>
            <ul className="text-emerald-800 text-sm space-y-1">
              <li>• <strong>No almacenamos</strong> ninguna información personal que proporciones</li>
              <li>• <strong>No compartimos</strong> tus datos con terceros</li>
              <li>• <strong>No vendemos</strong> tu información a ninguna empresa</li>
              <li>• <strong>No creamos perfiles</strong> de usuario ni bases de datos</li>
              <li>• Los datos se procesan únicamente para generar tu evaluación</li>
            </ul>
          </div>

          {/* Legal Disclaimer */}
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              Exención de Responsabilidad Legal
            </h3>
            <ul className="text-yellow-800 text-sm space-y-1">
              <li>• Esta herramienta es <strong>solo informativa y educativa</strong></li>
              <li>• <strong>No sustituye</strong> el asesoramiento legal profesional</li>
              <li>• <strong>No garantizamos</strong> la aprobación de ninguna visa</li>
              <li>• Las evaluaciones son <strong>estimaciones basadas en algoritmos</strong></li>
              <li>• Los requisitos reales pueden variar según el consulado</li>
            </ul>
          </div>

          {/* Service Terms */}
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Términos del Servicio
            </h3>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>• Este servicio es gratuito y se ofrece "tal como está"</li>
              <li>• No nos hacemos responsables por decisiones basadas en nuestras evaluaciones</li>
              <li>• Recomendamos consultar con un abogado de inmigración certificado</li>
              <li>• Los resultados no constituyen una garantía de aprobación</li>
            </ul>
          </div>

          {/* Important Notice */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-2">Recomendación Importante</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>Siempre consulta con un abogado de inmigración certificado</strong> antes de tomar decisiones importantes sobre tu proceso de visa. 
              Los requisitos y procedimientos pueden cambiar, y cada caso es único. Esta herramienta es solo el primer paso en tu investigación.
            </p>
          </div>
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row gap-3 justify-end">
          <button
            onClick={onDecline}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
          >
            No Acepto
          </button>
          <button
            onClick={onAccept}
            className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
          >
            Acepto y Continúo
          </button>
        </div>
      </div>
    </div>
  )
}