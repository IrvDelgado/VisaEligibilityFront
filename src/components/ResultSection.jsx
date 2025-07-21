import VisaCard from './VisaCard'

export default function ResultSection({ result }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Resultado</h2>
      <p className="text-gray-600">
        Puntaje Total: <strong>{result.overallScore}</strong>
      </p>

      {result.eligibleVisas.map((visa) => (
        <VisaCard key={visa.type} visa={visa} />
      ))}
    </div>
  )
}
