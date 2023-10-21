/* eslint-disable react/prop-types */
import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import fetch_ from "../../services"

function Create({ persons, setPersons }) {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const addNewPerson = (name) => {
        setNewName(name)
    }
    const addNewNumber = (number) => {
        setNewNumber(number)
    }

    const hitEndpoint = async (type,id) => {
        const data = { name: newName, number: newNumber }
        setNewName('')
        setNewNumber('')
        if (type) {
            await fetch_.updatePersons(id,data)

        }
        else {
            await fetch_.createPersons(data)
        }
        const datas = await fetch_.getPersons()
        setPersons(datas.data)
    }
    const submitNewPerson = async (e) => {
        e.preventDefault();
        // check name is exists or not
        const isExists = persons.filter((v) => v.name === newName)
        // check name is exists or not
        console.log(isExists, "<<check")
        if (isExists.length > 0) {
            if (confirm(`${newName} is already added to phonebook, replace the old number with new on?`)) {
                const getId = persons.filter((v) => v.name === newName);
                hitEndpoint('update',getId[0].id)
            }
        }
        else {
            hitEndpoint()
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