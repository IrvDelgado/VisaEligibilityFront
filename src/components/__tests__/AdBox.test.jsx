import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import AdBox from '../AdBox'

describe('AdBox Component', () => {
  it('renders with correct position text', () => {
    render(<AdBox position="Header Banner" />)
    
    expect(screen.getByText('Publicidad - Header Banner')).toBeInTheDocument()
    expect(screen.getByText('Espacio reservado para Google Ads')).toBeInTheDocument()
    expect(screen.getByText('Monetización optimizada para visas')).toBeInTheDocument()
  })

  it('renders ad indicator', () => {
    render(<AdBox position="Sidebar Left" />)
    
    expect(screen.getByText('Ad')).toBeInTheDocument()
  })

  it('applies correct styling classes', () => {
    render(<AdBox position="Test Position" />)
    
    const adContainer = screen.getByText('Publicidad - Test Position').closest('div').parentElement
    expect(adContainer).toHaveClass('bg-gradient-to-r', 'from-emerald-50', 'to-teal-50')
  })

  it('handles different position values', () => {
    const positions = ['Top Banner', 'Sidebar Right', 'Bottom Banner']
    
    positions.forEach(position => {
      const { rerender } = render(<AdBox position={position} />)
      expect(screen.getByText(`Publicidad - ${position}`)).toBeInTheDocument()
      rerender(<AdBox position={position} />)
    })
  })
})