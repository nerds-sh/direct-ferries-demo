import React from 'react'
import { Item } from 'routes/results/item'
import { useRoutes } from 'routes/hooks/use-routes'

export const List = () => <>
  {useRoutes().map((item, id) => <Item item={item} key={id} />)}
</>
