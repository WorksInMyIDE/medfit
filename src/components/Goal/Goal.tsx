import styles from './Goal.module.css'
import { useState } from 'react'

interface statements {
    id: number
    svg: string
    heading: string
    text: string
}

const goals: statements[] = [
    {
        id: 0,
        svg: "./mission.svg",
        heading: "Mission",
        text: "We strive to empower individuals to take control of their health through innovative solutions, compassionate care, and reliable support that inspire long-term wellness and confidence."
    },
    {
        id: 1,
        svg: "./commitments.svg",
        heading: "Commitments",
        text: "We're committed to supporting your health journey by offering valuable educational resources, wellness insights, and expert advice to help you make informed decisions."
    },
    {
        id: 2,
        svg: "./vision.svg",
        heading: "Vision",
        text: "To create a world where everyone has access to the knowledge, tools, and guidance they need to live healthier, happier, and more fulfilling lives."
    },
]


const Goal = () => {

    const [selected, setSelected] = useState(0);
    const [current, setCurrent] = useState(goals[0].text);


    const handleClick = (item: statements) => {
        console.log("you clicked on ", item.heading)
        setSelected(item.id)
        setCurrent(item.text)
    }

    return (
        <div className={`padding ${styles.container}`}>
            <h2>What to Expect When You Join Our Team</h2>
            <div className={styles.innerContainer}>
                <div className={styles.links}>
                    {
                        goals.map((goal) => (
                            <div key={goal.heading} onClick={() => handleClick(goal)}>
                                <img src={`${goal.svg}`} alt={goal.heading} />
                                <p style={selected == goal.id ? { color: "var(--heading-text)" } : { color: "var(--body-text)" }}>{goal.heading}</p>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.textContainer}>
                    <img src="./goal-img.png" alt="Goals Image" />
                    <p>{current}</p>
                </div>
            </div>
        </div>
    )
}

export default Goal