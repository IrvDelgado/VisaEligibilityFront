export default function Privacidad() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-extrabold text-emerald-700 mb-6 border-b pb-2">
          Política de Privacidad
        </h1>

        <section className="space-y-4 text-gray-700 text-base leading-relaxed">
          <p>
            En <strong>VisaPathway</strong>, respetamos tu privacidad. Esta herramienta es de uso educativo e informativo.
            No solicitamos ni almacenamos información personal sensible como direcciones, teléfonos o datos bancarios.
          </p>

          <p>
            Utilizamos servicios de terceros como Google AdSense, que pueden utilizar cookies para mostrarte anuncios personalizados.
            Puedes configurar el uso de cookies desde tu navegador.
          </p>

          <p>
            No compartimos, vendemos ni cedemos tus datos a ninguna empresa externa. No recopilamos información identificable.
          </p>

          <p>
            Al utilizar este sitio, aceptas los términos de esta política. Si tienes alguna pregunta, puedes escribirnos a:
            <a href="mailto:contacto@visapathway.com" className="text-emerald-600 hover:underline ml-1">
              contacto@visapathway.com
            </a>
          </p>

          <p className="text-sm text-gray-500 pt-4 border-t">
            Última actualización: Julio 2025
          </p>
        </section>
      </div>

      {/* Aquí va el botón */}
        <div className="mt-8 text-center">
        <a href="/"
            className="inline-block px-4 py-2 border border-emerald-600 text-emerald-600 text-sm font-semibold rounded hover:bg-emerald-50 transition"
        >
            Volver al inicio
        </a>
        </div>

    </main>
  );
}
