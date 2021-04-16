import React from 'react'
import bg from '../images/bg.jpg'

const Home = () => {
    return (
        <main>
            <img src={bg} alt="Programminig is passion" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-32 px-8" >
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug ">Cloning Is Queit Intresting Hun!!!.</h1>
            </section>
        </main>
    )
}

export default Home
