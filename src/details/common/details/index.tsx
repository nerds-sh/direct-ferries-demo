import React from 'react'
import { Pets } from 'src/details/common/pets'
import { Persons } from 'src/details/common/persons'
import { Title } from 'src/details/common/details/title'
import { Transport } from 'src/details/common/transport'

export const Details = () => <div className={'mt-4 mx-3'}>
  <Title />
  <Persons />
  <Pets className={'mt-2'} />
  <Transport className={'mt-3 mb-2'} />
</div>
