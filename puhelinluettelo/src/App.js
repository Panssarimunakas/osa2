import { useState, useEffect } from 'react'
import PersonList from './components/PersonList'
import PersonForm from './components/PersonForm'
import Search from './components/Search'
import Message from './components/Message'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(()=> {
    personService
        .getAll()
        .then(initialPersons => setPersons(initialPersons)
  )}, [])

  return (
    <div>
      <h2>Phonebook</h2>
        <Message message={message}/>
        <Search search={search} setSearch={setSearch}/>
        <h2>Add new</h2>
        <PersonForm persons={persons} newName={newName} newNumber={newNumber} message={message}
                    setPersons={setPersons} setNewName={setNewName} setNewNumber={setNewNumber} setMessage={setMessage}/>
        <h2>Numbers</h2>
        <PersonList persons={persons} search={search} setPersons={setPersons} setMessage={setMessage}/>
    </div>
  )

}

export default App