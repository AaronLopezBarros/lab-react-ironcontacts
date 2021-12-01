
import { useState } from 'react';
import './App.css';
import contacts from "./contacts.json";

function App() {


  const [contact, setContact] = useState(contacts.slice(0, 5))
  const randomContacts        = contacts[Math.floor((Math.random() * 47) + 5)]
  const orderByPopularity     = contact.map((item) => item).sort((a, b) => b.popularity - a.popularity)
  
  const orderByName = () => {
    const orderContact = contact
      .map((item) => item)
      .sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else {
          return -1;
        }
      });
    return orderContact;
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
        <div>
           <button onClick={() => setContact([...contact, randomContacts])}>Add Random Contact</button>
           <button onClick={() => setContact(orderByPopularity)}>Sort by popularity</button>
           <button onClick={() => setContact(orderByName())}>Sort by name</button>
        </div>
      <table>
        <tr>
          <th>Pictures</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>
        {contact.map((item)=>{

          return   <tr> 
                      <td><img src={item.pictureUrl} alt="actor" /> </td>
                      <td><p>{item.name}</p></td>
                      <td><p>{Math.floor(item.popularity)}</p></td>
                      {item.wonOscar ? <td> 🏆 </td> : <td>  </td>}
                      {item.wonEmmy  ? <td> 🏆 </td> : <td>  </td>}
                   </tr>
        })}
      </table>
    </div>
  );
}

export default App;
