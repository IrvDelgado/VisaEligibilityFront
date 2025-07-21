import { z } from 'zod'

export const personalInfoSchema = z.object({
  nationality: z.string().min(2, 'Nacionalidad requerida'),
  destinationCountry: z.string().min(1, 'Selecciona tipo de visa estadounidense'),
  age: z.number().min(16, 'Edad mínima 16 años').max(75, 'Edad máxima 75 años'),
  priorUSExperience: z.boolean(),
  visitDuration: z.number().min(1, 'Duración de visita requerida'),
  previousVisaRecord: z.boolean(),
})

export const educationSchema = z.object({
  degreeLevel: z.string().min(1, 'Selecciona tu nivel educativo'),
  englishProficiency: z.enum(['basic', 'intermediate', 'advanced', 'native'], {
    errorMap: () => ({ message: 'Selecciona tu nivel de inglés' })
  }),
  hasEnglishCertification: z.boolean(),
  englishTestScore: z.preprocess(
    (val) => {
      if (val === '' || val === null || val === undefined) return undefined
      const num = Number(val)
      return isNaN(num) ? undefined : num
    },
    z.number().optional()
  ),
  academicGPA: z.preprocess(
    (val) => {
      if (val === '' || val === null || val === undefined) return undefined
      const num = Number(val)
      return isNaN(num) ? undefined : num
    },
    z.number().min(0, 'GPA debe ser mayor a 0').max(4, 'GPA máximo es 4.0').optional()
  ),
})

export const employmentSchema = z.object({
  jobTitle: z.string().min(1, 'Puesto de trabajo requerido'),
  jobType: z.enum(['specialty', 'nonagricultural', 'agricultural'], {
    errorMap: () => ({ message: 'Selecciona tipo de trabajo válido' })
  }),
  hasJobOffer: z.boolean(),
  occupationType: z.string().min(1, 'Selecciona tipo de ocupación'),
  salary: z.number().min(0, 'Salario debe ser mayor a 0'),
  yearsExperience: z.number().min(0, 'Años de experiencia requeridos'),
  companySize: z.enum(['startup', 'small', 'medium', 'large'], {
    errorMap: () => ({ message: 'Selecciona tamaño de empresa' })
  }),
  seasonal: z.boolean(),
})

export const financialSchema = z.object({
  bankBalance: z.number().min(0, 'Balance bancario debe ser mayor a 0'),
  monthlyIncome: z.number().min(0, 'Ingreso mensual requerido'),
  hasSponsorship: z.boolean(),
  sponsorshipAmount: z.preprocess(
    (val) => {
      if (val === '' || val === null || val === undefined) return undefined
      const num = Number(val)
      return isNaN(num) ? undefined : num
    },
    z.number().min(0, 'Monto de patrocinio debe ser mayor a 0').optional()
  ),
  financialSupport: z.number().min(0, 'Soporte financiero requerido'),
  hasProperty: z.boolean(),
  hasFamily: z.boolean(),
  hasReturnTicket: z.boolean(),
}).superRefine((data, ctx) => {
  // Solo validar sponsorshipAmount si hasSponsorship es true
  if (data.hasSponsorship && (!data.sponsorshipAmount || data.sponsorshipAmount <= 0)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Debes especificar el monto del patrocinio",
      path: ["sponsorshipAmount"],
    });
  }
})

export const visaFormSchema = z.object({
  personalInfo: personalInfoSchema,
  education: educationSchema,
  employment: employmentSchema,
  financial: financialSchema,
})

export const steps = [
  {
    id: 'personal',
    title: 'Información Personal',
    description: 'Datos básicos sobre ti',
    schema: personalInfoSchema
  },
  {
    id: 'education', 
    title: 'Educación y Habilidades',
    description: 'Tu formación académica y competencias',
    schema: educationSchema
  },
  {
    id: 'employment',
    title: 'Experiencia Laboral', 
    description: 'Tu situación profesional actual',
    schema: employmentSchema
  },
  {
    id: 'financial',
    title: 'Situación Financiera',
    description: 'Tus recursos y vínculos familiares',
    schema: financialSchema
  }
]