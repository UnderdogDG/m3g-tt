import styled from 'styled-components';

import { useRef, useEffect, useState } from 'react';
import anime from 'animejs/lib/anime.es';

import { Col33, MainSection, ResposiveContainer, RowContainer, SectionContainer } from '../containers';

import imgPortada1 from '../imgs/img-portada-1.png';
import imgPortada2 from '../imgs/img-portada-2.png';
import imgPortada3 from '../imgs/img-portada-3.png';
import imgPortada4 from '../imgs/img-portada-4.png';
import imgPortada5 from '../imgs/img-portada-5.png';

import { section1 } from '../utils/data/s1';

export function Section1(){
    const container = useRef(null);
    const p1 = useRef(null);
    const p2 = useRef(null);
    const img1 = useRef(null);
    const img2 = useRef(null);
    const img3 = useRef(null);
    const img4 = useRef(null);
    const img5 = useRef(null);
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
            img1.current.style.opacity = quantity.current.opacity;
            img2.current.style.opacity = quantity.current.opacity;
            img3.current.style.opacity = quantity.current.opacity;
            img4.current.style.opacity = quantity.current.opacity;
            img5.current.style.opacity = quantity.current.opacity;
            img1.current.style.transform = `translateX(${ quantity.current.transform }px)`;
            img2.current.style.transform = `translateY(${ -quantity.current.transform }px)`;
            img3.current.style.transform = `translateY(${ quantity.current.transform }px)`;
            img4.current.style.transform = `translateX(${ -quantity.current.transform }px)`;
            img5.current.style.transform = `translateY(${ quantity.current.transform }px)`;
            p1.current.style.transform = `translateY(${ -quantity.current.transform }px)`;
            p2.current.style.transform = `translateX(${ -quantity.current.transform }px)`;
        }
    });

    const cb = (entries)=>{
        if(entries[0].isIntersecting){
            if(!state){
                animation.play();
                animation.finished.then(setState(true));
            }
            
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
        <Section1Container ref={ container } id="inicio">
            <Section1Wrapper>
                <TitleContainer>
                    <Logo />
                    <HeadTitle>
                        { section1.title }
                    </HeadTitle>
                </TitleContainer>
                <PhotoContainer>
                    <Col1>
                        <ResposiveContainer>
                            <Col1Img1 ref={ img1 } src={ imgPortada1 } />
                            <Col1Img2 ref={ img2 } src={ imgPortada2 } />
                        </ResposiveContainer>
                    </Col1>
                    <Col2>
                        <ResposiveContainer>
                            <Col2Img1 ref={ img3 } src={ imgPortada3 } />
                            <Col2Img2 ref={ img4 } src={ imgPortada4 } />
                        </ResposiveContainer>
                    </Col2>
                    <Col3>
                        <ResposiveContainer>
                        <Col3Img1 ref={ img5 } src={ imgPortada5 } />
                        </ResposiveContainer>
                    </Col3>

                </PhotoContainer>
                <HeaderContainer>
                    <Header>
                        <span ref={ p1 } className='p1'>
                            { section1.header.p1 }
                        </span>
                        <br />
                        <span ref={ p2 } className='p2'>
                            { section1.header.p2 }
                        </span>
                    </Header>
                </HeaderContainer>

            </Section1Wrapper>
        </Section1Container>
    );
};

const Section1Container = styled(MainSection)`
    background-color: ${ ({ theme })=>theme.color.blue46 };
`;

const Section1Wrapper = styled(SectionContainer)`
    min-height: auto;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    padding: 80px;
`;

const TitleContainer = styled(RowContainer)`
    align-items: flex-start;
    justify-content: space-between;
`;

const Logo = styled(ResposiveContainer)`
    width: 60px;
    height: 60px;
    padding-bottom: 0;
    background-color: ${ ({ theme })=>theme.color.white };

    &::after{
        content: "";
        display: block;
        width: 45px;
        height: 45px;
        border: 8px solid ${ ({ theme })=>theme.color.blue46 };
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-sizing: border-box;
    }
`;

const HeadTitle = styled.h1`
    ${ ({ theme })=>theme.type.main };
    letter-spacing: 0.2em;
    text-transform: uppercase;
`;

const PhotoContainer = styled(RowContainer)`
    padding: 40px 0;
`;

const Col1 = styled(Col33)`
    position: relative;

    &::before{
        content: "";
        display: block;
        width: 120%;
        height: 150%;
        position: absolute;
        top: 30%;
        left: -50%;
        ${ ({ theme })=>theme.border };
        border-color: ${ ({ theme })=>theme.color.blue28 };
        z-index: 0;
    }
    
    &::after{
        content: "";
        display: block;
        width: 40%;
        height: 200%;
        position: absolute;
        top: 10%;
        left: -88px;
        ${ ({ theme })=>theme.border };
        z-index: 0;
    }
`;

const Col1Img1 = styled.img`
    width: 60%;
    position: absolute;
    top: 20%;
    left: 0;
    transform: translate(0, 0);
    z-index: 2;
`;

const Col1Img2 = styled.img`
    width: 75%;
    position: absolute;
    bottom: -20%;
    right: -15%;
    transform: translate(0, 0);
    z-index: 1;
`;

const Col2 = styled(Col33)`
    position: relative;

    &::before{
        content: "";
        display: block;
        width: 30%;
        height: 30%;
        position: absolute;
        top: 80%;
        left: 65%;
        transform: translate(-50%, -50%);
        ${ ({ theme })=>theme.border };
        border-color: ${ ({ theme })=>theme.color.blue28 };
    }
`;

const Col2Img1 = styled.img`
    width: 75%;
    position: absolute;
    top: 10%;
    left: 5%;
    transform: translate(0, 0);
    z-index: 1;
`;

const Col2Img2 = styled.img`
    width: 60%;
    position: absolute;
    bottom: -40px;
    right: -30%;
    transform: translate(0, 0);
    z-index: 2;
`;

const Col3 = styled(Col33)`
    position: relative;

    &::before{
        content: "";
        display: block;
        width: 40%;
        height: 40%;
        position: absolute;
        top: 70%;
        right: -88px;
        transform: translate(0, -80%);
        ${ ({ theme })=>theme.border };
        border-color: ${ ({ theme })=>theme.color.blue28 };
    }
`;

const Col3Img1 = styled.img`
    width: 75%;
    position: absolute;
    top: -30px;
    right: 0;
    transform: translate(0, 0);
    z-index: 1;
`;

const HeaderContainer = styled(RowContainer)`
    padding-top: 60px;
    justify-content: flex-end;
    align-items: center;
    position: relative;
`;

const Header = styled.h2`
    ${ ({ theme })=>theme.type.main };
    font-size: 80px;
    font-weight: 500;
    line-height: 1em;

    .p1{
        display: inline-block;
        color: ${ ({ theme })=>theme.color.blue28 };
        position: relative;
    }
    .p2{
        display: inline-block;
        color: ${ ({ theme })=>theme.color.blue00 };
        position: relative;
    }
`
