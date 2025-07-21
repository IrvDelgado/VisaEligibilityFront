import { useFormContext, useWatch } from 'react-hook-form'
import { useEffect } from 'react'
import Tooltip from '../Tooltip'

export default function EducationStep() {
  const { register, formState: { errors }, setValue, clearErrors } = useFormContext()
  const hasEnglishCertification = useWatch({ name: 'education.hasEnglishCertification' })
  
  // Limpiar el campo de puntuación cuando se desmarca el checkbox
  useEffect(() => {
    if (!hasEnglishCertification) {
      setValue('education.englishTestScore', undefined)
      clearErrors('education.englishTestScore')
    }
  }, [hasEnglishCertification, setValue, clearErrors])

  return (
    <div className="space-y-6">
      <div>
        <label className="flex items-center gap-2 font-semibold mb-2" htmlFor="degreeLevel">
          Nivel Educativo
          <Tooltip content="Tu máximo nivel de estudios completado. Niveles más altos generalmente mejoran tus posibilidades">
            <svg className="w-4 h-4 text-gray-400 cursor-help" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </Tooltip>
        </label>
        <select
          id="degreeLevel"
          {...register('education.degreeLevel')}
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        >
          <option value="">Selecciona tu nivel educativo</option>
          <option value="highschool">Preparatoria/Bachillerato</option>
          <option value="bachelor">Licenciatura/Ingeniería</option>
          <option value="master">Maestría/Especialización</option>
          <option value="doctorate">Doctorado/PhD</option>
        </select>
        {errors?.education?.degreeLevel && (
          <p className="mt-1 text-sm text-red-600">{errors.education.degreeLevel.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="flex items-center gap-2 font-semibold mb-2" htmlFor="englishProficiency">
            Nivel de Inglés
            <Tooltip content="Evalúa honestamente tu nivel de inglés. Esto es crucial para visas de trabajo y estudio">
              <svg className="w-4 h-4 text-gray-400 cursor-help" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </Tooltip>
          </label>
          <select
            id="englishProficiency"
            {...register('education.englishProficiency')}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="">Selecciona tu nivel</option>
            <option value="basic">Básico (A1-A2)</option>
            <option value="intermediate">Intermedio (B1-B2)</option>
            <option value="advanced">Avanzado (C1-C2)</option>
            <option value="native">Nativo</option>
          </select>
          {errors?.education?.englishProficiency && (
            <p className="mt-1 text-sm text-red-600">{errors.education.englishProficiency.message}</p>
          )}
          <div className="mt-2 text-xs text-gray-600">
            <p><strong>Básico:</strong> Frases simples, vocabulario limitado</p>
            <p><strong>Intermedio:</strong> Conversaciones cotidianas, trabajo básico</p>
            <p><strong>Avanzado:</strong> Fluidez profesional, estudios superiores</p>
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 font-semibold mb-2">
            Certificación de Inglés
            <Tooltip content="¿Tienes algún certificado oficial como TOEFL, IELTS, Cambridge (FCE, CAE, CPE), etc.?">
              <svg className="w-4 h-4 text-gray-400 cursor-help" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </Tooltip>
          </label>
          <div className="flex items-center gap-3 mb-3">
            <input
              type="checkbox"
              id="hasEnglishCertification"
              {...register('education.hasEnglishCertification')}
              className="w-4 h-4 text-emerald-600 bg-white border-gray-300 rounded focus:ring-emerald-500"
            />
            <label htmlFor="hasEnglishCertification" className="text-gray-700">
              Tengo certificación oficial
            </label>
          </div>
          
          {hasEnglishCertification && (
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="englishTestScore">
                Puntuación (TOEFL/IELTS/Cambridge)
              </label>
              <input
                id="englishTestScore"
                type="number"
                {...register('education.englishTestScore', { valueAsNumber: true })}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Ej: 90 (TOEFL), 7.0 (IELTS), 180 (Cambridge)"
              />
              {errors?.education?.englishTestScore && (
                <p className="mt-1 text-sm text-red-600">{errors.education.englishTestScore.message}</p>
              )}
              <p className="mt-1 text-xs text-gray-500">TOEFL: 0-120, IELTS: 0-9, Cambridge: 100-200</p>
            </div>
          )}
        </div>
      </div>

      <div>
        <label className="flex items-center gap-2 font-semibold mb-2" htmlFor="academicGPA">
          Promedio Académico (Opcional)
          <Tooltip content="Tu GPA o promedio general. Si no tienes GPA en escala 4.0, déjalo vacío">
            <svg className="w-4 h-4 text-gray-400 cursor-help" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </Tooltip>
        </label>
        <input
          id="academicGPA"
          type="number"
          step="0.1"
          {...register('education.academicGPA', { valueAsNumber: true })}
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          placeholder="Ej: 3.5"
          min="0"
          max="4"
        />
        {errors?.education?.academicGPA && (
          <p className="mt-1 text-sm text-red-600">{errors.education.academicGPA.message}</p>
        )}
        <p className="mt-1 text-sm text-gray-500">Escala 4.0 (déjalo vacío si no aplica)</p>
      </div>

      <div className="bg-green-50 p-4 rounded-lg">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h4 className="font-semibold text-green-800 mb-1">Consejos para mejorar tu perfil</h4>
            <ul className="text-green-800 text-sm space-y-1">
              <li>• Un título universitario aumenta significativamente tus opciones</li>
              <li>• Las certificaciones de inglés son muy valoradas por los oficiales de visa</li>
              <li>• Un buen promedio académico puede compensar otros factores</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}