import personService from '../services/persons'

const PersonForm = (props) => {
  const{persons, newName, newNumber, setPersons, setNewName, setNewNumber} = props

  const addName = (event) => {
    event.preventDefault()
    if(persons.find(person => person.name === newName)) {
      if(window.confirm(`${newName} is already added to the phonebook, replace old number?`)) {
        const person = persons.find(person => person.name === newName)
        const changedPerson = { ...person, number: newNumber }
        personService
          .update(person.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.name !== newName ? person : returnedPerson))
          })

      }
      setNewName('')
      setNewNumber('')

      props.setMessage(`${newName}'s number was changed`)
      console.log('am I here?')
      console.log(props.message)
      setTimeout(() => {
        props.setMessage(null)
      }, 5000)
    } else {
      const nameObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      }

      personService.create(nameObject).then(response => {setPersons(persons.concat(nameObject))
        setNewName('')
        setNewNumber('')
      },)
      props.setMessage(`${newName} was added to the server`)
      console.log('am I here?')
      console.log(props.message)
      setTimeout(() => {
        props.setMessage(null)
      }, 5000)
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return(
    <form onSubmit={addName}>
      <div>
        name: <input value={newName} onChange={handleNameChange}/>
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm