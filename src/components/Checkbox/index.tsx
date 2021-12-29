import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type CheckboxProps = {
  label?: string
  isChecked?: boolean
  labelFor?: string
  labelColor?: 'white' | 'black'
  onCheck?: (status: boolean) => void
  value?: string | ReadonlyArray<string> | number | undefined
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  label,
  isChecked = false,
  labelFor = '',
  labelColor = 'white',
  onCheck,
  value
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    const status = !checked
    setChecked(status)

    if (onCheck) {
      onCheck(status)
    }
  }

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        value={value}
      />
      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Checkbox
