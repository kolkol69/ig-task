import { useQuery } from 'react-query'

import { getAccountsListFn } from 'src/api/services/accounts'

export const useGetAccountsList = () => {
  const { data, isLoading, isError, error, refetch, isSuccess } = useQuery(
    'accounts',
    async () => await getAccountsListFn(),
    {
      onError: (e) => {
        console.error(e)
      },
    },
  )

  return {
    accounts: data,
    data,
    isAccountsLoading: isLoading,
    isError,
    error,
    isSuccess,
    refetch,
  }
}
