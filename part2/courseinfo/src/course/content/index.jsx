import React from 'react'
function index({course}) {
    const initialValue = 0;
    const sumWithInitial = course.parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, initialValue);
    return (
        <>
            {course.parts?.map((v, i) => {
                return <p key={i}>{v.name} {v.exercises}</p>
            })}
            <strong>total of {sumWithInitial} Exercise</strong>
        </>
  )
}

export default index