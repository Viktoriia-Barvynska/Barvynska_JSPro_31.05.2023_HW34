import React, { useState, useEffect } from 'react';

function ContactsList({ contacts, onDeleteContact }) {

  return (
    <div>
    <h2>Список контактів</h2>
    <table>
      <thead>
        <tr>
          <th>Ім'я</th>
          <th>Прізвище</th>
          <th>Телефон</th>
          <th>Дії</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.surname}</td>
            <td>{contact.phone}</td>
            <td>
              <button onClick={() => onDeleteContact(contact.id)}>
                Видалити
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
}
 

export default ContactsList;
