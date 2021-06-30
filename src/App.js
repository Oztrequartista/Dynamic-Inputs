import React, { useState } from "react";

const App = () => {
  const [state, setstate] = useState([
    {
      id: 1,
      firstName: "nana",
      lastName: "amoako",
    },
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newState = [...state];
    // this is basically like ["firstName/"lastName"] = "whatever you type"
    newState[index][name] = value;
    console.log(newState);
    //this will update the input based on the index
    setstate(newState);
  };

  const addInput = (index, e) => {
    e.preventDefault();

    setstate([
      ...state,
      {
        id: index + 1,
        firstName: "",
        lastName: "",
      },
    ]);
  };

  const removeInput = (index, e) => {
    e.preventDefault();
    state.splice(index, 1);
    setstate([...state]);
  };

  return (
    <div>
      {state.map((item, index, arr) => {
        const { id, firstName, lastName } = item;
        return (
          <form key={id}>
            <div>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e) => handleChange(e, index)}
              />
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) => handleChange(e, index)}
              />
            </div>
            {arr.length - 1 === index && (
              <button onClick={(e) => addInput(index, e)}>add</button>
            )}
            <button onClick={(e) => removeInput(index, e)}>remove</button>
          </form>
        );
      })}
    </div>
  );
};

export default App;
