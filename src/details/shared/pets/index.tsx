import React from 'react'

type Props = { className?: string }

const CLASS_NAMES = 'd-flex justify-content-between rounded p-2 bg-white '

export const Pets = ({ className = '' }: Props) => <div className={CLASS_NAMES + className}>
  <div className={'text-center w-100'}>Icon</div>
  <div className={'text-center w-100'}>0</div>
  <div className={'text-center w-100'}>Pets</div>
  <div className={'text-center w-100'}>Edit</div>
</div>

Pets.defaultProps = { className: '' }
