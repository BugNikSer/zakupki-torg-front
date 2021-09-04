const server = 'http://localhost:3000';

export const getUsersListUrl = () => `${server}/users`;
export const getUserUrl = (id) => `${server}/users/${id}`;
export const getCustomersListUrl = () => `${server}/customers`;
export const getCustomerUrl = (id) => `${getCustomersListUrl()}/${id}`;
export const getProvidersListUrl = () => `${server}/providers`;
export const getProviderUrl = (id) => `${getProvidersListUrl()}/${id}`;