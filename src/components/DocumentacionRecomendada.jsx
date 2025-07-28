import { Link } from 'react-router-dom'
import AdBox from './AdBox'

export default function DocumentacionRecomendada() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">

      {/* Encabezado */}
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Documentación Recomendada para tu Entrevista de Visa
        </h1>
        <p className="text-gray-600 text-lg">
          Presentarte bien preparado puede marcar la diferencia entre una aprobación o una negación.
        </p>
      </header>

      {/* Anuncio superior */}
      <AdBox position="Guía: Documentación - Top" />

      {/* Sección 1 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-emerald-700">🗂️ Documentos Obligatorios</h2>
        <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
          <li><strong>Pasaporte vigente:</strong> válido al menos 6 meses después del viaje.</li>
          <li><strong>Formulario DS-160:</strong> hoja de confirmación con código de barras.</li>
          <li><strong>Pago de solicitud:</strong> comprobante del arancel MRV.</li>
          <li><strong>Carta de cita:</strong> para el CAS y la entrevista consular.</li>
          <li><strong>Foto:</strong> solo si no fue aceptada digitalmente en el DS-160.</li>
        </ul>
      </section>


      {/* Sección 2 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-emerald-700">📎 Documentos Adicionales</h2>
        <p className="text-gray-700">
          Aunque no siempre se piden, estos documentos pueden ayudarte a demostrar vínculos con tu país:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
          <li><strong>Pruebas laborales:</strong> carta del trabajo, recibos o contrato.</li>
          <li><strong>Pruebas académicas:</strong> constancia de estudios o credencial escolar.</li>
          <li><strong>Pruebas económicas:</strong> escrituras, predial, estados bancarios.</li>
          <li><strong>Vínculos familiares:</strong> actas de nacimiento o matrimonio.</li>
        </ul>
      </section>

      {/* Sección 3 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-emerald-700">🎯 Motivo del Viaje</h2>
        <p className="text-gray-700">
          Lleva información clara sobre por qué viajas y qué actividades planeas realizar.
        </p>
        <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
          <li><strong>Reservaciones:</strong> hotel o vuelos (no es necesario pagar).</li>
          <li><strong>Cartas de invitación:</strong> familiares o empresas con datos completos.</li>
          <li><strong>Itinerario:</strong> actividades, fechas y lugares.</li>
        </ul>
      </section>

      {/* Anuncio inferior */}
      <AdBox position="Guía: Documentación - Bottom" />

      {/* Botón de regreso */}
      <div className="pt-4 text-center">
<Link
  to="/"
  className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow transition-colors duration-200"
  style={{ textDecoration: 'none', color: '#fff' }}
>
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
  Volver al inicio
</Link>

      </div>
    </div>
  )
}
