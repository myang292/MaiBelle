import React, { useEffect, useState } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'


const BronzerId = (props) => {
    
    let {id} = useParams()

    const [selectBronzer, setBronzer] = useState('')

    useEffect(() => {
        let selectBronzer = props.bronzer.find(
            (bronzer) => bronzer._id === id
            )
            setBronzer(selectBronzer)
        }, [])

    // let Navigate = useNavigate()
// console.log(selectBronzer)

    if (selectBronzer) {
        return(
            <div className=''>
                <br />
                <img src={selectBronzer.photoUrl} alt='' />
                <h3>{selectBronzer.name}</h3>
                <h3>${selectBronzer.price}</h3>
                <h3>{selectBronzer.description}</h3>
                <br />
                <div>
                    <button>Add to Cart</button>
                </div>
            </div>
        )

    } else {
        return ('Loading...')
    }
}

export default BronzerId