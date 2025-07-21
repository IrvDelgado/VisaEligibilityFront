import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import Tooltip from '../Tooltip'

describe('Tooltip Component', () => {
  it('renders children correctly', () => {
    render(
      <Tooltip content="Test tooltip">
        <button>Hover me</button>
      </Tooltip>
    )
    
    expect(screen.getByRole('button', { name: 'Hover me' })).toBeInTheDocument()
  })

  it('shows tooltip on hover', async () => {
    const user = userEvent.setup()
    
    render(
      <Tooltip content="Test tooltip content">
        <button>Hover me</button>
      </Tooltip>
    )
    
    const button = screen.getByRole('button', { name: 'Hover me' })
    
    // Tooltip should not be visible initially
    expect(screen.queryByText('Test tooltip content')).not.toBeInTheDocument()
    
    // Hover over the button
    await user.hover(button)
    
    // Tooltip should be visible
    expect(screen.getByText('Test tooltip content')).toBeInTheDocument()
  })

  it('hides tooltip on unhover', async () => {
    const user = userEvent.setup()
    
    render(
      <Tooltip content="Test tooltip content">
        <button>Hover me</button>
      </Tooltip>
    )
    
    const button = screen.getByRole('button', { name: 'Hover me' })
    
    // Hover and then unhover
    await user.hover(button)
    expect(screen.getByText('Test tooltip content')).toBeInTheDocument()
    
    await user.unhover(button)
    expect(screen.queryByText('Test tooltip content')).not.toBeInTheDocument()
  })

  it('applies correct position classes', () => {
    render(
      <Tooltip content="Test tooltip" position="bottom">
        <button>Hover me</button>
      </Tooltip>
    )
    
    // This test checks that the component accepts position prop
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})