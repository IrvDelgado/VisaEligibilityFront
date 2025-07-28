import { Link } from 'react-router-dom'
import AdBox from './AdBox'

export default function TiposdeVisas() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-10 space-y-8 text-gray-800">
      {/* Título principal */}
      <header className="text-center">
        <h1 className="text-4xl font-bold text-emerald-700 mb-4">
          Tipos de Visas para Estados Unidos
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Conoce las categorías más comunes de visas estadounidenses y cómo se adaptan a tus objetivos personales o profesionales.
        </p>
      </header>

      {/* Anuncio top */}
      <AdBox position="Guía - Tipos de Visas (Top)" />

      {/* Contenido dividido */}
      <section className="space-y-6">
        <article>
          <h2 className="text-2xl font-semibold text-emerald-600 mb-2">Visa de Turista (B1/B2)</h2>
          <p className="text-gray-700 leading-relaxed">
            Esta visa permite a los extranjeros ingresar temporalmente a EE. UU. por motivos de turismo, tratamiento médico o negocios. 
            No es válida para trabajar ni estudiar. Es una de las más comunes y suele tener una duración de hasta 10 años con estadías temporales.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold text-emerald-600 mb-2">Visa de Estudiante (F1/M1)</h2>
          <p className="text-gray-700 leading-relaxed">
            Las visas F1 están dirigidas a estudiantes académicos en universidades, colegios o escuelas de idiomas. 
            Las M1 son para estudios técnicos o vocacionales. Requieren admisión previa en una institución acreditada y demostrar solvencia económica.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold text-emerald-600 mb-2">Visa de Trabajo (H, L, O, etc.)</h2>
          <p className="text-gray-700 leading-relaxed">
            Estas visas permiten trabajar legalmente en EE. UU. bajo ciertas condiciones. La H-1B, por ejemplo, es para profesionales con alta preparación. 
            La L-1 es para traslados dentro de una misma empresa. Otras como la O-1 son para personas con habilidades extraordinarias.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold text-emerald-600 mb-2">Visa de Inmigrante</h2>
          <p className="text-gray-700 leading-relaxed">
            Las visas de inmigrante permiten residir permanentemente en EE. UU. Son necesarias para obtener la Green Card. 
            Pueden basarse en lazos familiares, empleo o inversión, entre otras vías.
          </p>
        </article>
      </section>

      {/* Anuncio en medio */}
      <AdBox position="Guía - Tipos de Visas (Medio)" />

      {/* CTA + botón */}
      <div className="text-center mt-10">
        <p className="text-gray-600 mb-4">¿Listo para saber qué visa es ideal para ti?</p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-lg text-lg font-semibold transition bg-emerald-600 hover:bg-emerald-700 text-white no-underline"
          style={{
            color: 'white',
            WebkitTextFillColor: 'white',
            textDecoration: 'none'
          }}
        >
          Volver al Inicio
        </Link>


      </div>

      {/* Anuncio final */}
      <AdBox position="Guía - Tipos de Visas (Final)" />
    </main>
  )
}
