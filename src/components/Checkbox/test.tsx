import { screen, waitFor } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helper'
import userEvent from '@testing-library/user-event'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render checkbox with label', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />)

    // selecionando e testando input a partir de sua role
    expect(screen.getByRole('checkbox')).toBeInTheDocument()

    // selecionando e testando input a partir da label associada
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()

    // selecionando e testando label a partir de seu texto
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
  })

  it('should render without the label', () => {
    renderWithTheme(<Checkbox />)
    expect(screen.queryByText(/checkbox label/i)).not.toBeInTheDocument()
  })

  it('should render with a black label', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />
    )
    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should call onCheck when status changes', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<Checkbox label="checkbox label" onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))

    await waitFor(() => {
      // mudança de estado requer o uso do método waitFor
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should be checked if isChecked is passed', async () => {
    const onCheck = jest.fn()

    renderWithTheme(
      <Checkbox label="checkbox label" onCheck={onCheck} isChecked />
    )

    userEvent.click(screen.getByRole('checkbox'))

    await waitFor(() => {
      // mudança de estado requer o uso do método waitFor
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('should be acessible with tab', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="checkbox" />)

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(screen.getByLabelText(/checkbox label/i)).toHaveFocus()
  })
})
