import React from 'react'
import { Type } from 'src/routes/search/type'
import { Input } from 'src/routes/search/input'
import { Context, useContext, useValue } from 'src/routes/search/context'

export const Search = () => <Context.Provider value={useValue()}>
  <Type />
  <Input />
</Context.Provider>

Search.useContext = useContext
