/* eslint-disable react/prop-types */
import React from 'react'
function List({filterName, persons}) {
    const regexPattern = new RegExp(filterName || '', "gi");
  const filteredResult = filterName !== '' ? persons.filter((v,i) => v.name.toLowerCase() === filterName.toLowerCase() || v.name.match(regexPattern)) : persons
  return (
      <>
            <h2>Numbers</h2>
      {filteredResult?.map((v) => {
        return (
          <>
            <p>{v.name} - {v.number}</p>
          </>
        )
      })}
      </>
  )
}

export default List