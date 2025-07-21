import { useState, useEffect } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { steps, visaFormSchema } from '../lib/validation'
import PersonalInfoStep from './steps/PersonalInfoStep'
import EducationStep from './steps/EducationStep'
import EmploymentStep from './steps/EmploymentStep'
import FinancialStep from './steps/FinancialStep'
import ProgressIndicator from './ProgressIndicator'

const stepComponents = {
  personal: PersonalInfoStep,
  education: EducationStep,
  employment: EmploymentStep,
  financial: FinancialStep,
}

export default function FormWizard({ onSubmit, loading }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState(new Set())

  const methods = useForm({
    resolver: zodResolver(visaFormSchema),
    defaultValues: {
      personalInfo: {
        nationality: 'MX',
        destinationCountry: '',
        age: '',
        priorUSExperience: false,
        visitDuration: '',
        previousVisaRecord: false,
      },
      education: {
        degreeLevel: '',
        englishProficiency: '',
        hasEnglishCertification: false,
        englishTestScore: '',
        academicGPA: '',
      },
      employment: {
        jobTitle: '',
        jobType: '',
        hasJobOffer: false,
        occupationType: '',
        salary: '',
        yearsExperience: '',
        companySize: '',
        seasonal: false,
      },
      financial: {
        bankBalance: '',
        monthlyIncome: '',
        hasSponsorship: false,
        sponsorshipAmount: '',
        financialSupport: '',
        hasProperty: false,
        hasFamily: false,
        hasReturnTicket: false,
      }
    },
    mode: 'onChange'
  })

  const { trigger, formState: { isValid, errors }, getValues } = methods

  const currentStepData = steps[currentStep]
  const StepComponent = stepComponents[currentStepData.id]

  // Debug effect to monitor form state
  useEffect(() => {
    console.log('🔍 FormWizard state update:', {
      currentStep,
      isLastStep: currentStep === steps.length - 1,
      isValid,
      loading,
      totalSteps: steps.length,
      currentStepData: currentStepData?.id,
      buttonDisabled: loading || !isValid,
      formErrors: errors
    })
  }, [currentStep, isValid, loading, currentStepData, errors])

  const handleNext = async () => {
    const stepKey = currentStepData.id === 'personal' ? 'personalInfo' : currentStepData.id
    const isStepValid = await trigger(stepKey)
    
    if (isStepValid) {
      setCompletedSteps(prev => new Set([...prev, currentStep]))
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1)
      }
    } else {
      // Scroll to first error
      setTimeout(() => {
        const firstError = document.querySelector('.text-red-600')
        if (firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }, 100)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    console.log('🚀 handleSubmit called')
    console.log('Current form state:', { currentStep, isLastStep })
    
    const isFormValid = await trigger()
    console.log('📋 Form validation result:', isFormValid)
    
    if (isFormValid) {
      console.log('✅ Form is valid, processing submission...')
      const formData = getValues()
      console.log('📝 Raw form data:', formData)
      
      const transformedData = {
        personalInfo: {
          nationality: formData.personalInfo.nationality,
          age: parseInt(formData.personalInfo.age),
          degreeLevel: formData.education.degreeLevel,
          englishProficiency: getEnglishProficiencyScore(formData.education.englishProficiency),
          financialProof: getFinancialScore(formData.financial),
          academicRecord: getAcademicScore(formData.education),
          tiesHomeCountry: getTiesScore(formData.financial),
          priorUSExperience: formData.personalInfo.priorUSExperience,
          financialSupport: parseInt(formData.financial.financialSupport) || 0,
          visitDuration: parseInt(formData.personalInfo.visitDuration) || 90,
          returnTicket: formData.financial.hasReturnTicket,
          previousVisaRecord: formData.personalInfo.previousVisaRecord,
        },
        employment: {
          jobTitle: formData.employment.jobTitle?.toLowerCase().trim(),
          jobType: formData.employment.jobType,
          hasJobOffer: formData.employment.hasJobOffer,
          occupationType: formData.employment.occupationType,
          salary: parseInt(formData.employment.salary),
          seasonal: formData.employment.seasonal,
        },
        familyTies: {
          // Default values based on form data
          marriedToUSCitizen: false,
          proofGenuineMarriage: false,
          proofOfRelationship: false,
          engagedToUSCitizen: false,
          metInPerson: false,
          intentToMarryIn90Days: false,
          jointResidencePlan: false
        },
        preferences: {
          // Student visa preferences
          hasI20: formData.personalInfo.destinationCountry === 'student',
          sponsorProgram: formData.personalInfo.destinationCountry === 'exchange',
          exchangeTypeEligible: formData.personalInfo.destinationCountry === 'exchange',
          purposeValid: ['tourist', 'business'].includes(formData.personalInfo.destinationCountry),
          
          // Investment visas (defaults to false for regular users)
          treatyCountry: ['MX', 'CO', 'CL', 'AR'].includes(formData.personalInfo.nationality),
          investmentUSD: 0,
          ownershipPercent: 0,
          businessViable: false,
          businessValid: false,
          sourceOfFundsValid: false,
          jobCreation: 0
        }
      }
      
      console.log('🔄 Transformed data for API:', JSON.stringify(transformedData, null, 2))
      console.log('📤 Calling onSubmit...')
      onSubmit(transformedData)
    } else {
      console.log('❌ Form validation failed')
      const formErrors = methods.formState.errors
      console.log('🚨 Form errors:', formErrors)
    }
  }

  const getEnglishProficiencyScore = (level) => {
    const scores = { basic: 25, intermediate: 50, advanced: 75, native: 100 }
    return scores[level] || 0
  }

  const getFinancialScore = (financial) => {
    let score = 0
    if (financial.bankBalance > 10000) score += 30
    if (financial.monthlyIncome > 3000) score += 30  
    if (financial.hasSponsorship) score += 20
    if (financial.hasProperty) score += 20
    return Math.min(score, 100)
  }

  const getAcademicScore = (education) => {
    let score = 0
    const degreeScores = { highschool: 40, bachelor: 60, master: 80, doctorate: 100 }
    score += degreeScores[education.degreeLevel] || 0
    if (education.academicGPA >= 3.5) score += 20
    if (education.hasEnglishCertification) score += 10
    return Math.min(score, 100)
  }

  const getTiesScore = (financial) => {
    let score = 0
    if (financial.hasFamily) score += 40
    if (financial.hasProperty) score += 30
    if (financial.hasReturnTicket) score += 20
    if (financial.monthlyIncome > 2000) score += 10
    return Math.min(score, 100)
  }

  const isLastStep = currentStep === steps.length - 1

  return (
    <FormProvider {...methods}>
      <div className="max-w-4xl mx-auto">
        <ProgressIndicator 
          steps={steps} 
          currentStep={currentStep}
          completedSteps={completedSteps}
        />

        <div className="bg-white rounded-xl shadow-xl p-8 mt-6 border border-gray-100">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">{currentStep + 1}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {currentStepData.title}
              </h2>
            </div>
            <p className="text-gray-600 text-lg">{currentStepData.description}</p>
          </div>

          <StepComponent />

          <div className="flex justify-between pt-8 border-t border-gray-200 mt-8">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Anterior
            </button>

            {isLastStep ? (
              <button
                type="button"
                onClick={() => {
                  console.log('🖱️ Submit button clicked!')
                  console.log('Button state:', { loading, isValid, disabled: loading || !isValid })
                  handleSubmit()
                }}
                disabled={loading || !isValid}
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:from-emerald-700 hover:to-teal-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-all shadow-lg"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analizando...
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Consultar Elegibilidad
                  </>
                )}
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg hover:from-emerald-700 hover:to-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Siguiente
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </FormProvider>
  )
}