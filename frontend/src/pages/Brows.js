import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Comment from '../components/Comment'

const Brows = (props) => {

    let navigate = useNavigate()
    const nav = (brows) => {
        navigate(`${brows._id}`)
    }

    console.log(props)

    return(
        <div>
            
            <br />
            <br />
            <div>
                {props.brows.map((brows) => {
                    return(
                        <div>
                            {brows.name}
                            <br />
                            <img src={brows.photoUrl} alt='' onClick={() => nav(brows)} key={brows._id}/>
                            {brows.description}
                        </div>
                    )
                })}
            </div>

            <Comment />
        </div>
    )
}

export default Brows