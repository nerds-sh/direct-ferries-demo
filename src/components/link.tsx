import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Types } from 'common'

type LinkProps = {
    to: string,
    children: Types.Children,
    className?: string,
}

const makeClassname = (className?: string) => `nav-link${className && ` ${className}`}`

export const Link = (props: LinkProps) => <RouterLink to={props.to} className={makeClassname(props.className)}>
  {props.children}
</RouterLink>

Link.defaultProps = { className: '' }
