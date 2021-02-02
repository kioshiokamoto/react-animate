import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import PlanetOne from '../img/planet.svg';
import PlanetTwo from '../img/planet-2.svg';
import PlanetThree from '../img/planet-3.svg';
import PlanetFour from '../img/planet-4.svg';


const Section = styled.section`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #131313;
`;
const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	height: 100vh;
	padding: 3rem calc((100vw-1300px) / 2);
	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;
const ColumnLeft = styled.div`
    display: flex;
    color:#fff;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 5rem 2rem;

    h1{
        margin-bottom: 0.5rem;
        font-size:2rem;
    }
    p{
        margin: 2rem 0;
        font-size: 4rem;
        line-height: 1.1;
    }
`;
const Button = styled(motion.button)`
    padding: 1rem 3rem;
    font-size:1rem;
    border: 2px solid #fff;
    color:#fff;
    border-radius:4px;
    outline: none;
    cursor: pointer;
    background: transparent;
`;

const Image = styled(motion.img)`
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 250px;
    max-height: 250px;
`;
const ColumnRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    position: relative;

    ${Image}:nth-child(1){
        top:10px;
        left:10px;
    }
    ${Image}:nth-child(2){
        top:170px;
        left:10px;
    }
    ${Image}:nth-child(3){
        top:350px;
        left:50px;
    }
    ${Image}:nth-child(4){
        bottom:100px;
        right:75px;
    }
`;  


export const Hero = () => {
    const fadeLeft = {
        hidden: {opacity:0, x:-100},
        visible:{opacity:1,x:0}
    }
	return (
		<Section>
			<Container>
				<ColumnLeft>
					<motion.h1
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:1}}
                    
                    >Bienvenido al espacio</motion.h1>
					<motion.p
                        variants={fadeLeft}
                        initial='hidden'
                        animate='visible'
                        transition={{duration:1}}
                    >Viaje a lo desconocido</motion.p>
                    <Button
                        whileHover={{scale:1.05}}
                        whileTap={{scale:0.95, backgroundColor:'#67f6e7', border:'none', color:'#000'}}
                        initial={{opacity:0}}
                        animate={{opacity:1, transition:{duration:1.5}}}
                    >Inicia aquí</Button>
				</ColumnLeft>
				<ColumnRight>
                    <Image 
                        src={PlanetOne} 
                        alt="planeta" 
                        whileTap={{scale:0.9}} 
                        drag={true}
                        dragConstraints={{left:0, right:250, top:0, bottom:50}}
                        initial={{opacity:0, y:-100}}
                        animate={{opacity:1,y:0, transition:{duration:1}}}
                        
                    />
                    <Image 
                        src={PlanetTwo} 
                        alt="planeta"
                        whileTap={{scale:0.6}} 
                        drag={true}
                        dragConstraints={{left:50, right:0, top:0, bottom:50}}
                        initial={{opacity:0, x:100}}
                        animate={{opacity:1,x:0, transition:{duration:1}}}    
                    />
                    <Image 
                        src={PlanetThree} 
                        alt="planeta"
                        whileTap={{scale:0.8}} 
                        drag={true}
                        dragConstraints={{left:0, right:250, top:0, bottom:50}}
                        initial={{opacity:0, x:-100}}
                        animate={{opacity:1,x:0, transition:{duration:1}}}
                    />
                    <Image 
                        src={PlanetFour} 
                        alt="planeta"
                        whileTap={{scale:0.9}} 
                        drag={true}
                        dragConstraints={{left:0, right:0, top:0, bottom:0}}
                        initial={{opacity:0, y:100}}
                        animate={{opacity:1,y:0, transition:{duration:1}}}
                    />
                </ColumnRight>
			</Container>
		</Section>
	);
};
