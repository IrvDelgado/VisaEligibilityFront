import { Link } from 'react-router-dom'
import AdBox from './AdBox'

export default function ConsejosEntrevista() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 text-gray-700">
      
      {/* Título */}
      <h1 className="text-4xl font-bold text-emerald-700">Consejos para una Entrevista Consular Exitosa</h1>

      {/* Anuncio superior */}
      <AdBox position="Encabezado - Consejos de Entrevista" />

      {/* Introducción */}
      <p className="text-lg leading-relaxed">
        La entrevista consular es el momento decisivo en tu solicitud de visa. A continuación, te compartimos recomendaciones esenciales para que te presentes con confianza y aumentes tus probabilidades de éxito.
      </p>

      {/* Sección 1 */}
      <section>
        <h2 className="text-2xl font-semibold text-emerald-800 mb-2">Antes de la Entrevista</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Investiga tu tipo de visa:</strong> Conoce los requisitos y el propósito específico de la visa que solicitaste.</li>
          <li><strong>Organiza tu documentación:</strong> Ten listos todos los documentos necesarios como el pasaporte, DS-160, cita, comprobante de pago, y evidencias de arraigo.</li>
          <li><strong>Ensaya respuestas:</strong> Practica con preguntas frecuentes como “¿A qué vas a EE.UU.?” o “¿Quién pagará tu viaje?”. Sé claro y breve.</li>
        </ul>
      </section>



      {/* Sección 2 */}
      <section>
        <h2 className="text-2xl font-semibold text-emerald-800 mb-2">Durante la Entrevista</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Preséntate con buena actitud:</strong> Llega puntual, vístete de manera formal y mantén una postura segura.</li>
          <li><strong>Escucha atentamente:</strong> Contesta lo que te preguntan, sin dar información innecesaria o divagar.</li>
          <li><strong>Sé honesto:</strong> Los oficiales consulares valoran la transparencia. No intentes engañar o exagerar tu situación.</li>
          <li><strong>Muestra arraigo:</strong> Expón razones claras para regresar a tu país (trabajo, estudios, familia, etc.).</li>
        </ul>
      </section>

      {/* Sección 3 */}
      <section>
        <h2 className="text-2xl font-semibold text-emerald-800 mb-2">Errores Comunes a Evitar</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Faltar a la cita o llegar tarde.</li>
          <li>Responder con nerviosismo excesivo o contradicciones.</li>
          <li>No llevar documentos importantes.</li>
          <li>Decir que vas a quedarte en EE.UU. sin intención de regresar.</li>
        </ul>
      </section>

      {/* Anuncio final */}
      <AdBox position="Inferior - Consejos de Entrevista" />

      {/* Conclusión */}
      <p className="text-md leading-relaxed">
        Recuerda: cada caso es único. Prepárate con anticipación, infórmate bien y mantén la calma. Incluso si te niegan la visa, puedes aprender del proceso y volver a intentarlo con una mejor preparación.
      </p>

      {/* Botón de regreso */}
      <div className="pt-4 text-center">
<Link
  to="/"
  className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow transition no-underline"
  style={{ color: 'white', textDecoration: 'none' }}
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
