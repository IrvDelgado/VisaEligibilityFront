import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ProgressIndicator from '../ProgressIndicator'
import { steps } from '../../lib/validation'

describe('ProgressIndicator Component', () => {
  const mockSteps = steps
  const defaultProps = {
    steps: mockSteps,
    currentStep: 0,
    completedSteps: new Set()
  }

  it('renders all steps', () => {
    render(<ProgressIndicator {...defaultProps} />)
    
    mockSteps.forEach(step => {
      expect(screen.getByText(step.title)).toBeInTheDocument()
    })
  })

  it('highlights current step correctly', () => {
    render(<ProgressIndicator {...defaultProps} currentStep={1} />)
    
    // Check if step numbers are displayed
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('4')).toBeInTheDocument()
  })

  it('shows completed steps with checkmarks', () => {
    const completedSteps = new Set([0, 1])
    render(
      <ProgressIndicator 
        {...defaultProps} 
        currentStep={2} 
        completedSteps={completedSteps} 
      />
    )
    
    // Completed steps should show checkmarks (SVG icons)
    const checkmarks = screen.getAllByRole('img', { hidden: true })
    expect(checkmarks).toHaveLength(2) // Two completed steps
  })

  it('applies correct styling for different step states', () => {
    const completedSteps = new Set([0])
    render(
      <ProgressIndicator 
        {...defaultProps} 
        currentStep={1} 
        completedSteps={completedSteps} 
      />
    )
    
    // Current step should have emerald styling
    const currentStepTitle = screen.getByText(mockSteps[1].title)
    expect(currentStepTitle).toHaveClass('text-emerald-600')
    
    // Completed step should have emerald styling
    const completedStepTitle = screen.getByText(mockSteps[0].title)
    expect(completedStepTitle).toHaveClass('text-emerald-500')
  })

  it('renders progress bars between steps', () => {
    render(<ProgressIndicator {...defaultProps} />)
    
    // Should render progress bars (div elements with specific classes)
    const progressBars = document.querySelectorAll('.flex-1.h-2')
    expect(progressBars).toHaveLength(mockSteps.length - 1) // n-1 progress bars for n steps
  })

  it('handles empty completed steps set', () => {
    render(<ProgressIndicator {...defaultProps} />)
    
    // Should render without errors
    expect(screen.getByText('Información Personal')).toBeInTheDocument()
  })

  it('handles all steps completed', () => {
    const allCompleted = new Set([0, 1, 2, 3])
    render(
      <ProgressIndicator 
        {...defaultProps} 
        currentStep={3} 
        completedSteps={allCompleted} 
      />
    )
    
    // All steps should show checkmarks
    const checkmarks = screen.getAllByRole('img', { hidden: true })
    expect(checkmarks).toHaveLength(4)
  })
})