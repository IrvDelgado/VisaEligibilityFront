export default function TiposDeVisas() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Tipos de Visas</h1>
      <p className="text-gray-700 mb-4">
        Existen distintos tipos de visas para ingresar a Estados Unidos, cada una con requisitos y propósitos específicos. Aquí te explicamos las más comunes.
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Visa de turista (B2):</strong> Para viajes de placer, vacaciones o tratamientos médicos.</li>
        <li><strong>Visa de negocios (B1):</strong> Para asistir a conferencias, reuniones o actividades comerciales.</li>
        <li><strong>Visa de estudiante (F1):</strong> Para estudiar en una institución académica acreditada.</li>
        <li><strong>Visa de intercambio (J1):</strong> Para programas culturales, educativos o de investigación.</li>
        <li><strong>Visa de trabajo temporal (H, L, O):</strong> Para profesionales calificados o traslados dentro de empresas.</li>
      </ul>
    </div>
  );
}