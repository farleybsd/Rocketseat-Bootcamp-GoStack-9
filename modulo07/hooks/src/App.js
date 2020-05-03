import React, { useState, useEffect } from 'react';


function App() {

  const [tech, setTech] = useState([])

  const [newtech, setnewtech] = useState('')

  function handleAdd() {
    setTech([...tech, newtech])
    setnewtech('')
  }

  useEffect(() => {
    const storagetech = localStorage.getItem('tech')
    if (storagetech) {
      setTech(JSON.parse(storagetech))
    }



  }, [])

  useEffect(() => {

    localStorage.setItem('tech', JSON.stringify(tech))

  }, [tech])

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
