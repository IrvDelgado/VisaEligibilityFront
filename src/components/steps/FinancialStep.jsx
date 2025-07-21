import { useFormContext, useWatch } from 'react-hook-form'
import { useEffect } from 'react'
import Tooltip from '../Tooltip'

export default function FinancialStep() {
  const { register, formState: { errors }, setValue, clearErrors } = useFormContext()
  const hasSponsorship = useWatch({ name: 'financial.hasSponsorship' })
  
  // Limpiar el campo de patrocinio cuando se desmarca el checkbox
  useEffect(() => {
    if (!hasSponsorship) {
      setValue('financial.sponsorshipAmount', undefined)
      clearErrors('financial.sponsorshipAmount')
    }
  }, [hasSponsorship, setValue, clearErrors])

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="flex items-center gap-2 font-semibold mb-2" htmlFor="bankBalance">
            Balance Bancario (USD)
            <Tooltip content="Total de dinero disponible en tus cuentas bancarias, convertido a dólares">
              <svg className="w-4 h-4 text-gray-400 cursor-help" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </Tooltip>
          </label>
          <input
            id="bankBalance"
            type="number"
            {...register('financial.bankBalance', { valueAsNumber: true })}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Ej: 15000"
            min="0"
          />
          {errors?.financial?.bankBalance && (
            <p className="mt-1 text-sm text-red-600">{errors.financial.bankBalance.message}</p>
          )}
          <p className="mt-1 text-sm text-gray-500">Se recomienda al menos $10,000 USD para la mayoría de visas</p>
        </div>

        <div>
          <label className="flex items-center gap-2 font-semibold mb-2" htmlFor="monthlyIncome">
            Ingreso Mensual (USD)
            <Tooltip content="Tu ingreso mensual promedio, incluyendo salario y otras fuentes de ingresos">
              <svg className="w-4 h-4 text-gray-400 cursor-help" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </Tooltip>
          </label>
          <input
            id="monthlyIncome"
            type="number"
            {...register('financial.monthlyIncome', { valueAsNumber: true })}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Ej: 3000"
            min="0"
          />
          {errors?.financial?.monthlyIncome && (
            <p className="mt-1 text-sm text-red-600">{errors.financial.monthlyIncome.message}</p>
          )}
        </div>

        <div>
          <label className="flex items-center gap-2 font-semibold mb-2" htmlFor="financialSupport">
            Soporte Financiero Total (USD)
            <Tooltip content="Monto total disponible para cubrir todos los gastos durante tu estadía">
              <svg className="w-4 h-4 text-gray-400 cursor-help" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </Tooltip>
          </label>
          <input
            id="financialSupport"
            type="number"
            {...register('financial.financialSupport', { valueAsNumber: true })}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="Ej: 25000"
            min="0"
          />
          {errors?.financial?.financialSupport && (
            <p className="mt-1 text-sm text-red-600">{errors.financial.financialSupport.message}</p>
          )}
          <p className="mt-1 text-sm text-gray-600">Incluye ahorros, patrocinio, ingresos proyectados</p>
        </div>
      </div>

      <div>
        <label className="flex items-center gap-2 font-semibold mb-3">
          Patrocinio Financiero
          <Tooltip content="¿Alguien más (familia, empresa, institución) cubrirá tus gastos durante tu estadía?">
            <svg className="w-4 h-4 text-gray-400 cursor-help" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </Tooltip>
        </label>
        <div className="flex items-center gap-3 mb-3">
          <input
            type="checkbox"
            id="hasSponsorship"
            {...register('financial.hasSponsorship')}
            className="w-4 h-4 text-emerald-600 bg-white border-gray-300 rounded focus:ring-emerald-500"
          />
          <label htmlFor="hasSponsorship" className="text-gray-700">
            Tengo patrocinio financiero
          </label>
        </div>

        {hasSponsorship && (
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="sponsorshipAmount">
              Monto del Patrocinio (USD)
            </label>
            <input
              id="sponsorshipAmount"
              type="number"
              {...register('financial.sponsorshipAmount', { valueAsNumber: true })}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Ej: 20000"
              min="0"
            />
            {errors?.financial?.sponsorshipAmount && (
              <p className="mt-1 text-sm text-red-600">{errors.financial.sponsorshipAmount.message}</p>
            )}
            <p className="mt-1 text-xs text-gray-500">Monto total que cubrirá tu patrocinador</p>
          </div>
        )}
      </div>

      <div className="border-t pt-6">
        <h3 className="font-semibold text-lg mb-4">Vínculos con tu País de Origen</h3>
        <p className="text-sm text-gray-600 mb-4">
          Los oficiales de visa evalúan si tienes razones para regresar a tu país
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="hasProperty"
              {...register('financial.hasProperty')}
              className="w-4 h-4 text-emerald-600 bg-white border-gray-300 rounded focus:ring-emerald-500"
            />
            <label htmlFor="hasProperty" className="text-gray-700">
              Tengo propiedades (casa, terreno, negocio) en mi país
            </label>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="hasFamily"
              {...register('financial.hasFamily')}
              className="w-4 h-4 text-emerald-600 bg-white border-gray-300 rounded focus:ring-emerald-500"
            />
            <label htmlFor="hasFamily" className="text-gray-700">
              Tengo familia directa (padres, cónyuge, hijos) en mi país
            </label>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="hasReturnTicket"
              {...register('financial.hasReturnTicket')}
              className="w-4 h-4 text-emerald-600 bg-white border-gray-300 rounded focus:ring-emerald-500"
            />
            <label htmlFor="hasReturnTicket" className="text-gray-700">
              Tengo o compraré boleto de regreso
            </label>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div>
            <h4 className="font-semibold text-blue-800 mb-1">Factores clave para la aprobación</h4>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>• <strong>Solvencia económica:</strong> Demostrar que puedes cubrir todos tus gastos</li>
              <li>• <strong>Vínculos fuertes:</strong> Familia, propiedades o trabajo te motivarán a regresar</li>
              <li>• <strong>Documentación:</strong> Estados de cuenta, cartas de patrocinio, escrituras</li>
              <li>• <strong>Consistencia:</strong> Tus ingresos deben ser consistentes con tu trabajo</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}