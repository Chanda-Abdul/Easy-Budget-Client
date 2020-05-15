import React from 'react'
import Visuals from '../Visuals/visuals'
import Stats from '../Stats/stats'

export default function DashBoardPage(props) {
    return (
        <div>
            <section>
            <h1>The Dashboard</h1>
                </section>
                <section><Stats/></section>
                <section><Visuals/></section>
                <section></section>

        </div>
    )
}