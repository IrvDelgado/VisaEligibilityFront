export default function ProgressIndicator({ steps, currentStep, completedSteps }) {
  return (
    <div className="w-full mb-8 overflow-x-auto">
      <div className="flex md:justify-between gap-6 md:gap-0 min-w-[400px] md:min-w-0">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div className="flex flex-col items-center min-w-[60px]">
              <div
                className={`
                  w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm font-bold shadow-lg transition-all duration-300
                  ${index === currentStep 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white ring-4 ring-emerald-200 transform scale-110' 
                    : completedSteps.has(index)
                    ? 'bg-gradient-to-r from-emerald-400 to-green-400 text-white'
                    : 'bg-white text-gray-400 border-2 border-gray-300'
                  }
                `}
              >
                {completedSteps.has(index) ? (
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  index + 1
                )}
              </div>
              <span className={`mt-2 text-xs md:text-sm font-medium text-center max-w-20 transition-colors ${
                index === currentStep ? 'text-emerald-600' : completedSteps.has(index) ? 'text-emerald-500' : 'text-gray-500'
              }`}>
                {step.title}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div 
                className={`h-1 md:h-2 mx-2 md:mx-4 rounded-full transition-all duration-500 ${
                  completedSteps.has(index) 
                    ? 'bg-gradient-to-r from-emerald-400 to-green-400' 
                    : index === currentStep - 1
                    ? 'bg-gradient-to-r from-emerald-300 to-gray-300'
                    : 'bg-gray-300'
                }`}
                style={{ minWidth: '40px' }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
