import React from 'react'
import { Routes } from 'src/routes/types'
import 'src/routes/results/item/style.scss'
import { Icon } from 'src/routes/results/item/icon'
import { Origin } from 'src/routes/results/item/origin'
import { Destination } from 'src/routes/results/item/destination'
import { useNavigateToDetails } from 'src/routes/results/item/hooks'

type Props = { item: Routes.Item }

const CLASS_NAMES = 'routes__result-item d-flex justify-content-between align-items-center p-2 m-1'

export const Item = ({ item }: Props) => <div className={CLASS_NAMES} onClick={useNavigateToDetails(item)}>
  <Origin item={item} />
  <Icon />
  <Destination item={item} />
</div>
