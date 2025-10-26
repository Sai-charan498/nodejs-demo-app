import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    // Just check that the app renders without throwing
    expect(document.body).toBeInTheDocument()
  })

  it('contains main navigation elements', () => {
    render(<App />)
    // This is a basic smoke test - adjust based on your actual app content
    const mainElement = document.querySelector('main')
    expect(mainElement).toBeInTheDocument()
  })
})