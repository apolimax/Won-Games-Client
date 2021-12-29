import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helper'
import theme from 'styles/theme'

import Radio from '.'

describe('<Radio />', () => {
  it('should render with label (white)', () => {
    const { container } = renderWithTheme(
      <Radio label="Radio" labelFor="check" value="anyValue" />
    )

    const label = screen.getByText(/radio/i)
    expect(label).toBeInTheDocument()
    // screen.debug(label)
    expect(label).toHaveStyle({ color: theme.colors.white })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with label (black)', () => {
    renderWithTheme(
      <Radio
        label="Radio"
        labelFor="check"
        value="anyValue"
        labelColor="black"
      />
    )

    const label = screen.getByText(/radio/i)
    expect(label).toHaveStyle({ color: theme.colors.black })
  })

  it('should render without label', () => {
    renderWithTheme(<Radio />)

    const label = screen.queryByText(/radio/i)
    expect(label).not.toBeInTheDocument()
  })

  it('should dispatch onCheck when label status changes', async () => {
    const onCheck = jest.fn()
    renderWithTheme(
      <Radio
        label="Radio"
        labelFor="Radio"
        onCheck={onCheck}
        value="anyValue"
      />
    )

    const label = screen.getByLabelText(/radio/i)
    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(label)
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith('anyValue')
  })

  it('Should be accessible with tab', () => {
    renderWithTheme(<Radio label="Radio" labelFor="Radio" />)

    const radio = screen.getByLabelText('Radio')

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(radio).toHaveFocus()
  })
})
