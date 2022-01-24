import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import CartList from '.'
import CartListMock from './mock'

describe('<CartList />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(
      <CartList items={CartListMock} total="R$ 200,00" />
    )

    expect(screen.getAllByRole('heading')).toHaveLength(2)

    expect(screen.getByText('R$ 200,00')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
