export default function ResultSection({ result }) {
  return (
    <div className="space-y-6">
      {result.eligibleVisas.map((visa) => (
        <div
          key={visa.type}
          className="border rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer"
        >
          <h2 className="text-xl font-bold text-blue-700">{visa.name}</h2>
          <p className="mb-2 font-semibold">{visa.category}</p>
          <p>Score: {visa.score}</p>

          <ul className="list-disc ml-5 mt-2">
            {visa.requirements.map((req) => (
              <li key={req.key}>
                {req.key}: {req.achieved}% (Peso: {req.weight})
              </li>
            ))}
          </ul>

          <p className="mt-3 font-semibold">Próximos pasos:</p>
          <ul className="list-disc ml-5">
            {visa.nextSteps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
