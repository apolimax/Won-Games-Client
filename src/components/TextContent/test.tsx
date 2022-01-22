import { screen } from '@testing-library/react'

import TextContent from '.'
import { renderWithTheme } from 'utils/tests/helper'

const props = {
  title: 'Description',
  content: '<h1>Content</h1>'
}

describe('<TextContent />', () => {
  it('should render the title and the content', () => {
    renderWithTheme(<TextContent {...props} />)

    expect(
      screen.getByRole('heading', { name: /description/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /content/i })
    ).toBeInTheDocument()
  })

  it('should not render the heading', () => {
    renderWithTheme(<TextContent content={props.content} />)

    expect(
      screen.queryByRole('heading', { name: /description/i })
    ).not.toBeInTheDocument()
  })

  it('should render the correct colors based on the screen width', () => {
    renderWithTheme(<TextContent {...props} />)

    const wrapper = screen.getByRole('heading', {
      name: /description/i
    }).parentElement

    expect(wrapper).toHaveStyle('color: #FAFAFA')
    expect(wrapper).toHaveStyleRule('color', '#030517', {
      media: '(min-width: 768px)'
    })
    expect(wrapper).toHaveStyleRule('background', '#FAFAFA', {
      media: '(min-width: 768px)'
    })
  })
})
