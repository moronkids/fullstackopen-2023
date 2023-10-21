/* eslint-disable react/prop-types */
import React from 'react'
import fetch_ from "../../services"

function List({ filterName, persons, setPersons }) {
  const regexPattern = new RegExp(filterName || '', "gi");
  const filteredResult = filterName !== '' ? persons?.filter((v, i) => v?.name?.toLowerCase() === filterName?.toLowerCase() || v?.name?.match(regexPattern)) : persons
  const deletePersons = async (id, index) => {
    if (window.confirm(`Delete ${persons[index].name}`)) {
        await fetch_.deletePersons(id);
        const datas = await fetch_.getPersons();
        setPersons(datas.data)
    }

  }
  return (
      <>
      {filteredResult.length > 0 ? filteredResult?.map((v,i) => {
        return (
          <>
            <div>
              <p>{v.name} - {v.number} <span><button onClick={() => deletePersons(v.id, i)}>delete</button></span></p>
            </div>
          </>
        )
      }) : (
          <>Data not found</>
      )}
      </>
  )
}

export default List