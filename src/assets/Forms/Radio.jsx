import React from "react";

function Radio({ pergunta, options, onChange, value, id, active }) {
 if (active === false) return null;
 return (
  <fieldset
   style={{ padding: "2rem", marginBottom: "1rem", border: "2px solid #eee" }}
  >
   <legend style={{ fontWeight: "bold" }}>{pergunta}</legend>
   {options.map((opcao) => (
    <label key={opcao}>
     <input
      style={{ marginRight: "1rem" }}
      type="radio"
      id={id}
      value={opcao}
      onChange={onChange}
      checked={value === opcao}
     />
     {opcao}
    </label>
   ))}
  </fieldset>
 );
}

export default Radio;
