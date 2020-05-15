import React from 'react'
import Visuals from '../Visuals/visuals'
import Stats from '../Stats/stats'
import UpdateBudgetButton from '../UpdateBudgetButton/update-budget-button'
import LearnMoreButton from '../LearnMoreButton/learn-more-button'

export default function DashBoardPage(props) {
    return (
        <div>
            <section>
            <h1>The Dashboard</h1>
                </section>
                <section><Stats/></section>
                <section><Visuals/></section>
                <section><UpdateBudgetButton/><LearnMoreButton/></section>
                <section></section>
                

        </div>
    )
}