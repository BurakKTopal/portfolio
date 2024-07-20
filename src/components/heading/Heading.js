import { useEffect, useState } from "react"
import './Heading.css'
import { quotesArray } from "../../data/quotes";
import { scrollToSection } from "../navbar/Navbar";

export default function Heading({ quoteFinished, setQuoteFinished }) {

    const [heading, setHeading] = useState(undefined)
    const [author, setAuthor] = useState(undefined)

    const DELAY = 50;
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const generateQuoteWithDelay = async (quoteObject, delay) => {
        const totalDelay = randomQuote.length * 50;
        const quote = quoteObject.quote;
        for (let index = 0; index <= quote.length; index++) {
            await sleep(DELAY ? DELAY : 100)
            setHeading(quote.slice(0, index))
        }
        setQuoteFinished(true)

        generateAuthorWithDelay(`~${randomQuote.author}`, totalDelay / (randomQuote.author.length))

    }
    const generateAuthorWithDelay = async (word, delay) => {
        for (let index = 0; index <= word.length; index++) {
            await sleep(delay ? delay : 100)
            setAuthor(word.slice(0, index))
        }
    }

    const getRandomElement = (arr) => {
        // Generate a random index
        const randomIndex = Math.floor(Math.random() * arr.length);
        // Return the random element
        return arr[randomIndex];
    }
    const randomQuote = getRandomElement(quotesArray);

    useEffect(() => {
        if (heading === undefined) {
            generateQuoteWithDelay(randomQuote)
        }
    }, [])

    return (
        <>
            <header>
                <div className="header-content">
                    {heading}
                </div>
                <br />
                <div className="author-container">
                    {author}
                </div>
            </header>


        </>
    )
}