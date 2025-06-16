import React from "react";
import "../../styles/Home.css";
import CardList from './Cards/CardList'
const news = [
  {
    title: "🚀 React 19 Released!",
    date: "May 13, 2025",
    summary: "The React team has officially released React 19 with new hooks, improved performance, and better TypeScript support.",
    link: "#"
  },
  {
    title: "🛠️ VS Code Gets AI Coding Assistant",
    date: "May 10, 2025",
    summary: "Visual Studio Code now integrates AI-powered code suggestions, making development faster and smarter.",
    link: "#"
  },
  {
    title: "🌐 TypeScript 5.5 Announced",
    date: "May 8, 2025",
    summary: "TypeScript 5.5 brings new language features and improved tooling for large-scale applications.",
    link: "#"
  }
];

const Home = () => (
    
        <>
        <section className="home">
            <div className="home__content">
                <h2>Welcome to the HIB</h2>
                <p>Hack_IT_Black</p>
            </div>
            <div className="card-bg">

            <CardList/>
            </div>
        </section>
        </>
  
)

export default Home;