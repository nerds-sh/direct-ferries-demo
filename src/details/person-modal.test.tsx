import React from 'react'
import '@testing-library/jest-dom'
import { Context, useDefaultContext } from 'details/context'
import { PersonModal } from 'details/person-modal'
import { Modal } from 'details/types'
import { render, screen, fireEvent } from '@testing-library/react'
import { Person } from 'details/shared/persons/person'

const Component = ({ kind }: {kind: Modal}) => <Context.Provider value={useDefaultContext()}>
  <Person kind={kind} />
  <PersonModal kind={kind} />
</Context.Provider>

const renderComponent = (kind: Modal) => {
  render(<Component kind={kind} />)
}

describe('Adults modal', () => {
  const kind = Modal.Adults

  it('Should be initially closed', () => {
    renderComponent(kind)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('Should be opened when button clicked', () => {
    renderComponent(kind)

    fireEvent(screen.getByRole('button'), new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }))

    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('Should close when the Done button is clicked', () => {
    renderComponent(kind)

    fireEvent(screen.getByRole('button'), new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }))

    fireEvent(screen.getByText('Done'), new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
