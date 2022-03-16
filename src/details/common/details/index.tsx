import React from 'react'
import { Pets } from 'src/details/common/pets'
import { Persons } from 'src/details/common/persons'
import { Title } from 'src/details/common/details/title'
import { Transportation } from 'src/details/common/transportation'

export const Details = () => <div className={'mt-4 mx-3'}>
  <Title />
  <Persons />
  <Pets className={'mt-2'} />
  <Transportation className={'mt-3 mb-2'} />
</div>
