import Person from "./Person";
import personService from "../services/persons";

const PersonList = (props) => {
  const {persons, setPersons, search} = props
  const personsToShow = search === '' ?
    persons : persons.filter(person => person.name.toLowerCase().includes(search))

  const removeName = (id, name) => {
    if(window.confirm(`Are you sure you want to delete ${name}?`)){
      personService
        .remove(id)
        .then(response => {
          setPersons(persons.filter(person => person.id !== id))
        })

      props.setMessage(`${name} was removed from the server`)
      setTimeout(() => {
        props.setMessage(null)
      }, 5000)
    }
  }

  return(
    <ul>
      {personsToShow.map(person =>
      <Person key={person.id} person={person} removeName={() => removeName(person.id, person.name)}/>
      )}
    </ul>
  )
}

export default PersonList