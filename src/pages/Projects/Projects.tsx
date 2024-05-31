import React, { useEffect, useState } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../lib/init-firebase';
import { Link } from 'react-router-dom';
import Modal from "../../components/Modal/Modal";
import Countdown2 from "../../components/Countdown/Countdown2";
import Sidebar from "../../components/Sidebar/Sidebar";
import MarketCap from "../../components/MarketCap/MarketCap";
import data from '../../Seeds/data';
import "./Projects.css";
import alvaImage from '../../assets/images/alva.png';

function Projects() {
    const [showModal, setShowModal] = useState(false);
    const [dates, setDates] = useState<Project[]>([]); // Definindo o tipo explicitamente

    useEffect(() => {
        // Simulando a obtenção dos dados do Firebase com os dados do JSON
        setDates(data);
    }, []);

    const handleOnClose = () => {
        setShowModal(false);
    }

    return (
        <>
            <section className="StyleCard">
                <div className="slider owl-carousel">
                    {dates.map((item, index) => (
                        <div className="card" key={item.id}>
                            <div className="img"><img src={item.image} alt="" /></div>
                            <div className="content">
                                <div className="title">{item.title}</div>
                                <div className="sub-title">{item.subtitle}</div>
                                <div className="progress-container">
                                    <Countdown2 data={item.date} title={item.title} />
                                    <MarketCap price={item.price} dailyVariation={item.dailyVariation} />
                                    <progress id={`file${index}`} value={item.progress} max="100" style={{ color: '#000000' }}></progress>
                                    <span id="progress-percentage">{item.progress}%</span>
                                </div>
                                <div className="btn">
                                    <Link to={`/project/${item.id}`}>
                                        <button>Ver mais</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Projects;
