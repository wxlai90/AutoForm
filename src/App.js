import React, { useState, useEffect } from 'react'

/**
 * Desired API
 * @param {object} schema JSON schema for fields to be populated
 * @param {function} handleChange Function to handle input event and set state object
 */


const App = () => {

  const fields = [
    {
      name: 'name',
      type: 'text',
      initialValue: 'your name'
    },
    {
      name: 'country',
      type: 'text'
    },
    {
      name: 'nickname',
      type: 'text'
    }
  ]

  const [state, setState] = useState([])

  const initState = () => {
    const newState = fields.map(field => ({ ...field, value: field.initialValue || '' }))
    setState(newState)
  }

  const handleChange = ({ target: { name, value } }) => {
    setState(prevState => prevState.map(field => field.name === name ? ({ ...field, value }) : field))
  }

  useEffect(initState, [])


  return (
    <div>
      {
        state.map(state => (
          <input
            type={state.type}
            name={state.name}
            key={state.name}
            placeholder={state.name}
            onChange={handleChange}
            value={state.value}
          />
        ))
      }
      <button onClick={() => console.log(state)}>Show State</button>
    </div >
  )
}

export default App