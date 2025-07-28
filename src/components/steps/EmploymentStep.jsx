import { useFormContext, useWatch } from 'react-hook-form'
import Tooltip from '../Tooltip'

export default function EmploymentStep() {
  const { register, formState: { errors } } = useFormContext()
  const hasJobOffer = useWatch({ name: 'employment.hasJobOffer' })

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="flex items-center gap-2 font-semibold mb-2" htmlFor="jobTitle">
            Profesión o Puesto de Trabajo
            <Tooltip content="Describe tu profesión actual o el puesto para el cual tienes oferta. Puedes ingresar cualquier profesión - no necesita estar en una lista específica.">
              <svg className="w-4 h-4 text-gray-400 cursor-help" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </Tooltip>
          </label>
          <input
            id="jobTitle"
            type="text"
            {...register('employment.jobTitle')}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Ej: Desarrollador de Software, Ingeniero Civil, Médico, Contador, Abogado, Chef, etc."
          />
          {errors?.employment?.jobTitle && (
            <p className="mt-1 text-sm text-red-600">{errors.employment.jobTitle.message}</p>
          )}
          <div className="mt-2 p-2 bg-blue-50 rounded text-xs text-blue-800">
            <strong>Nota:</strong> Las profesiones NAFTA/T-MEC tienen ventajas especiales, pero cualquier profesión puede aplicar a diferentes tipos de visa.
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 font-semibold mb-2" htmlFor="yearsExperience">
            Años de Experiencia
            <Tooltip content="Total de años de experiencia laboral en tu campo profesional">
              <svg className="w-4 h-4 text-gray-400 cursor-help" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </Tooltip>
          </label>
          <input
            id="yearsExperience"
            type="number"
            {...register('employment.yearsExperience', { valueAsNumber: true })}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Ej: 5"
            min="0"
            max="50"
          />
          {errors?.employment?.yearsExperience && (
            <p className="mt-1 text-sm text-red-600">{errors.employment.yearsExperience.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="flex items-center gap-2 font-semibold mb-3">
          Oferta Laboral
          <Tooltip content="¿Tienes una oferta de trabajo formal en el país de destino?">
            <svg className="w-4 h-4 text-gray-400 cursor-help" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </Tooltip>
        </label>

<div className="flex items-center gap-3 mb-3">
  <label
    htmlFor="hasJobOffer"
    className="flex items-center cursor-pointer gap-3"
  >
    <div className="relative">
      <input
        type="checkbox"
        id="hasJobOffer"
        {...register('employment.hasJobOffer')}
        className="sr-only peer"
      />
      <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-emerald-500 transition-all duration-300"></div>
      <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-md transform peer-checked:translate-x-5 transition-all duration-300"></div>
    </div>
    <span className="text-gray-700 text-sm">Tengo una oferta laboral en el país de destino</span>
  </label>
</div>



        {hasJobOffer && (
          <div className="mt-3 p-3 bg-green-50 rounded-lg">
            <p className="text-sm text-green-800">
              ¡Excelente! Una oferta laboral mejora significativamente tus posibilidades de obtener una visa de trabajo.
            </p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="flex items-center gap-2 font-semibold mb-2" htmlFor="jobType">
            Tipo de Trabajo
            <Tooltip content="Clasificación general del tipo de trabajo que realizas">
              <svg className="w-4 h-4 text-gray-400 cursor-help" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </Tooltip>
          </label>
          <select
            id="jobType"
            {...register('employment.jobType')}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="">Selecciona el tipo</option>
            <option value="specialty">Especializada (requiere título universitario)</option>
            <option value="nonagricultural">No Agrícola (técnica/comercial/servicios)</option>
            <option value="agricultural">Agrícola (trabajo de campo/agricultura)</option>
          </select>
          {errors?.employment?.jobType && (
            <p className="mt-1 text-sm text-red-600">{errors.employment.jobType.message}</p>
          )}
        </div>

        <div>
          <label className="flex items-center gap-2 font-semibold mb-2" htmlFor="occupationType">
            Tipo de Ocupación
            <Tooltip content="Clasificación de tu trabajo según los requerimientos de visa del país destino">
              <svg className="w-4 h-4 text-gray-400 cursor-help" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </Tooltip>
          </label>
          <select
            id="occupationType"
            {...register('employment.occupationType')}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="">Selecciona el tipo</option>
            <option value="specialty">Especializada (requiere título universitario)</option>
            <option value="technical">Técnica (habilidades especializadas)</option>
            <option value="general">General (no requiere educación específica)</option>
          </select>
          {errors?.employment?.occupationType && (
            <p className="mt-1 text-sm text-red-600">{errors.employment.occupationType.message}</p>
          )}
          <div className="mt-2 text-xs text-gray-600">
            <p><strong>Especializada:</strong> Medicina, ingeniería, IT, finanzas</p>
            <p><strong>Técnica:</strong> Electricista, plomero, chef, diseñador</p>
            <p><strong>General:</strong> Ventas, servicios, administración básica</p>
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 font-semibold mb-2" htmlFor="companySize">
            Tamaño de Empresa
            <Tooltip content="Tamaño de la empresa donde trabajas o trabajarías">
              <svg className="w-4 h-4 text-gray-400 cursor-help" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </Tooltip>
          </label>
          <select
            id="companySize"
            {...register('employment.companySize')}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="">Selecciona el tamaño</option>
            <option value="startup">Startup (1-10 empleados)</option>
            <option value="small">Pequeña (11-50 empleados)</option>
            <option value="medium">Mediana (51-250 empleados)</option>
            <option value="large">Grande (250+ empleados)</option>
          </select>
          {errors?.employment?.companySize && (
            <p className="mt-1 text-sm text-red-600">{errors.employment.companySize.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="flex items-center gap-2 font-semibold mb-2" htmlFor="salary">
          Salario Anual (USD)
          <Tooltip content="Tu salario anual actual o el ofrecido, convertido a dólares estadounidenses">
            <svg className="w-4 h-4 text-gray-400 cursor-help" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </Tooltip>
        </label>
        <input
          id="salary"
          type="number"
          {...register('employment.salary', { valueAsNumber: true })}
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Ej: 50000"
          min="0"
        />
        {errors?.employment?.salary && (
          <p className="mt-1 text-sm text-red-600">{errors.employment.salary.message}</p>
        )}
        <p className="mt-1 text-sm text-gray-500">Salarios más altos mejoran las posibilidades de aprobación</p>
      </div>
            
      <div className="flex items-center gap-3 mb-3">
        <label
          htmlFor="seasonal"
          className="flex items-center cursor-pointer gap-3"
        >
          <div className="relative">
            <input
              type="checkbox"
              id="seasonal"
              {...register('employment.seasonal')}
              className="sr-only peer"
            />
            <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-emerald-500 transition-all duration-300"></div>
            <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-md transform peer-checked:translate-x-5 transition-all duration-300"></div>
          </div>
          <span className="text-gray-700 text-sm">Es trabajo estacional (temporal)</span>
        </label>
      </div>


      <div className="bg-yellow-50 p-4 rounded-lg">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-yellow-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <div>
            <h4 className="font-semibold text-yellow-800 mb-1">Nota importante</h4>
            <p className="text-yellow-800 text-sm">
              Una oferta laboral formal de una empresa reconocida es uno de los factores más importantes para obtener una visa de trabajo.
              Los salarios competitivos demuestran que puedes mantenerte económicamente.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}