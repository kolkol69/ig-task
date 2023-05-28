import { useGetAccountsList, useGetAccountTypes } from 'src/api/hooks'

import './App.css'

function App() {
  const { accounts, isAccountsLoading } = useGetAccountsList()
  const { accountTypes, isAccountTypesLoading } = useGetAccountTypes()

  return (
    <div className="App">
      <table id="accounts">
        <thead>
          <tr>
            <th>Name</th>
            <th>Profit & Loss</th>
            <th>Account Type</th>
          </tr>
        </thead>
        {isAccountsLoading || isAccountTypesLoading ? (
          <tbody>
            <tr>
              <td
                data-testid="loader"
                className="loader"
              />
              <td className="loader" />
              <td className="loader" />
            </tr>
          </tbody>
        ) : (
          <tbody>
            {accounts?.map((account) => (
              <tr key={account._id}>
                <td>{account.name}</td>
                <td>
                  {account.currency} {account.profitLoss}
                </td>
                <td>
                  {accountTypes?.find((type) => type.id === account.accountType)?.title ??
                    'n/a'}
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  )
}

export default App
