import { useState } from 'react'
import Filter from './phonebook/filter'
import Create from './phonebook/create'
import List from './phonebook/list'
import { useEffect } from 'react'
import fetch_ from "./services"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '089525671616' }
  ])
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    const persons_ = fetch_.getPersons();
    persons_.then((e) => setPersons(e.data))
  }, []);
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} setFilterName={setFilterName} />
      <h2>Add New</h2>
      <Create persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <List persons={persons} setPersons={setPersons} filterName={filterName} setFilterName={setFilterName} />
    </div>
  )
}

export default App