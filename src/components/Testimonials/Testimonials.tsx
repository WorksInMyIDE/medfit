import Heading from "../Heading/Heading"
import styles from "./Testimonials.module.css"
import { useState } from "react"

interface testimonyBlueprint {
    name: string
    title: string
    image: string
    quote: string
}
const Testimonials = () => {
    const testimonialNames: testimonyBlueprint[] = [
        {
            name: "James Wilson",
            title: "Manager",
            image: "./james-wilson.png",
            quote: "I’m so impressed with this online medical store. The product selection is extensive and the prices are great. I found everything i needed in one place. The ordering process was easy, delivery was prompt, and the items arrived in perfect condition. Plus, the customer service team was incredibly helpful."
        },
        {
            name: "Henry Adams",
            title: "CEO",
            image: "./henry-adams.png",
            quote: "I had such a great experience shopping here! The website is easy to navigate, and I found exactly what I was looking for. My order arrived sooner than expected, and everything was well-packaged. Highly recommend this store to anyone looking for reliable service."
        },
        {
            name: "Ethan Harris",
            title: "Business Manager",
            image: "./ethan-harris.png",
            quote: "This online store exceeded my expectations. The range of products is amazing, and the checkout process was quick and smooth. My order arrived on time, and I was really impressed by the quality. Definitely coming back for more!"
        },
        {
            name: "Lily Baker",
            title: "Product Manager",
            image: "./lily-baker.png",
            quote: "Fantastic service from start to finish! The prices are reasonable, and the products are top-notch. Delivery was fast, and I appreciated how responsive the support team was when I had a small question. A very trustworthy store."
        }
    ]
    const [quote, setQuote] = useState(testimonialNames[0].quote)
    const [selected, setSelected] = useState<number | null>(0)
    return (
        <div className={styles.testimoniesContainer}>
            <Heading text="Our happy clients" />
            <div className={styles.quoteContainer}>
                {quote}
                <img className={styles.bigQuote} src="./quote.svg" alt="A big Quote" />
            </div>
            <div className={styles.testimonies}>
                {
                    testimonialNames.map((testimony, index) => (
                        <div key={index} className={styles.testimonyContainer} style={{ border: selected === index ? "2px solid var(--heading-text)" : '' }}
                            onClick={() => {
                                setQuote(testimony.quote)
                                setSelected(index)
                            }}>
                            <img src={testimony.image} alt="image" />
                            <div>
                                <h5>{testimony.name}</h5>
                                <p>{testimony.title}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Testimonials