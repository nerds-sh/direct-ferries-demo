import { useRedirectPayload } from 'details/shared/submit/hooks/use-redirect-payload'
import { settings } from 'settings'

const getUrl = () => `${settings().api}/ferry/secure/booking_redirect_df.aspx`

export const useRedirectUrl = () => {
  const payload = useRedirectPayload()

  return `${getUrl()}?${new URLSearchParams(payload).toString()}`
}
