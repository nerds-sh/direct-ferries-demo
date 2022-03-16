import React from 'react'
import { Pets } from 'src/details/shared/pets'
import { Persons } from 'src/details/shared/persons'
import { Title } from 'src/details/shared/details/title'
import { Transportation } from 'src/details/shared/transportation'

export const Details = () => <div className={'mt-4 mx-3'}>
  <Title />
  <Persons />
  <Pets className={'mt-2'} />
  <Transportation className={'mt-3 mb-2'} />
</div>
