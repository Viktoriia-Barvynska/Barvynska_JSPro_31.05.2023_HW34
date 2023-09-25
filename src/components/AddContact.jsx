import React, { useState } from 'react';

function AddContact({ onAddContact }) {
  const [newContact, setNewContact] = useState({
    name: '',
    surname: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleSaveContact = () => {
    
    onAddContact(newContact);

    
    setNewContact({
      name: '',
      surname: '',
      phone: '',
    });
  };

  return (
    <div>
<div>
        <button onClick={handleSaveContact}>Зберегти</button>
      </div>
      <h2>Додати новий контакт</h2>
      <div>
        <label>Ім'я:</label>
        <input
          type="text"
          name="name"
          value={newContact.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Прізвище:</label>
        <input
          type="text"
          name="surname"
          value={newContact.surname}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Телефон:</label>
        <input
          type="text"
          name="phone"
          value={newContact.phone}
          onChange={handleInputChange}
        />
      </div>
      
    </div>
  );
}

export default AddContact;
