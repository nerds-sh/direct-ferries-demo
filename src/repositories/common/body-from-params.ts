const append = (params: URLSearchParams) => ([key, value]: [string, unknown]) => params.append(key, `${value}`)

export const bodyFromParams = (input: object) => {
  const params = new URLSearchParams()

  Object.entries(input).forEach(append(params))

  return params.toString()
}
