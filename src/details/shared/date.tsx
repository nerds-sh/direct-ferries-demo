import React from 'react'

const CLASS_NAMES = 'd-flex flex-column justify-content-between align-items-center bg-white rounded py-2 '

type Props = { className?: string }

export const Date = ({ className }: Props) => <div className={CLASS_NAMES + className}>
  <div>Date</div>
  <div>Time</div>
</div>

Date.defaultProps = { className: '' }
