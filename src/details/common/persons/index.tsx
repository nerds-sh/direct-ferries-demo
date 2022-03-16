import React from 'react'
import { Modal } from 'src/details/types'
import 'src/details/common/persons/style.scss'
import { Person } from 'src/details/common/persons/person'

export const Persons = () => <div className={'d-flex justify-content-between'}>
  <Person kind={Modal.Adults} className={'my-3 me-3 w-100'} />
  <Person kind={Modal.Children} className={'my-3 ms-3 w-100'} />
</div>
