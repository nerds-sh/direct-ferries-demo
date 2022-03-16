import React from 'react'
import '@testing-library/jest-dom'
import { Modal } from 'src/details/types'
import { PersonModal } from 'src/details/person-modal'
import { Context, useValue } from 'src/details/context'
import { Person } from 'src/details/common/persons/person'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'

const Component = ({ kind }: {kind: Modal}) => <Context.Provider value={useValue()}>
  <Person kind={kind} />
  <PersonModal kind={kind} />
</Context.Provider>

describe('Adults modal', () => {
  const openModal = () => fireEvent(screen.getByRole('button'), new MouseEvent('click', { bubbles: true }))

  const closeModal = () => fireEvent(screen.getByText('Done'), new MouseEvent('click', { bubbles: true }))

  beforeEach(() => render(<Component kind={Modal.Adults} />))

  it('is initially closed', () => {
    const actual = screen.queryByRole('dialog')

    expect(actual).not.toBeInTheDocument()
  })

  describe('when interacting with modal', () => {
    beforeEach(openModal)

    it('is shown after dialog button is clicked', () => {
      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })

    it('is closed after done button is clicked', async() => {
      closeModal()

      await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument(), { timeout: 2000 })
    })
  })
})
