/* eslint-disable react/prop-types */
import React from 'react'
import { useState } from 'react';

function Create({persons, setPersons}) {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const addNewPerson = (name) => {
        setNewName(name)
    }
    const addNewNumber = (number) => {
        setNewNumber(number)
    }
    const submitNewPerson = (e) => {
        e.preventDefault();
        // check name is exists or not
        const isExists = persons.filter((v) => v.name === newName)
        // check name is exists or not
        console.log(isExists, "<<check")
        if (isExists.length > 0) {
            alert(`${newName} is already added to phonebook`)
        }
        else {
            setPersons([...persons, { name: newName, number: newNumber }]);
            setNewName('')
            setNewNumber('')
        }
    }
    return (
        <>

            <form onSubmit={submitNewPerson}>
                <div>
                    name: <input value={newName} onChange={(e) => addNewPerson(e.target.value, e)} required />
                </div>
                <div>
                    number: <input type='number' value={newNumber} onChange={(e) => addNewNumber(e.target.value, e)} required />
                </div>
                <div>
                    <button type="submit" >add</button>
                </div>
            </form>
        </>
    )
}

export default Create