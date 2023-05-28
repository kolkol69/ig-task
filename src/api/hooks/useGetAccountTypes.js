import { useQuery } from 'react-query'

import { getAccountTypesFn } from 'src/api/services/accounts'

export const useGetAccountTypes = () => {
  const { data, isLoading, isError, error, refetch, isSuccess } = useQuery(
    'accountTypes',
    async () => await getAccountTypesFn(),
    {
      onError: (e) => {
        console.error(e)
      },
    },
  )

  return {
    accountTypes: data,
    data,
    isAccountTypesLoading: isLoading,
    isError,
    error,
    isSuccess,
    refetch,
  }
}
