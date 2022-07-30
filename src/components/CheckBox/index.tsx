import { ChangeEventHandler, FC } from "react"

export type CheckBoxProps = {
  code: number
  name: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

export const CheckBox: FC<CheckBoxProps> = ({ code, name, onChange }) => {
  return (
    <div>
      <input
        id={`prefcode-${code}`}
        type="checkbox"
        name={name}
        value={code}
        onChange={onChange}
      />
      <label htmlFor={`prefcode-${code}`}>{name}</label>
    </div>
  )
}
