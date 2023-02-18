import styled from 'styled-components';
import { useRef, useEffect, useState } from 'react';
import anime from 'animejs';

import { PlotBar, PlotBarContainer } from './PlotBar';

export function PlotCol({ title, data, max }){
    const container = useRef(null);
    let [ state, setState ] = useState(false);

    const quantity = useRef({ opacity: 0, transform: 200 })

    let animation = anime({
        targets: quantity.current,
        opacity: [0, 1],
        transform: [-200, 0],
        duration: 1000,
        easing: 'easeOutQuad',
        autoplay: false,
        delay: 200,
        update: ()=>{
            container.current.style.opacity = quantity.current.opacity;
            container.current.style.transform = `translateX(${ quantity.current.transform }px)`;
        }
    });

    const cb = (entries)=>{
        if(entries[0].isIntersecting){
            animation.play();
            animation.finished.then(setState(true));
            
        }else{
            setState(false);
        }
    }

    useEffect(()=>{
        const observer = new IntersectionObserver(cb, {
            root: null,
            threshold: 0.9
        });

        if(container.current) observer.observe(container.current);

        return ()=>{
            if(container.current) observer.unobserve(container.current);
        }


    }, [container]);

    return(
        <Column ref={ container }>
            <PlotBarContainer>
                <PlotColTitle>{ title }</PlotColTitle>
            </PlotBarContainer>
            {
                data.map((bar, i)=>
                    <PlotBar {...bar} max={ max } key={ bar.year } play={ state } delay={ (i * 1000 * Math.random()) }></PlotBar>
                )
            }
            
        </Column>
    );
};

const Column = styled.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    opacity: 0;
`;

const PlotColTitle = styled.h3`
    ${ ({ theme })=>theme.type.plotTitle }
`;