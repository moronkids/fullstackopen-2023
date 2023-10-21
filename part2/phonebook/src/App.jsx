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
      <Filter filterName={filterName} setFilterName={setFilterName} />
      <Create persons={persons} setPersons={setPersons}/>
      <List persons={persons} setPersons={setPersons} filterName={filterName} setFilterName={setFilterName}/>
    </div>
  )
}

export default App