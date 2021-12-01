
import { useState } from 'react';
import './App.css';
import contacts from "./contacts.json";

function App() {


  const [contact, setContact] = useState(contacts.slice(0, 5))
  const randomContacts = contacts[Math.floor((Math.random() * 47) + 5)]

  return (
    <div className="App">
      <h1>IronContacts</h1>
        <div>
           <button onClick={() => setContact([...contact, randomContacts])}>Add Random Contact</button>
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
