import { describe, it, expect } from 'vitest'
import { 
  personalInfoSchema, 
  educationSchema, 
  employmentSchema, 
  financialSchema,
  visaFormSchema
} from '../validation'

describe('Validation Schemas', () => {
  describe('personalInfoSchema', () => {
    it('validates correct personal info', () => {
      const validData = {
        nationality: 'MX',
        destinationCountry: 'student',
        age: 25
      }
      
      expect(() => personalInfoSchema.parse(validData)).not.toThrow()
    })

    it('rejects invalid age', () => {
      const invalidData = {
        nationality: 'MX',
        destinationCountry: 'student',
        age: 15 // Below minimum
      }
      
      expect(() => personalInfoSchema.parse(invalidData)).toThrow()
    })

    it('requires nationality', () => {
      const invalidData = {
        destinationCountry: 'student',
        age: 25
      }
      
      expect(() => personalInfoSchema.parse(invalidData)).toThrow()
    })

    it('requires visa type selection', () => {
      const invalidData = {
        nationality: 'MX',
        destinationCountry: '',
        age: 25
      }
      
      expect(() => personalInfoSchema.parse(invalidData)).toThrow()
    })
  })

  describe('educationSchema', () => {
    it('validates correct education data', () => {
      const validData = {
        degreeLevel: 'bachelor',
        englishProficiency: 'advanced',
        hasEnglishCertification: true,
        englishTestScore: 90,
        academicGPA: 3.5
      }
      
      expect(() => educationSchema.parse(validData)).not.toThrow()
    })

    it('requires degree level', () => {
      const invalidData = {
        englishProficiency: 'advanced',
        hasEnglishCertification: false
      }
      
      expect(() => educationSchema.parse(invalidData)).toThrow()
    })

    it('validates english proficiency enum', () => {
      const invalidData = {
        degreeLevel: 'bachelor',
        englishProficiency: 'invalid_level',
        hasEnglishCertification: false
      }
      
      expect(() => educationSchema.parse(invalidData)).toThrow()
    })
  })

  describe('employmentSchema', () => {
    it('validates correct employment data', () => {
      const validData = {
        jobTitle: 'Software Developer',
        hasJobOffer: false,
        occupationType: 'specialty',
        salary: 50000,
        yearsExperience: 3,
        companySize: 'medium'
      }
      
      expect(() => employmentSchema.parse(validData)).not.toThrow()
    })

    it('requires positive salary', () => {
      const invalidData = {
        jobTitle: 'Developer',
        hasJobOffer: false,
        occupationType: 'specialty',
        salary: -1000,
        yearsExperience: 3,
        companySize: 'medium'
      }
      
      expect(() => employmentSchema.parse(invalidData)).toThrow()
    })

    it('validates company size enum', () => {
      const invalidData = {
        jobTitle: 'Developer',
        hasJobOffer: false,
        occupationType: 'specialty',
        salary: 50000,
        yearsExperience: 3,
        companySize: 'invalid_size'
      }
      
      expect(() => employmentSchema.parse(invalidData)).toThrow()
    })
  })

  describe('financialSchema', () => {
    it('validates correct financial data', () => {
      const validData = {
        bankBalance: 15000,
        monthlyIncome: 4000,
        hasSponsorship: false,
        hasProperty: true,
        hasFamily: true,
        hasReturnTicket: true
      }
      
      expect(() => financialSchema.parse(validData)).not.toThrow()
    })

    it('requires non-negative bank balance', () => {
      const invalidData = {
        bankBalance: -5000,
        monthlyIncome: 4000,
        hasSponsorship: false,
        hasProperty: true,
        hasFamily: true,
        hasReturnTicket: true
      }
      
      expect(() => financialSchema.parse(invalidData)).toThrow()
    })
  })

  describe('visaFormSchema (Complete Form)', () => {
    it('validates complete form data', () => {
      const completeValidData = {
        personalInfo: {
          nationality: 'MX',
          destinationCountry: 'student',
          age: 25
        },
        education: {
          degreeLevel: 'bachelor',
          englishProficiency: 'advanced',
          hasEnglishCertification: true,
          englishTestScore: 90,
          academicGPA: 3.5
        },
        employment: {
          jobTitle: 'Software Developer',
          hasJobOffer: false,
          occupationType: 'specialty',
          salary: 50000,
          yearsExperience: 3,
          companySize: 'medium'
        },
        financial: {
          bankBalance: 15000,
          monthlyIncome: 4000,
          hasSponsorship: false,
          hasProperty: true,
          hasFamily: true,
          hasReturnTicket: true
        }
      }
      
      expect(() => visaFormSchema.parse(completeValidData)).not.toThrow()
    })

    it('rejects incomplete form data', () => {
      const incompleteData = {
        personalInfo: {
          nationality: 'MX',
          age: 25
          // Missing destinationCountry
        }
      }
      
      expect(() => visaFormSchema.parse(incompleteData)).toThrow()
    })
  })
})