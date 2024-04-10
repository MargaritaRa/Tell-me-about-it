import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react-router-dom'

function PortfolioItem(){

    const params = useParams()

    const [item, setItem] = useState({})

    useEffect(() => {
        fetch(`url ${params.id}`)
        .then(res => res.json())
        .then(data => setItem(data))
    },[])
    

    return(
        <h1>{item.name}</h1>
    )
}

export default PortfolioItem