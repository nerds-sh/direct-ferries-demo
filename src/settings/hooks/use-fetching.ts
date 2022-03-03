import { useEffect, useState } from 'react'
import { Settings } from 'settings/type'
import { setup } from 'settings/index'

export const useFetching = () => {
  const [settings, setSettings] = useState<Settings | undefined>()

  useEffect(() => {
    const subscription = setup()
      .subscribe(setSettings)

    return subscription.unsubscribe
  }, [setSettings])

  return settings
}
