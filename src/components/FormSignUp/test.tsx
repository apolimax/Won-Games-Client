import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import FormSignUp from '.'

describe('<FormSignUp />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<FormSignUp />)

    const namelInput = screen.getByPlaceholderText(/name/i)
    const emailInput = screen.getByPlaceholderText(/email/i)
    const passwordInput = screen.getByPlaceholderText('Password')
    const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password')
    const sigUpButton = screen.getByRole('button', { name: /sign up now/i })

    expect(namelInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(confirmPasswordInput).toBeInTheDocument()
    expect(sigUpButton).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render the text and link to sign in', () => {
    renderWithTheme(<FormSignUp />)

    const signInText = screen.getByText(/already have an account?/i)
    const signInLink = screen.getByRole('link', {
      name: /sign in/i
    })
    expect(signInText).toBeInTheDocument()
    expect(signInLink).toBeInTheDocument()
  })
})
