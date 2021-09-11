const server = 'http://127.0.0.1:3001/rest';

export const getUsersListUrl = () => `${server}/users`;
export const getUserUrl = (id) => `${server}/users/${id}`;
export const getCustomersListUrl = () => `${server}/customers`;
export const getCustomerUrl = (id) => `${getCustomersListUrl()}/${id}`;
export const getProvidersListUrl = () => `${server}/providers`;
export const getProviderUrl = (id) => `${getProvidersListUrl()}/${id}`;
export const getAuctionsListUrl = () => `${server}/auctions`;
export const getAuctionUrl = (id) => `${getAuctionsListUrl()}/${id}`;