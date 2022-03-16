import { Settings } from 'src/settings'
import { useRedirectPayload } from 'src/details/common/submit/hooks/use-redirect-payload'

const getUrl = () => `${Settings.get().api}/ferry/secure/booking_redirect_df.aspx`

export const useRedirectUrl = () => {
  const payload = useRedirectPayload()

  return `${getUrl()}?${new URLSearchParams(payload).toString()}`
}
