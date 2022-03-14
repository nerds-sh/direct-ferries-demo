import React from 'react'
import * as core from 'core'
import { Link as RouterLink } from 'react-router-dom'

type Props = {
  to: string,
  children: core.types.Children,
  className?: string,
}

const makeClassname = (className?: string) => `nav-link${className && ` ${className}`}`

export const Link = (props: Props) => <RouterLink to={props.to} className={makeClassname(props.className)}>
  {props.children}
</RouterLink>

Link.defaultProps = { className: '' }
