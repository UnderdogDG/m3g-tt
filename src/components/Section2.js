import styled  from "styled-components";
import { useRef, useEffect, useState } from 'react';
import anime from 'animejs/lib/anime.es';

import { MainSection, Flex, SectionContainer, ResposiveContainer, ResponsiveImage } from "../containers";

import { section2 } from "../utils/data/s2";
import imgConocer from '../imgs/img-conocer.png';

export function Section2(){
    const container = useRef(null);
    const col1 = useRef(null);
    const col2 = useRef(null);
    
    let [ state, setState ] = useState(false);

    const quantity = useRef({ opacity: 0, scale: 2, translate: 400 })

    let animation = anime({
        targets: quantity.current,
        opacity: [0, 1],
        scale: [2, 1],
        translate: [400, 0],
        duration: 1000,
        easing: 'easeOutQuad',
        autoplay: false,
        delay: 200,
        update: ()=>{
            col1.current.style.opacity = quantity.current.opacity;
            col2.current.style.opacity = quantity.current.opacity;
            
            col1.current.style.transform = `scale(${ quantity.current.scale }) translateX(${ -quantity.current.translate }px)`;
            col2.current.style.transform = `scale(${ quantity.current.scale }) translateX(${ quantity.current.translate }px)`;
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


    }, [container, cb]);
    return(
        <Section2Container>
            <Section2Wrapper ref={container}>
                <Col33 ref={col1}>
                    <ColInt>
                        <Paragraph>
                            { section2.content.col1.p1}
                        </Paragraph>
                        <Paragraph>
                            { section2.content.col1.p2}
                        </Paragraph>
                    </ColInt>
                </Col33>
                <Col66 ref={col2}>
                    <ColInt>
                        <Row1>
                            <ImageContainer>
                                <ResponsiveImage src={ imgConocer } />
                            </ImageContainer>
                        </Row1>
                        <Row2>
                            <Row2Content>
                                <span className="p1">
                                    { section2.content.col2.p1 }
                                </span>&nbsp;
                                <span className="p2">
                                    { section2.content.col2.p2 }
                                </span>
                            </Row2Content>
                        </Row2>
                        <Row3>
                            <Logo />
                            <Row3Content>
                                { section2.content.col2.footer.p }
                                &nbsp;
                                <a href="#">
                                    {section2.content.col2.footer.cta}
                                </a>
                            </Row3Content>
                        </Row3>

                    </ColInt>
                </Col66>
            </Section2Wrapper>
        </Section2Container>
    );
};


const Section2Container = styled(MainSection)`
    background-color: ${ ({theme})=>theme.color.white };
`;

const Section2Wrapper = styled(SectionContainer)`
    min-height: auto;
    flex-direction: row;
    align-items: stretch;
    padding: 120px;
`;

const BaseContainer = styled(Flex)`
    padding: 0 20px;

    &:first-child{
        padding: 0 20px 0 0;
    }

    &:last-child{
        padding: 0 0 0 20px;
    }
`;

const Col33 = styled(BaseContainer)`
    width: 33%;
    position: relative;
    opacity: 0;
`;

const Col66 = styled(BaseContainer)`
    width: 66%;
    position: relative;
    opacity: 0;
`;

const ColInt = styled(Flex)`
    width: 100%;
    flex-direction: column;
`;

const Paragraph = styled.p`
    ${ ({ theme })=>theme.type.main };
    color: ${ ({ theme })=>theme.color.gray00 };
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 20px;

    &:last-child{
        margin-bottom: 0;
    }
`;

const Row1 = styled(Flex)`
    background-color: ${ ({ theme })=>theme.color.blue46 };
    width: 100%;
`;

const ImageContainer = styled(ResposiveContainer)`
    padding-bottom: 40%;
    overflow: hidden;
`;



const Row2 = styled(Flex)`
    width: 100%;
    padding: 30px 40px;
    background-color: ${ ({ theme })=>theme.color.blue46 };
`;

const Row2Content = styled.h3`
    ${ ({ theme })=>theme.type.main };
    font-size: 32px;
    line-height: 1.2;

    .p1{
        color: ${ ({ theme })=>theme.color.blue00 };
    }
    
    .p2{
        color: ${ ({ theme })=>theme.color.white };
    }
`;

const Row3 = styled(Flex)`
    width: 100%;
    flex-direction: row;
    padding: 20px;
    background-color: ${ ({ theme })=>theme.color.blue77 };
`;

const Logo = styled.div`
    width: 40px;
    height: 40px;
    background-color: ${ ({ theme })=>theme.color.blue28 };
    border: 8px solid ${ ({ theme })=>theme.color.blue46 };
    margin: 0 10px;
`;

const Row3Content = styled.p`
    ${ ({ theme })=>theme.type.main };
    color: ${ ({ theme })=>theme.color.white };
    font-size: 14px;

    a{
        text-decoration: none;
        color: ${ ({ theme })=>theme.color.blue00 };
        font-weight: 600;

        &:hover{
            color: ${ ({ theme })=>theme.color.blue00 };
        }
    }
`

