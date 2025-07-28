export default function ResultSection({ result }) {
  // Handle different response structures
  if (!result) {
    return (
      <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
        <div className="flex items-center">
          <svg className="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <p className="text-yellow-800">No se recibieron datos del servidor.</p>
        </div>
      </div>
    )
  }

  // If result doesn't have the expected structure, show raw data
  if (!result.eligibleVisas || !Array.isArray(result.eligibleVisas)) {
    return (
      <div className="space-y-4">
        <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-lg">
          <h3 className="text-lg font-semibold text-emerald-800 mb-3">Resultado de la consulta:</h3>
          <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      </div>
    )
  }

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600 bg-green-50 border-green-200';
    if (score >= 60) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    if (score >= 40) return 'text-orange-600 bg-orange-50 border-orange-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const getScoreIcon = (score) => {
    if (score >= 80) return (
      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    );
    if (score >= 60) return (
      <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V8a1 1 0 00-.293-.707z" clipRule="evenodd" />
      </svg>
    );
    return (
      <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
      </svg>
    );
  };

  const getProgressBarColor = (score) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    if (score >= 40) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const getRequirementIcon = (achieved) => {
    if (achieved >= 80) return '✅';
    if (achieved >= 60) return '⚠️';
    if (achieved >= 40) return '❌';
    return '🚫';
  };

  const getRequirementLabel = (key) => {
    const translations = {
      // Personal Info
      'nationality': 'Nacionalidad',
      'age': 'Edad',
      'degreeLevel': 'Nivel de Estudios',
      'englishProficiency': 'Nivel de Inglés',
      'financialProof': 'Comprobante Financiero',
      'academicRecord': 'Expediente Académico',
      'tiesHomeCountry': 'Vínculos con País de Origen',
      'priorUSExperience': 'Experiencia Previa en EE.UU.',
      'financialSupport': 'Soporte Financiero',
      'visitDuration': 'Duración de Visita',
      'returnTicket': 'Boleto de Regreso',
      'previousVisaRecord': 'Historial de Visas',
      
      // Employment
      'jobTitle': 'Profesión',
      'jobType': 'Tipo de Trabajo',
      'hasJobOffer': 'Oferta de Trabajo',
      'salary': 'Salario',
      'seasonal': 'Trabajo Estacional',
      'occupationType': 'Tipo de Ocupación',
      
      // Family Ties
      'marriedToUSCitizen': 'Casado con Ciudadano Estadounidense',
      'proofGenuineMarriage': 'Prueba de Matrimonio Genuino',
      'proofOfRelationship': 'Prueba de Relación',
      'engagedToUSCitizen': 'Comprometido con Ciudadano Estadounidense',
      
      // Preferences/Special
      'hasI20': 'Formulario I-20',
      'purposeValid': 'Propósito Válido',
      'treatyCountry': 'País con Tratado',
      'investmentUSD': 'Inversión en USD',
      'businessViable': 'Negocio Viable',
      
      // Special checks
      'NAFTA_LIST': 'Profesión NAFTA/T-MEC',
      'nafta_list': 'Profesión NAFTA/T-MEC'
    };
    
    return translations[key] || key.replace(/([A-Z])/g, ' $1').trim();
  };

  return (
    <div className="space-y-8">
      {/* Overall Score Header */}
      <div className="text-center py-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg text-white">
        <h2 className="text-3xl font-bold mb-2">Resultado de Elegibilidad</h2>
        <div className="flex items-center justify-center space-x-4">
          <div className="text-5xl font-bold">{result.overallScore}%</div>
          <div className="text-lg">
            Puntuación General
            <br />
            <span className="text-emerald-100">
              {result.eligibleVisas.length} visa{result.eligibleVisas.length !== 1 ? 's' : ''} elegible{result.eligibleVisas.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </div>

      {/* Eligible Visas */}
      <div className="grid gap-6">
        {result.eligibleVisas.map((visa, index) => (
          <div
            key={visa.type}
            className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Visa Header */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 px-6 py-4 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getScoreIcon(visa.score)}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{visa.name}</h3>
                    <p className="text-sm text-gray-600">Tipo: {visa.type} • {visa.category}</p>
                  </div>
                </div>
                <div className={`px-4 py-2 rounded-full border ${getScoreColor(visa.score)}`}>
                  <span className="font-bold text-lg">{visa.score}%</span>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Puntuación de Elegibilidad</span>
                  <span>{visa.score}% de 100%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full transition-all duration-500 ${getProgressBarColor(visa.score)}`}
                    style={{ width: `${visa.score}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Visa Content */}
            <div className="p-6 space-y-6">
{/* Requirements */}
<div>
  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
    <svg className="w-5 h-5 mr-2 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
    Evaluación de Requisitos
  </h4>

  <div className="overflow-x-auto">
    <div className="min-w-[500px] grid gap-3">
      {visa.requirements.map((req) => (
        <div key={req.key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <span className="text-lg">{getRequirementIcon(req.achieved)}</span>
            <div>
              <div className="font-medium text-gray-800">
                {getRequirementLabel(req.key)}
              </div>
              <div className="text-sm text-gray-600">
                Importancia: {Math.round(req.weight * 100)}%
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-bold text-lg">{req.achieved}%</div>
            <div className="w-16 bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${getProgressBarColor(req.achieved)}`}
                style={{ width: `${req.achieved}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


              {/* Next Steps */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Próximos Pasos Recomendados
                </h4>
                <div className="space-y-2">
                  {visa.nextSteps.map((step, i) => (
                    <div key={i} className="flex items-start space-x-3 p-3 bg-emerald-50 rounded-lg border-l-4 border-emerald-400">
                      <div className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {i + 1}
                      </div>
                      <p className="text-gray-700 flex-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Show all visas if there are ineligible ones */}
        {result.allVisas && result.allVisas.length > result.eligibleVisas.length && (
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Otras Visas Evaluadas</h3>
            <div className="grid gap-4">
              {result.allVisas
                .filter(visa => visa.score < 50)
                .slice(0, 3)
                .map((visa) => (
                <div key={visa.type} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-700">{visa.name}</h4>
                      <p className="text-sm text-gray-600">{visa.category}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-600">{visa.score}%</div>
                      <div className="text-xs text-gray-500">No elegible</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
