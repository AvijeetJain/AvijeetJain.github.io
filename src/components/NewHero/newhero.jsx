import React, { useEffect, useState } from 'react';
import './style.css';
import { gsap } from 'gsap';
import Typed from 'react-typed';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

import { 
  bg,
  background,
  back_shadow,
  fog_1,
  fog_2,
  fog_3,
  fog_4,
  fog_5,
  fog_6,
  fog_7,
  sun_rays,
  bottom_left_house,
  bottom_right_cave,
  bottom_right_tree1,
  bottom_right_tree2,
  goat_bottom_left,
  wizard,
  owl,
  dragon,
  hogwarts
  } from '../../assets';

const Hog = () => {
    useEffect(() => {
        const parallaxEls = document.querySelectorAll('.parallax');
        const mainEl = document.querySelector('main');
    
        let xValue = 0,
          yValue = 0;
    
        let rotateDegree = 0;
    
        const update = (cursorPosition) => {
          parallaxEls.forEach((el) => {
            let speedX = el.dataset.speedx;
            let speedY = el.dataset.speedy;
            let speedZ = el.dataset.speedz;
            let rotateSpeed = el.dataset.rotation;
    
            let isInLeft =
              parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
    
            let zValue =
              (cursorPosition - parseFloat(getComputedStyle(el).left)) *
              isInLeft *
              0.1;
    
            el.style.transform = `translateX(calc(-50% + ${
              -xValue * speedX
            }px)) rotateY(${rotateDegree * rotateSpeed}deg) translateY(calc(-50% + ${
              yValue * speedY
            }px)) perspective(2300px) translateZ(${zValue * speedZ}px)`;
          });
        };
    
        update(0);
    
        const handleMouseMove = (e) => {
          xValue = e.clientX - window.innerWidth / 2;
          yValue = e.clientY - window.innerHeight / 2;
    
          rotateDegree = (xValue / (window.innerWidth / 2)) * 20;
          update(e.clientX);
        };
    
        window.addEventListener('mousemove', (e) => {
            if (timeline.isActive()) return;
            xValue = e.clientX - window.innerWidth / 2;
            yValue = e.clientY - window.innerHeight / 2;
            rotateDegree = (xValue / (window.innerWidth / 2)) * 20;
            update(e.clientX);
          });

        let timeline = gsap.timeline();
    
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);

  const handleDownloadClick = () => {
    window.open('https://drive.google.com/file/d/1cU6wneKIehB5ltyxCc2wW38Pm_Gy4DOK/view?usp=sharing', '_blank');
  };

    return(
    <>
      <div className='main'>
        <div className="vignette hide"></div>

        <img src={bg} alt="background" 
        className='back'/>
        
        <img src={background} alt="background" 
        data-speedx="0.05" data-speedy="0.058" data-speedz="0" data-rotation="0" data-distance='-200' 
        className="parallax bg-img" />

        <img src={dragon} alt="dragon" 
        data-speedx="0.1" data-speedy="0.19" data-speedz="0.15" data-rotation="1" data-distance='1700' 
        className="parallax dragon" />

        <img src={hogwarts} alt="hogwarts" 
        data-speedx="0.04" data-speedy="0.0711" data-speedz="0" data-rotation="0.02" data-distance='3800' 
        className="parallax hogwarts" />

        <img src={fog_7} alt="fog" 
        data-speedx="0.12" data-speedy="0.16" data-speedz="0" data-rotation="0" data-distance='850' 
        className="parallax fog-7" />

        <img src={fog_5} alt="fog5" 
        data-speedx="0.16" data-speedy="0.105" data-speedz="0" data-rotation="0" data-distance='1900' 
        className="parallax fog-5" /> 

        <img src={owl} alt="owl" 
        data-speedx="0.0916" data-speedy="0.1" data-speedz="0" data-rotation="0.09" data-distance='2000' 
        className="parallax owl" />
    
        <div data-speedx="0.027" data-speedy="0.018" data-speedz="0.53" className="parallax text">
        <h1>Heyy, I'm Aviiii</h1>
        </div>

        <div className="text2">
          <h1 className={`text-white`}>
           A&nbsp;
            <span className='text-[#ffff]'>
              <Typed 
              strings={[
                "Full Time Developer",
                "part Time Wizard",
              ]}
              typeSpeed={150}
              backSpeed={100}
              loop/>
            </span>
          </h1>
        </div>

        <button className='resume items-center h-screen'
        onClick={handleDownloadClick}>
          {/* <img src={resume} alt="icon" className='w-8 h-8' /> */}
          <FontAwesomeIcon icon={ faUserTie } className="mr-2 h-4 w-4" />
          Resume
        </button>

        <img src={bottom_right_tree2} alt="tree" 
        data-speedx="0.065" data-speedy="0.05"data-speedz="0.5" data-rotation="0.12" data-distance='2300' 
        className="parallax tree2" />

        <img src={fog_4} alt="fog4" 
        data-speedx="0.1" data-speedy="0.1" data-speedz="0" data-rotation="0" data-distance='2400' 
        className="parallax fog-4" />

        <img src={bottom_left_house} alt="house" 
        data-speedx="0.08" data-speedy="0.03" data-speedz="0.13" data-rotation="0.1" data-distance='2550' 
        className="parallax house" />

        <img src={fog_3} alt="fog-3" 
        data-speedx="0.091" data-speedy="0.018" data-speedz="0" data-rotation="0" data-distance='2800' 
        className="parallax fog-3" />

        <img src={goat_bottom_left} alt="goat" 
        data-speedx="0.059" data-speedy="0.024" data-speedz="0" data-rotation="0.14" data-distance='3200' 
        className="parallax goat" />

        <img src={bottom_right_tree1} alt="tree1" 
        data-speedx="0.04" data-speedy="0.018" data-speedz="0.32" data-rotation="0.05" data-distance='3400' 
        className="parallax tree1" />
{/* 
        <img src={fog_2} alt="fog2" 
        data-speedx="0.0515" data-speedy="0.0115" data-speedz="0" data-rotation="0" data-distance='3600' 
        className="parallax fog-2" /> */}

        <img src={fog_1} alt="fog1" 
        data-speedx="0.12" data-speedy="0.01" data-speedz="0" data-rotation="0" data-distance='4200' 
        className="parallax fog-1" />

        <img src={bottom_right_cave} alt="cave" 
        data-speedx="0.0235" data-speedy="0.013" data-speedz="0" data-rotation="0.15" data-distance='3800' 
        className="parallax cave" />

        <img src={wizard} alt="wizard" 
        data-speedx="0.027" data-speedy="0.018" data-speedz="0.53" data-rotation="0.2" data-distance='4000' 
        className="parallax wizard" />

        <img src={sun_rays} alt="sunrays" 
        className="sun-rays" />

      </ div>
    </>
    )
}


export default Hog