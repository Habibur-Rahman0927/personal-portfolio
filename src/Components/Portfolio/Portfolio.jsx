import React, { useEffect, useState } from 'react';
import './Portfolio.scss';
import PortfolioList from '../PortfolioList/PortfolioList';
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio
} from '../../data'

const Portfolio = () => {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([])
    const list = [
        { id: "featured", title: "Featured" },
        { id: "web", title: "Dynamic Web App" },
        { id: "website", title: "Web App" },
        { id: "design", title: "Design" },
        { id: "content", title: "Contant" }
    ]

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "website":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "content":
                setData(contentPortfolio);
                break;

            default:
                setData(featuredPortfolio);
        }
    }, [selected])
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => <PortfolioList title={item.title}
                    active={selected === item.id}
                    id={item.id}
                    setSelected={setSelected}></PortfolioList>)}
            </ul>
            <div className="container">
                {
                    data.map(d => (
                        <div style={{overflow:"hidden"}} className="item">
                            <img src={d.img} alt="" />
                            <h3>{d.title}</h3>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default Portfolio;