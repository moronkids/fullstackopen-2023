/* eslint-disable react/prop-types */
import React from 'react'
import { useState } from 'react';

function Filter({filterName, setFilterName}) {

    return (
        <>

            filter shown with : <input value={filterName} type="text" onChange={(e) => setFilterName(e.target.value)} />
        </>
    )
}

export default Filter