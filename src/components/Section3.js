import styled from "styled-components";
import { useRef, useEffect, useState } from 'react';
import anime from 'animejs/lib/anime.es';

import { Col20, Col33, Col66, Col80, MainSection, ResponsiveImage, RowContainer, SectionContainer } from '../containers';
import { Counter } from "./counter";

import { section3 } from "../utils/data/s3";

import map from '../imgs/map-regions.svg';

export function Section3(){
    const container = useRef(null);

    const cb = (entries)=>{
        if(entries[0].isIntersecting){
            let animation = anime({
                targets: '#menu2 li',
                opacity: {
                    value: [0, 1],
                    delay: anime.stagger(30),
                },
                translateY:{
                    value: [-400, 0]
                },
                
                duration: 800,
                easing: 'linear',
            });
            
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
        <Section3Container>
            <Section3Wrapper ref={container}>
                <ColLeft>
                    <TitleContainer>
                        <Title>
                            { section3.col1.title }
                        </Title>
                    </TitleContainer>
                    <MapContainer>
                        <Map src={ map } />
                    </MapContainer>
                    <MenuContainer>
                        <MenuWrapper>
                            <Serv1Container>
                                { section3.col1.menu.submenu1.map((e)=>(
                                    <ServItem className="item" key={ e }>
                                        {e}
                                    </ServItem>
                                )) }
                                
                            </Serv1Container>
                            <Serv2Container>
                                { section3.col1.menu.submenu2.map((e)=>(
                                    <ServItem key={ e }>
                                        {e}
                                    </ServItem>
                                )) }
                                
                            </Serv2Container>
                            <Serv3Container>
                                { section3.col1.menu.submenu3.map((e)=>(
                                    <ServItem key={ e }>
                                        {e}
                                    </ServItem>
                                )) }
                                
                            </Serv3Container>
                            <Serv4Container>
                                { section3.col1.menu.submenu4.map((e)=>(
                                    <ServItem key={ e }>
                                        {e}
                                    </ServItem>
                                )) }
                                
                            </Serv4Container>
                        </MenuWrapper>
                        <CounterWrapper>
                            <Counter amount={ section3.col1.counter.amount } label1={ section3.col1.counter.p1 } label2={ section3.col1.counter.p2 } />
                        </CounterWrapper>
                    </MenuContainer>
                </ColLeft>
                <ColRight>
                    <ColRTitleContainer>
                        <ColRTitle>
                            <span className="top">
                                { section3.col2.title.p1 }
                            </span>
                            <br />
                            <span className="bottom">
                                { section3.col2.title.p2 }
                            </span>
                        </ColRTitle>
                        
                    </ColRTitleContainer>
                    <ColRLogosContainer id='menu2'>
                        { section3.col2.logos.map((e)=>(
                            <ColRLogosItem key={ e } >
                                { e }
                            </ColRLogosItem>
                        )) }
                    </ColRLogosContainer>
                </ColRight>
            </Section3Wrapper>
        </Section3Container>

    );
};

const Section3Container = styled(MainSection)`
    background-color: ${ ({ theme })=>theme.color.white };
    flex-wrap: wrap;
`;

const Section3Wrapper = styled(SectionContainer)`
    min-height: auto;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    padding: 80px;
`;

const ColLeft = styled(Col80)`
    flex-direction: column;
    padding-right: 20px;
`;

const TitleContainer = styled(RowContainer)`
    justify-content: flex-start;
    padding: 5px 0;
`;

const Title = styled.h2`
    ${ ({ theme })=>theme.type.main };
    color: ${ ({ theme })=>theme.color.blue28 };
    font-size: 24px;
    letter-spacing: 0.5em;
    text-transform: uppercase;
`;

const MapContainer = styled(RowContainer)`
    padding: 3%;
`;

const Map = styled.img`
    width: 100%;
`;

const MenuContainer = styled(RowContainer)`
    justify-content: space-between;
`;

const MenuWrapper = styled(Col66)`
    justify-content: space-between;
    padding: 0 10px 0 0;
`;

const ServContainer = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: space-evenly;
    list-style: none;
    padding: 5px;
    margin: 5px 2px;
`;

const Serv1Container = styled(ServContainer)`
    background-color: ${ ({ theme })=>theme.color.blue77 };
    order: 0;
`;

const Serv2Container = styled(ServContainer)`
    background-color: ${ ({ theme })=>theme.color.blue46 };
    order: 2;
`;

const Serv3Container = styled(ServContainer)`
    background-color: ${ ({ theme })=>theme.color.blue28 };
    order: 1;
`;

const Serv4Container = styled(ServContainer)`
    background-color: ${ ({ theme })=>theme.color.blue00 };
    order: 3;
`;

const ServItem = styled.li`
    padding: 5px 8px;
    color: ${ ({ theme })=>theme.color.white };
    font-weight: 600;
    position: relative;
`;

const CounterWrapper = styled(Col33)`
    background-color: ${ ({ theme })=>theme.color.graybd };
    padding: 8px;
    margin: 5px 0;
`;

const ColRight = styled(Col20)`
    background-color: ${ ({ theme })=>theme.color.blue46 };
    padding: 20px;
    margin: 5px 0;
    flex-direction: column;
    flex-wrap: wrap;
`;

const ColRTitleContainer = styled(RowContainer)`
    justify-content: flex-start;
`;

const ColRTitle = styled.h3`
    ${ ({ theme })=>theme.type.main };
    color: ${ ({ theme })=>theme.color.white };
    font-size: 18px;
    letter-spacing: 0.5em;
    text-transform: uppercase;
`;

const ColRLogosContainer = styled.ul`
    width: 100%;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
    padding: 0;
`;

const ColRLogosItem = styled.li`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    ${ ({ theme })=>theme.type.main };
    color: ${ ({ theme })=>theme.color.white };
    padding: 20px 0;
    font-weight: 900;
    font-size: 28px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    background-color: ${ ({ theme })=>theme.color.blue46 };
    transition: background-color 0.35s ease-out, transform 0.25s ease-in-out;
    transform: scale(1.0);

    &:hover{
        background-color: ${ ({ theme })=>theme.color.blue77 };
        transform: scale(1.05);
    }

    a{
        ${ ({ theme })=>theme.type.main };
        color: ${ ({ theme })=>theme.color.white };
        text-decoration: none;

        &:hover{
            color: ${ ({ theme })=>theme.color.blue00 };
        }
    }
`;