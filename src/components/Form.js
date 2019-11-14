import React, { useState } from "react";

const Form = props => {
  const [members, setMembers] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChanges = e => {
    setMembers({ ...members, [e.target.name]: e.target.value });
  };
  
  const submitForm = e => {
      e.preventDefault();
      props.addNewMember(members);
      setMembers({name:"", email:""});
    //   console.log(members)
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        value={members.name}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        name="email"
        onChange={handleChanges}
        value={members.email}
      />
      <label htmlFor="role">Role</label>
      <select
        id="role"
        type="text"
        name="role"
        onChange={handleChanges}
        value={members.role}
      >
        <option value="">Choose A Role</option>
        <option value="backend engineer">backend engineer</option>
        <option value="frontend engineer">frontend engineer</option>
        <option value="designer">designer</option>
      </select>
      <button type="submit">Add Team Member </button>
    </form>
  );
};

export default Form;
