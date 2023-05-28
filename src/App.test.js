import React from 'react'
import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'

import { useGetAccountsList, useGetAccountTypes } from 'src/api/hooks'

import App from './App'

jest.mock('src/api/hooks')

describe('App', () => {
  it('displays loading state', () => {
    useGetAccountsList.mockReturnValue({
      accounts: [],
      isAccountsLoading: true,
    })

    useGetAccountTypes.mockReturnValue({
      accountTypes: [],
      isAccountTypesLoading: true,
    })

    render(<App />)
    expect(screen.getByTestId('loader')).toBeInTheDocument()
  })

  it('displays accounts and account types', () => {
    useGetAccountsList.mockReturnValue({
      accounts: [
        {
          _id: '1',
          name: 'Test Account',
          currency: '$',
          profitLoss: 123.45,
          accountType: '1',
        },
      ],
      isAccountsLoading: false,
    })

    useGetAccountTypes.mockReturnValue({
      accountTypes: [
        {
          id: '1',
          title: 'Test Account Type',
        },
      ],
      isAccountTypesLoading: false,
    })

    render(<App />)
    expect(screen.getByText('Test Account')).toBeInTheDocument()
    expect(screen.getByText('$ 123.45')).toBeInTheDocument()
    expect(screen.getByText('Test Account Type')).toBeInTheDocument()
  })
})
