import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { renderWithForm } from '../../../test/testUtils.jsx'
import PersonalInfoStep from '../PersonalInfoStep'

describe('PersonalInfoStep Component', () => {
  it('renders all form fields', () => {
    renderWithForm(<PersonalInfoStep />)
    
    // Check if all fields are present
    expect(screen.getByLabelText(/nacionalidad/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/tipo de visa usa/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/edad/i)).toBeInTheDocument()
  })

  it('displays visa type options correctly', async () => {
    const user = userEvent.setup()
    renderWithForm(<PersonalInfoStep />)
    
    const visaSelect = screen.getByLabelText(/tipo de visa usa/i)
    await user.click(visaSelect)
    
    // Check for some visa options
    expect(screen.getByText('B-2 (Turista)')).toBeInTheDocument()
    expect(screen.getByText('F-1 (Estudiante)')).toBeInTheDocument()
    expect(screen.getByText('H-1B (Trabajo Especializado)')).toBeInTheDocument()
  })

  it('handles age input correctly', async () => {
    const user = userEvent.setup()
    renderWithForm(<PersonalInfoStep />)
    
    const ageInput = screen.getByLabelText(/edad/i)
    
    await user.clear(ageInput)
    await user.type(ageInput, '25')
    
    expect(ageInput).toHaveValue(25)
  })

  it('shows validation errors for invalid age', async () => {
    const user = userEvent.setup()
    renderWithForm(<PersonalInfoStep />)
    
    const ageInput = screen.getByLabelText(/edad/i)
    
    // Test below minimum age
    await user.clear(ageInput)
    await user.type(ageInput, '15')
    await user.tab() // Trigger validation
    
    await waitFor(() => {
      expect(screen.getByText(/edad mínima 16 años/i)).toBeInTheDocument()
    })
  })

  it('displays helpful information section', () => {
    renderWithForm(<PersonalInfoStep />)
    
    expect(screen.getByText(/información importante/i)).toBeInTheDocument()
    expect(screen.getByText(/visas estadounidenses/i)).toBeInTheDocument()
  })

  it('shows tooltips for form fields', () => {
    renderWithForm(<PersonalInfoStep />)
    
    // Tooltips should be accessible via aria-describedby or similar
    const nationalityTooltip = screen.getByLabelText(/nacionalidad/i).closest('label')
    expect(nationalityTooltip).toBeInTheDocument()
  })

  it('handles nationality selection', async () => {
    const user = userEvent.setup()
    renderWithForm(<PersonalInfoStep />)
    
    const nationalitySelect = screen.getByLabelText(/nacionalidad/i)
    
    // Nationality should default to Mexico
    expect(nationalitySelect).toHaveValue('MX')
    
    // Should be able to change to other countries
    await user.selectOptions(nationalitySelect, 'CO')
    expect(nationalitySelect).toHaveValue('CO')
  })
})