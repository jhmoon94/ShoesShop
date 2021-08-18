import axios from 'axios';
import fetch from 'node-fetch'

function Buttons(props) {
    return (
        <>
            <button className="btn btn-primary" onClick={()=>{
                if (props.fetched == false) {
                    axios.get('https://jhmoon94.github.io/shop/shoes.json')
                    .then( (res) => {console.log(res.data); console.log(props.shoes); props.setShoes([...props.shoes,...res.data]); props.setFetched(true)})
                    .catch( err => console.log(err))

                } else {
                    props.setShoes(props.shoesData)
                    props.setFetched(false)
                }
                }}>More by axios</button>
                
            <button className="btn btn-primary" onClick={()=>{
                if (props.fetched == false) {
                    fetch('https://jhmoon94.github.io/shop/shoes.json')
                    .then(res => res.json())
                    .then((json) => {console.log(json); props.setShoes([...props.shoes, ...json]) ; props.setFetched(true) })
                .catch(err => console.log(err))
                } else {
                    props.setShoes(props.shoesData)                   
                    props.setFetched(false)
                }
            }}>More by fetch</button>
        </>
    )
}

export default Buttons;