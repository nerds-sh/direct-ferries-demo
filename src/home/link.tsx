import React from 'react'

const props = {
  className: 'app-link',
  href: 'https://reactjs.org',
  target: '_blank',
  rel: 'noopener noreferrer',
}

export const Link = () => <a {...props}>
  Learn React
</a>
