import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<FormSignIn />)

    const emailInput = screen.getByPlaceholderText(/email/i)
    const passwordInput = screen.getByPlaceholderText(/password/i)
    const sigInButton = screen.getByRole('button', { name: /sign in now/i })

    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(sigInButton).toBeInTheDocument()

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />)

    const forgotLink = screen.getByRole('link', {
      name: /forgot your password?/i
    })
    expect(forgotLink).toBeInTheDocument()
  })

  it('should render the text and link to sign up', () => {
    renderWithTheme(<FormSignIn />)

    const signUpText = screen.getByText(/do not have an account?/i)
    const signUpLink = screen.getByRole('link', {
      name: /sign up/i
    })
    expect(signUpText).toBeInTheDocument()
    expect(signUpLink).toBeInTheDocument()
  })
})
