import React, { useState } from 'react';


function App() {

  const [tech, setTech] = useState([
    'ReactJs',
    'React Native',
    'Mongo Db'
  ])

  const [newtech, setnewtech] = useState('')

  function handleAdd() {
    setTech([...tech, newtech])
    setnewtech('')
  }


  return (
    <>
      <uL>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}

      </uL>
      <input value={newtech} onChange={e => setnewtech(e.target.value)} />
      <button type="button" onClick={handleAdd}>Adicionar</button>

    </>
  )

}

export default App;
