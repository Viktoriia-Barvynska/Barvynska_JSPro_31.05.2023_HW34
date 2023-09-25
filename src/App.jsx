import { useState, useEffect } from 'react'

import ContactsList from './components/ContactsList';
import AddContact from './components/AddContact';

import './App.css'

function App() {
  const [contacts, setContacts] = useState([]);
  const [isAddingContact, setIsAddingContact] = useState(false); 

  useEffect(() => {
    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error('Error fetching contacts:', error));
  }, []); 

 
  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };


  const handleAddContact = (newContact) => {
    //  ID для нового контакту 
    const newId = Math.floor(Math.random() * 10000);
    const contactWithId = { ...newContact, id: newId };
    setContacts([...contacts, contactWithId]);

    setIsAddingContact(false);
  };

  return (
    <div>
      <h1>Телефонна книга</h1>
      <div>
      <button onClick={() => setIsAddingContact(!isAddingContact)}>
          {isAddingContact ? 'Скасувати' : 'Додати контакт'}
        </button>
      </div>
      <div>
      {isAddingContact ? (   
      <AddContact onAddContact={handleAddContact} />
      )
      : (
        <ContactsList contacts={contacts} onDeleteContact={handleDeleteContact} />
      )}
      </div>
    </div>
  );
}

export default App
