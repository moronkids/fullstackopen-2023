/* eslint-disable react/prop-types */
import React from 'react'
import Header from './header'
import Content from './content'

function Index({course}) {
    return (
        <>
            {
                course?.map((v) => {
                    return (
                        <>
                            <>
                                <Header course={v}></Header>
                                <Content course={v}></Content>
                            </>
                        </>
                    )
                })
            }
        </>
    )
}

export default Index