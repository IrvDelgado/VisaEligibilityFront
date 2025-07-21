import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import App from '../App'
import { mockFetch, mockApiResponses } from '../test/testUtils.jsx'

// Mock the API module
vi.mock('../lib/api', () => ({
  checkEligibility: vi.fn()
}))

// Mock FormWizard to avoid complex form interactions in App tests
vi.mock('../components/FormWizard', () => ({
  default: ({ onSubmit, loading }) => (
    <div data-testid="form-wizard">
      <button 
        onClick={() => onSubmit({ test: 'data' })}
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit Form'}
      </button>
    </div>
  )
}))

describe('App Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockFetch()
  })

  it('renders the main header', () => {
    render(<App />)
    
    expect(screen.getByText('VisaPathway')).toBeInTheDocument()
    expect(screen.getByText('Tu puerta hacia el sueño americano. Descubre tu elegibilidad para visas estadounidenses con inteligencia artificial.')).toBeInTheDocument()
  })

  it('shows feature highlights', () => {
    render(<App />)
    
    expect(screen.getByText('Análisis Instantáneo')).toBeInTheDocument()
    expect(screen.getByText('100% Personalizado')).toBeInTheDocument()
    expect(screen.getByText('Guía Paso a Paso')).toBeInTheDocument()
  })

  it('renders form wizard initially', () => {
    render(<App />)
    
    expect(screen.getByTestId('form-wizard')).toBeInTheDocument()
    expect(screen.getByText('Submit Form')).toBeInTheDocument()
  })

  it('shows loading state during form submission', async () => {
    const { checkEligibility } = await import('../lib/api')
    checkEligibility.mockImplementation(() => new Promise(resolve => setTimeout(resolve, 100)))
    
    const user = userEvent.setup()
    render(<App />)
    
    const submitButton = screen.getByText('Submit Form')
    await user.click(submitButton)
    
    expect(screen.getByText('Submitting...')).toBeInTheDocument()
  })

  it('displays results after successful submission', async () => {
    const { checkEligibility } = await import('../lib/api')
    checkEligibility.mockResolvedValue(mockApiResponses.success)
    
    const user = userEvent.setup()
    render(<App />)
    
    const submitButton = screen.getByText('Submit Form')
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText('Nueva Consulta')).toBeInTheDocument()
    })
  })

  it('displays error message on API failure', async () => {
    const { checkEligibility } = await import('../lib/api')
    checkEligibility.mockRejectedValue(new Error('API Error'))
    
    const user = userEvent.setup()
    render(<App />)
    
    const submitButton = screen.getByText('Submit Form')
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText('Error al consultar la API')).toBeInTheDocument()
    })
  })

  it('allows starting new consultation', async () => {
    const { checkEligibility } = await import('../lib/api')
    checkEligibility.mockResolvedValue(mockApiResponses.success)
    
    const user = userEvent.setup()
    render(<App />)
    
    // Submit form first
    const submitButton = screen.getByText('Submit Form')
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText('Nueva Consulta')).toBeInTheDocument()
    })
    
    // Click new consultation button
    const newConsultationButton = screen.getByText('Nueva Consulta')
    await user.click(newConsultationButton)
    
    // Should return to form
    expect(screen.getByTestId('form-wizard')).toBeInTheDocument()
  })

  it('renders multiple ad placements', () => {
    render(<App />)
    
    // Check for various ad positions
    expect(screen.getByText('Publicidad - Header Banner')).toBeInTheDocument()
    expect(screen.getByText('Publicidad - Pre-Form Banner')).toBeInTheDocument()
    expect(screen.getByText('Publicidad - Sidebar Left Top')).toBeInTheDocument()
  })

  it('shows information section when no results', () => {
    render(<App />)
    
    expect(screen.getByText('¿Cómo funciona?')).toBeInTheDocument()
    expect(screen.getByText(/Completa nuestro formulario inteligente/)).toBeInTheDocument()
  })

  it('has proper footer content', () => {
    render(<App />)
    
    expect(screen.getByText('© 2025 VisaPathway. Tu puerta hacia el sueño americano.')).toBeInTheDocument()
    expect(screen.getByText('Powered by')).toBeInTheDocument()
    expect(screen.getByText('DS Technology')).toBeInTheDocument()
  })
})