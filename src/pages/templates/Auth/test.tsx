import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import Auth from '.'

describe('<Auth />', () => {
  it('should render some components and children', () => {
    renderWithTheme(
      <Auth title="Title">
        <input type="text" />
      </Auth>
    )

    // verificar se tem duas logos
    expect(screen.getAllByRole('img')).toHaveLength(2)

    // verificar se tem o heading principal do banner
    expect(
      screen.getByRole('heading', {
        name: 'All your favorite games in one place'
      })
    ).toBeInTheDocument()

    // verificar se tem o subtitle
    expect(
      screen.getByRole('heading', {
        name: 'WON is the best and most complete gaming platform'
      })
    ).toBeInTheDocument()

    // verificar se tem o title do content
    expect(
      screen.getByRole('heading', {
        name: /title/i
      })
    ).toBeInTheDocument()

    // verificar se children está sendo renderizado
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
