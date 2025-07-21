import { render } from '@testing-library/react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { visaFormSchema } from '../lib/validation'

// Mock form data for testing
export const mockFormData = {
  personalInfo: {
    nationality: 'MX',
    destinationCountry: 'student',
    age: 25,
  },
  education: {
    degreeLevel: 'bachelor',
    englishProficiency: 'advanced',
    hasEnglishCertification: true,
    englishTestScore: 90,
    academicGPA: 3.5,
  },
  employment: {
    jobTitle: 'Software Developer',
    hasJobOffer: false,
    occupationType: 'specialty',
    salary: 50000,
    yearsExperience: 3,
    companySize: 'medium',
  },
  financial: {
    bankBalance: 15000,
    monthlyIncome: 4000,
    hasSponsorship: false,
    hasProperty: true,
    hasFamily: true,
    hasReturnTicket: true,
  }
}

// Custom render with form provider
export function renderWithForm(ui, { defaultValues = mockFormData, ...renderOptions } = {}) {
  function Wrapper({ children }) {
    const methods = useForm({
      resolver: zodResolver(visaFormSchema),
      defaultValues,
      mode: 'onChange'
    })

    return <FormProvider {...methods}>{children}</FormProvider>
  }

  return render(ui, { wrapper: Wrapper, ...renderOptions })
}

// Mock API responses
export const mockApiResponses = {
  success: {
    success: true,
    data: {
      eligibleVisas: [
        {
          type: 'F1',
          name: 'F-1 Student Visa',
          category: 'Academic Student',
          score: 85,
          requirements: [
            { key: 'English Proficiency', achieved: 90, weight: 20 },
            { key: 'Academic Record', achieved: 80, weight: 25 },
            { key: 'Financial Support', achieved: 85, weight: 30 },
          ],
          nextSteps: [
            'Apply to a SEVP-approved school',
            'Obtain Form I-20',
            'Pay SEVIS fee',
            'Schedule visa interview'
          ]
        }
      ]
    }
  },
  error: {
    success: false,
    message: 'API Error occurred'
  }
}

// Mock fetch for API calls
export function mockFetch(response = mockApiResponses.success, shouldFail = false) {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: !shouldFail,
      json: () => Promise.resolve(response),
    })
  )
}