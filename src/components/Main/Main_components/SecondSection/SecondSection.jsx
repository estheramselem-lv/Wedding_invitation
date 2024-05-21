import React, {useEffect, useState} from 'react';
import '../SecondSection/SecondSection.css';
import DesignerHeart from '../../../../assets/img/designer_heaer.png'
import DesignerSiren from '../../../../assets/img/disigner_siren.png'
import Calendar from './SecondSection_Components/Calendar/Calendar';

export default function SecondSection() {
    const [showRightDecorate, setShowRightDecorate] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const scrollThreshold = 300; // Порог прокрутки

            const p1 = document.querySelector('.p1');


            if (p1) {
                const p1_pos = p1.offsetTop;

                if (scrollPosition > p1_pos + scrollThreshold - windowHeight) {
                    setShowRightDecorate(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Здесь нет зависимости, так как нужно выполнить только один раз при загрузке страницы

    return (
        <section className='SecondSection'>
            <img className='designerSiren' src={DesignerSiren} alt="" />
            <img className='designerSiren2' src={DesignerSiren} alt="" />
            <div className="main_title">
                <p className={`p1 ${showRightDecorate ? 'show' : ''}`}>DEAR FAMILY <br /> AND FRIENDS!</p>
            </div>
            <div className="subtitle">
                <p className={`p1 ${showRightDecorate ? 'show' : ''}`}>WITH JOY AND GRATITUDE TO HASHEM</p>
                <p className={`p2 ${showRightDecorate ? 'show' : ''}`}> WE ARE DELIGHTED TO INVITE YOU </p>
                <p className={`p3 ${showRightDecorate ? 'show' : ''}`}>TO CELEBRATE </p>
                <p className={`p4 ${showRightDecorate ? 'show' : ''}`}>THE WEDDING</p> 
                <p className={`p5 ${showRightDecorate ? 'show' : ''}`}>OF OUR DEAR CHILDREN </p>
            </div>
            <div className="waitU">
                <img src={DesignerHeart} alt="" />
            </div>
            <Calendar>
            </Calendar>
        </section>
    );
}
