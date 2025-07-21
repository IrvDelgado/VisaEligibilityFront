export default function VisaCard({ visa }) {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
      <h3 className="text-lg font-semibold text-blue-800">{visa.name}</h3>
      <p className="text-sm text-blue-700">
        Puntaje: {visa.score} — {visa.category}
      </p>

      <ul className="mt-2 list-disc list-inside text-sm text-blue-900">
        {visa.requirements.map((req, i) => (
          <li key={i}>
            {req.key}: {req.achieved} (peso {req.weight})
          </li>
        ))}
      </ul>

      <p className="mt-2 text-sm font-medium text-blue-600">Siguientes pasos:</p>
      <ul className="list-disc list-inside text-sm text-blue-800">
        {visa.nextSteps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ul>
    </div>
  )
}
