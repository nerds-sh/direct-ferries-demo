import { Settings } from 'src/settings'
import { Types } from 'src/settings/types'
import { useEffect, useState } from 'react'

export const useFetching = () => {
  const [settings, setSettings] = useState<Types.Settings | undefined>()

  useEffect(() => {
    const subscription = Settings.setup().subscribe(setSettings)

    return subscription.unsubscribe
  }, [setSettings])

  return settings
}
