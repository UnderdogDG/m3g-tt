import { useEffect, useRef } from "react";
import styled from "styled-components";

import anime from 'animejs/lib/anime.es';

export function Counter({ amount=0, label1='millones', label2='de usuarios' }){
    const container = useRef(null);
    const counter = useRef(null);
    const quantity = useRef({ count: 0 });

    let animation = anime({
        targets: quantity.current,
        count: amount,
        duration: 1000,
        easing: 'easeOutCubic',
        autoplay: false,
        delay: 300,
        update: ()=>{
            counter.current.innerHTML = quantity.current.count.toFixed(0)
        }
    });

    const cb = (entries)=>{
        if(entries[0].isIntersecting){
            animation.play();
        }
    }

    useEffect(()=>{
        const observer = new IntersectionObserver(cb, {
            root: null,
            threshold: 1.0
        });

        if(container.current) observer.observe(container.current);

        return ()=>{
            if(container.current) observer.unobserve(container.current);
        }


    }, [container]);

    return(
        <CounterContainer ref={ container } >
            <CounterLabel>
                <Count ref={ counter }>
                    0
                </Count>
                <span className="label">
                    { label1 }
                    <br />
                    { label2 }
                </span>

            </CounterLabel>
        </CounterContainer>

    );
}

const CounterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CounterLabel = styled.h4`
    ${ ({ theme })=>theme.type.main };
    display: flex;
    justify-content: center;
    align-items: stretch;
    color: ${ ({ theme })=>theme.color.blue28 };
    margin: 0;
    line-height: 1;

    .label{
        display: flex;
        justify-content: flex-start;
        padding-left: 5px;
        font-size: 20px;
        font-weight: 500;
        line-height: 1.2;
    }
`;

const Count = styled.span`
    display: flex;
    min-width: 100px;
    justify-content: flex-end;
    padding-right: 5px;
    font-size: 52px;
    font-weight: 600;
`;