import React, { useState, useEffect } from 'react'
import { db } from '../../firebase/firebaseFunction'
import WeightCard from './weight-card/WeightCard'
import './home-page.scss'

function HomePage({ currentUser }) {
    const [input, changeInput] = useState('')
    const [weightList, updateWeightList] = useState([])

    useEffect(() => {
        if (currentUser) {
            var unsub = db.collection('users').doc(currentUser.uid).collection('weightList').orderBy("created", 'desc')
                .onSnapshot((querySnapshot) => {
                    updateWeightList(querySnapshot.docs)
                })

            return unsub
        }
        else {
            updateWeightList([])
        }
    }, [currentUser])

    const onSubmit = (e) => {
        e.preventDefault();
        if (currentUser) {
            var d = new Date()
            db.collection('users').doc(currentUser.uid).collection('weightList').add({ text: input, created: d.toLocaleString() })
        }
        else {
            alert('you are not signed in!')
        }
        changeInput('')
    }
    return (
        <div className='home-page'>
            <form className='weight-form' onSubmit={(e) => onSubmit(e)}>
                <input type="number" value={input} onChange={(e) => { changeInput(e.target.value) }} placeholder='enter your current weight here' required />
                <button>update weight</button>
            </form>

            <ul className="weight-list">
                {
                    weightList.map(task =>
                        <WeightCard key={task.id} id={task.id} content={task.data()} >
                        </WeightCard>)
                }
            </ul>

        </div>
    )
}

export default HomePage
