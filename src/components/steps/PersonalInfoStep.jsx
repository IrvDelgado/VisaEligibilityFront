import { useFormContext } from 'react-hook-form'
import Tooltip from '../Tooltip'

export default function PersonalInfoStep() {
  const { register, formState: { errors } } = useFormContext()

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="flex items-center gap-2 font-semibold mb-2" htmlFor="nationality">
            Nacionalidad
            <Tooltip content="Tu país de nacimiento o ciudadanía actual">
              <svg className="w-4 h-4 text-gray-400 cursor-help" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </Tooltip>
          </label>
          <select
            id="nationality"
            {...register('personalInfo.nationality')}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="MX">México</option>
            <option value="CO">Colombia</option>
            <option value="AR">Argentina</option>
            <option value="PE">Perú</option>
            <option value="CL">Chile</option>
            <option value="EC">Ecuador</option>
            <option value="VE">Venezuela</option>
            <option value="BR">Brasil</option>
            <option value="UY">Uruguay</option>
            <option value="PY">Paraguay</option>
          </select>
          {errors?.personalInfo?.nationality && (
            <p className="mt-1 text-sm text-red-600">{errors.personalInfo.nationality.message}</p>
          )}
        </div>

        <div>
          <label className="flex items-center gap-2 font-semibold mb-2" htmlFor="destinationCountry">
            Tipo de Visa USA
            <Tooltip content="El tipo de visa estadounidense que te interesa solicitar">
              <svg className="w-4 h-4 text-gray-400 cursor-help" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </Tooltip>
          </label>
          <select
            id="destinationCountry"
            {...register('personalInfo.destinationCountry')}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="">Selecciona tipo de visa</option>
            <option value="tourist">B-2 (Turista)</option>
            <option value="business">B-1 (Negocios)</option>
            <option value="student">F-1 (Estudiante)</option>
            <option value="work-h1b">H-1B (Trabajo Especializado)</option>
            <option value="work-l1">L-1 (Transferencia Intracompañía)</option>
            <option value="exchange">J-1 (Intercambio)</option>
            <option value="family">Visa Familiar (IR/CR)</option>
            <option value="investor">E-2 (Inversionista)</option>
          </select>
          {errors?.personalInfo?.destinationCountry && (
            <p className="mt-1 text-sm text-red-600">{errors.personalInfo.destinationCountry.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="flex items-center gap-2 font-semibold mb-2" htmlFor="age">
          Edad
          <Tooltip content="Tu edad actual en años. Debe ser mayor de 18 años para la mayoría de visas">
            <svg className="w-4 h-4 text-gray-400 cursor-help" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </Tooltip>
        </label>
        <input
          id="age"
          type="number"
          {...register('personalInfo.age', { valueAsNumber: true })}
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          placeholder="Ej: 25"
          min="16"
          max="75"
        />
        {errors?.personalInfo?.age && (
          <p className="mt-1 text-sm text-red-600">{errors.personalInfo.age.message}</p>
        )}
        <p className="mt-1 text-sm text-gray-600">Entre 16 y 75 años</p>
      </div>

      <div>
        <label className="flex items-center gap-2 font-semibold mb-2" htmlFor="visitDuration">
          Duración de Visita (días)
          <Tooltip content="¿Por cuántos días planeas estar en Estados Unidos?">
            <svg className="w-4 h-4 text-gray-400 cursor-help" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </Tooltip>
        </label>
        <input
          id="visitDuration"
          type="number"
          {...register('personalInfo.visitDuration', { valueAsNumber: true })}
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          placeholder="Ej: 90"
          min="1"
          max="365"
        />
        {errors?.personalInfo?.visitDuration && (
          <p className="mt-1 text-sm text-red-600">{errors.personalInfo.visitDuration.message}</p>
        )}
      </div>


<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
  <label className="inline-flex items-center gap-2 text-sm text-gray-800">
    <input
      type="checkbox"
      {...register('personalInfo.priorUSExperience')}
      className="w-4 h-4 accent-emerald-600"
    />
    <span className="leading-snug">He visitado Estados Unidos antes</span>
  </label>

  <label className="inline-flex items-center gap-2 text-sm text-gray-800">
    <input
      type="checkbox"
      {...register('personalInfo.previousVisaRecord')}
      className="w-4 h-4 accent-emerald-600"
    />
    <span className="leading-snug">He tenido visas estadounidenses anteriormente</span>
  </label>
</div>
 


      <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-emerald-700 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div>
            <h4 className="font-semibold text-emerald-800 mb-1">Información importante</h4>
            <p className="text-emerald-800 text-sm">
              Esta información básica nos ayuda a determinar tu elegibilidad para diferentes tipos de visas estadounidenses.
              Los requisitos pueden variar según tu nacionalidad y el tipo de visa que solicites.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
