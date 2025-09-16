import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from '@/components/home/hero'

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
  AnimatePresence: ({ children }: any) => children,
}))

describe('Hero Component', () => {
  it('renders hero headline correctly', () => {
    render(<Hero />)
    
    const headline = screen.getByText(/CTO & AI Platform Architect turning ideas into measurable outcomes/)
    expect(headline).toBeInTheDocument()
  })

  it('renders primary CTA button', () => {
    render(<Hero />)
    
    const primaryButton = screen.getByText(/Book a 20-min Discovery Call/)
    expect(primaryButton).toBeInTheDocument()
  })

  it('renders secondary CTA button', () => {
    render(<Hero />)
    
    const secondaryButton = screen.getByText(/View Case Studies/)
    expect(secondaryButton).toBeInTheDocument()
  })

  it('renders metrics correctly', () => {
    render(<Hero />)
    
    expect(screen.getByText('50%')).toBeInTheDocument()
    expect(screen.getByText('30%')).toBeInTheDocument()
    expect(screen.getByText('60%')).toBeInTheDocument()
  })

  it('renders proof indicators', () => {
    render(<Hero />)
    
    expect(screen.getByText(/16\+ Years Experience/)).toBeInTheDocument()
    expect(screen.getByText(/India, Korea, KSA/)).toBeInTheDocument()
    expect(screen.getByText(/HRTech, Health, IoT, Public/)).toBeInTheDocument()
  })
})