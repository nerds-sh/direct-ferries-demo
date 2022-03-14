import React from 'react'
import { Item } from 'src/routes/results/item'
import { useRoutes } from 'src/routes/hooks/use-routes'

export const List = () => <>
  {useRoutes().map((item, id) => <Item item={item} key={id} />)}
</>
