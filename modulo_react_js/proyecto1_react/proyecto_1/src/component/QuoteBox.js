import { useState } from 'react'
import Button from './Button'
import quotes from '../quotes.json'

const ContainerNotes = ({}) =>{
    const [quote, setQuote] = useState(quotes.citas[101])
    const followingQuote = () =>{
        const indexCitas = Math.floor(Math.random() * quotes.citas.length)
        console.log(indexCitas)
        setQuote(quotes.citas[indexCitas])
    }
    // console.log(typeof(quote))
    const keysObje = Object.keys(quote)
    return (
        <div className="QuoteBox">
            <p>{quote[keysObje[0]]}</p><br/>
            <p>{quote[keysObje[1]]}</p>
            <div className="container-button">
                <Button following={followingQuote}> </Button>
            </div>
        </div>
    )
}
export default ContainerNotes