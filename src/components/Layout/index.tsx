import { FC, ReactNode } from "react"

import "./style.scss"

type Props = {
  title: string
  children: ReactNode
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <div className="container">
      <h1>{title}</h1>
      {children}
    </div>
  )
}
