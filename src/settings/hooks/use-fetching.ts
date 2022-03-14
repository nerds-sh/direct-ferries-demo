import { Settings } from 'settings'
import { Types } from 'settings/types'
import { useEffect, useState } from 'react'

export const useFetching = () => {
  const [settings, setSettings] = useState<Types.Settings | undefined>()

  useEffect(() => {
    const subscription = Settings.setup().subscribe(setSettings)

    return subscription.unsubscribe
  }, [setSettings])

  return settings
}
