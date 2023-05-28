import { authApi } from '../apiClient'

export const getAccountsListFn = async () => {
  const response = await authApi.get('accounts')
  return response.data
}

export const getAccountTypesFn = async () => {
  const response = await authApi.get('accounttypes')
  return response.data
}
