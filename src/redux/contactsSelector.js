import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contactsData.contacts;
export const selectFilter = state => state.contactsData.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase())
    );
  }
);

// export const selectFilteredContacts = state => {
//   const contacts = selectContacts(state);
//   const filter = selectFilter(state);
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().trim().includes(filter.toLowerCase())
//   );
// };
