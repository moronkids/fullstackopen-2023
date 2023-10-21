import { useState } from 'react'
import Filter from './phonebook/filter'
import Create from './phonebook/create'
import List from './phonebook/list'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '089525671616' }
  ])
  const [filterName, setFilterName] = useState('');
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