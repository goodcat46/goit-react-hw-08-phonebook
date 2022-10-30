export const selectAllContacts = state => state.contacts.contacts;
export const selectLastEditedId = state => state.contacts.lastEditedId;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter.filter;
export const selectUserData = state => state.auth;
