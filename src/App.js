
import formJSON from './fromData.json';
import { useState, useEffect } from 'react';
import Element from './components/Element';
import { FormContext } from './FormContext';
function App() {
  const [elements, setElements] = useState(null);
  useEffect(() => {
    setElements(formJSON[0])

  }, [])
 
  const { fields, formHeading } = elements ?? {}
  const handleSubmit = (event) => {
    event.preventDefault();
    
let payload = JSON.stringify(elements)
    console.log(elements)
    alert(payload)
  }
  const handleChange = (eid, event) => {
    const newElements = { ...elements }
    newElements.fields.forEach(field => {
      const { type, id } = field;
      if (eid === id) {
        switch (type) {

          default:
            field['value'] = event.target.value;
            break;
        }

      }
      
      setElements(newElements)
    });
    
  }
  return (
    <FormContext.Provider value={{ handleChange }}>
      <div className="container">
        <h3>{formHeading}</h3>
        <form>
          {fields ? fields.map((field, i) => <Element key={i} field={field} />) : null}
          <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>

      </div>
    </FormContext.Provider>
  );
}

export default App;
