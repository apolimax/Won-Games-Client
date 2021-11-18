import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    // 1. Renderizar componente (render)
    // 2. Selecionar elemento a ser testado (screen)
    // 3. expect
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black label when passed', () => {
    // 1. Renderizar componente (render)
    // 2. Selecionar elemento a ser testado (screen)
    // 3. expect
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })
})
