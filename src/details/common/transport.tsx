import React from 'react'

const CLASS_NAMES = 'd-flex justify-content-between rounded p-2 bg-white '

export const Transport = ({ className }: any) => <div className={CLASS_NAMES + className}>
  <div className={'text-center w-100'}>Icon</div>
  <div className={'text-center w-100'}>Foot</div>
  <div className={'text-center w-100'}>Edit</div>
</div>
