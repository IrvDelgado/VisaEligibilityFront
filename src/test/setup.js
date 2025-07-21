import '@testing-library/jest-dom'

// Mock window.scrollIntoView
window.HTMLElement.prototype.scrollIntoView = vi.fn()

// Mock console methods to reduce noise in tests
global.console = {
  ...console,
  log: vi.fn(),
  debug: vi.fn(),
  info: vi.fn(),
  warn: vi.fn(),
  error: vi.fn(),
}