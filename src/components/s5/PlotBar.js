import { useRef } from 'react';
import anime from 'animejs/lib/anime.es';
import styled from 'styled-components';

export function PlotBar({ year, amount, max, play=false, delay}){
    
    const bar = useRef(null);
    const counter = useRef(null);
    const quantity = useRef({ amount: 0 })

    let animation = anime({
        targets: quantity.current,
        amount: [0, amount],
        duration: 1000,
        easing: 'easeInOutCirc',
        autoplay: false,
        delay,
        update: ()=>{
            bar.current.style.width = `${(quantity.current.amount * 100) / max}%`;
            counter.current.innerHTML = quantity.current.amount.toFixed(0);
        }
    });

    if(play){
        animation.play();
    }

    

    

    return(
        <PlotBarContainer>
            <PlotBarText>
                <PlotBarLabel>
                    { year }
                </PlotBarLabel>
            </PlotBarText>
            <PlotBarWrapper>
                <AnimatedBar ref={ bar }></AnimatedBar>
            </PlotBarWrapper>
            <PlotBarText>
                <PlotBarLabel ref={ counter }>
                    0
                </PlotBarLabel>
            </PlotBarText>

        </PlotBarContainer>
    );
};

export const PlotBarContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    position: relative;
`;

const PlotBarText = styled.div`
    width: 12%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const PlotBarWrapper = styled.div`
    width: 100%;
    margin: 2px 10px;
    background-color: ${ ({ theme })=>theme.color.blue28 };
    position: relative;
`;

const AnimatedBar = styled.span`
    display: block;
    width: 0;
    height: 100%;
    transform: scaleX(1);
    background-color: ${ ({ theme })=>theme.color.white };
    position: absolute;
    top: 0;
    left: 0;
`;

const PlotBarLabel = styled.p`
    ${ ({ theme })=>theme.type.plotBarTitle }
`;

