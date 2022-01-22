import 'match-media-mock'
import { fireEvent, screen } from '@testing-library/react'

import Gallery from '.'
import { renderWithTheme } from 'utils/tests/helper'

import mockItems from './mock'

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    expect(
      screen.getByRole('button', { name: /thumb - gallery image 1/i })
    ).toHaveAttribute('src', mockItems[0].src)
    expect(
      screen.getByRole('button', { name: /thumb - gallery image 2/i })
    ).toHaveAttribute('src', mockItems[1].src)
  })

  it('should handle open modal', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')

    // 2. Verificar primeiro se o modal se encontra escondido
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })

    // 3. Clicar no ícone do menu e esperar que modal apareça
    fireEvent.click(
      screen.getByRole('button', { name: /thumb - gallery image 1/i })
    )
    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })
  })
  it('should handle modal with selected image', async () => {
    // há uma mudança de estado, por isso o async
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    // Clicar na thumbnail
    fireEvent.click(
      screen.getByRole('button', { name: /thumb - gallery image 2/i })
    )

    const imgModal = await screen.findByRole('img', {
      name: /gallery image 2/i
    })

    // Esperar que a imagem da thumbnail seja a aberta
    expect(imgModal.parentElement?.parentElement).toHaveClass('slick-active')
  })

  it('should handle close modal when overlay or x button are clicked', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')

    // open modal
    fireEvent.click(
      screen.getByRole('button', { name: /thumb - gallery image 1/i })
    )

    // close modal
    fireEvent.click(screen.getByRole('button', { name: /close modal/i }))
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should handle close modal when keyboard escaped is pressed', () => {
    const { container } = renderWithTheme(
      <Gallery items={mockItems.slice(0, 2)} />
    )

    const modal = screen.getByLabelText('modal')

    // open modal
    fireEvent.click(
      screen.getByRole('button', { name: /thumb - gallery image 1/i })
    )

    // close modal
    fireEvent.keyUp(container, { key: 'Escape' })
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })
})
