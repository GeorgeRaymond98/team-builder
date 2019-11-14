import React, {useState} from 'react';
import './App.css';
import Form from "./components/Form";
import TeamMember from "./components/TeamMember";

function App() {
  const [members, setMembers] = useState([]);

  const addNewMember = member => {
    const newMember =  {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
      
    }
    setMembers([...members, newMember])
  }
  console.log(members)
  return (
    <div className="App">
      <h1> Team Memebrs</h1>
      <Form addNewMember={addNewMember}/>
      <TeamMember members={members}/>
    </div>
  );
}

export default App;
