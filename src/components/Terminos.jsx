export default function Terminos() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-extrabold text-emerald-700 mb-6 border-b pb-2">
          Términos y Condiciones
        </h1>

        <section className="space-y-4 text-gray-700 text-base leading-relaxed">
          <p>
            <strong>Pronostika visa checker</strong> es una herramienta con fines informativos y educativos que ayuda a estimar la elegibilidad para visas
            estadounidenses. No garantizamos resultados ni somos un servicio oficial del gobierno de EE.UU.
          </p>

          <p>
            El contenido de este sitio no sustituye asesoría legal profesional. Las decisiones migratorias son responsabilidad del usuario y
            deben basarse en información oficial o asesoría especializada.
          </p>

          <p>
            VisaPathway se ofrece "tal como está", sin garantías de exactitud, disponibilidad o continuidad del servicio. Nos reservamos el
            derecho de modificar o retirar el contenido sin previo aviso.
          </p>

          <p>
            Al usar este sitio, aceptas estos términos. Si no estás de acuerdo, por favor no utilices el servicio.
          </p>

          <p className="text-sm text-gray-500 pt-4 border-t">
            Última actualización: Julio 2025
          </p>
        </section>
      </div>

      <div className="mt-8 text-center">
        <a
          href="/"
          className="inline-block px-4 py-2 border border-emerald-600 text-emerald-600 text-sm font-semibold rounded hover:bg-emerald-50 transition"
        >
          Volver al inicio
        </a>
      </div>
    </main>
  );
}
