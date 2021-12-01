
import { useState } from 'react';
import './App.css';
import contacts from "./contacts.json";



function App() {


  const [contact, setContact] = useState([
    contacts[0],
    contacts[1],
    contacts[2],
    contacts[3],
    contacts[4],
    
  ])
  
  return (
    <div className="App">
      <h1>IronContacts</h1>
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
