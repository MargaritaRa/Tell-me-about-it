import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function PortfolioItem() {

    const params = useParams()

    const [item, setItem] = useState( {} )

    useEffect(() => {
        fetch(`http://localhost:3000/portfolios/${params.id}`)
        .then(res => res.json())
        .then(data => setItem(data))
    }, [])

    return (
        <h1>{item.name}</h1>
    )

}

export default PortfolioItem