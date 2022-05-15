
import { useNavigate } from 'react-router-dom'


const AllProducts = (props) => {

    let navigate = useNavigate()
    const nav = () => {
        navigate(`${props.makeup.name}`)
    }


    console.log(props)

    return(
        <div>
            <div>
                {props.makeup.map((makeup) => {
                    return(
                        <div>
                            {makeup.name}
                            <br />
                            <img src={makeup.photoUrl} alt='' key={makeup._id} onClick={nav}/>
                        </div>
                    )
                })}
            </div>


        {/* <div className='productParent'>
            <div className='product1'>
                <br />
                <img src='https://static.wixstatic.com/media/d8d143_c030875a175a42f38071cef15d485dff~mv2.jpg/v1/fill/w_350,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/RTW-Face-foundation.jpg' alt='' className='products' onClick={face}/>
                <h3>Face</h3>
            </div>
            <div className='product2'>
            <br />
                <img src='https://static.wixstatic.com/media/d8d143_a69abe8740954d2295b802d35e27a4f1~mv2.jpg/v1/fill/w_350,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/RTW-Eyes-brow.jpg' alt='' className='products' onClick={eyes}/>
                <h3>Eyes</h3>
            </div>
            <div className='product3'>
            <img src='https://static.wixstatic.com/media/d8d143_f5f52a911e87403e95354ac46672ece4~mv2.jpg/v1/fill/w_350,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/RTW-Lips-lipstick.jpg' alt='' className='products' onClick={lips}/>
                <h3>Lips</h3>
            </div>
            <div className='product4'>
                
            </div>
        </div> */}
        </div>
    )
}

export default AllProducts