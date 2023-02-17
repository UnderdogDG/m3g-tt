import styled from 'styled-components';
import { useRef, useEffect, useState } from 'react';
import anime from 'animejs/lib/anime.es';

import { SectionContainer, RowContainer, StyledImage, Col33, Col45, Col66, Col100, ResposiveContainer, MainSection } from '../containers';

import { section4 } from '../utils/data/s4';
import imgLeft from '../imgs/img-conectando-l.png';
import imgRight from '../imgs/img-conectando-r.png';

export function Section4(){
    const container = useRef(null);
    const img1 = useRef(null);
    const img2 = useRef(null);
    const col1 = useRef(null);
    const text = useRef(null);
    const paragraph = useRef(null);
    
    let [ state, setState ] = useState(false);

    const quantity = useRef({ opacity: 0, scale: 1.5, translate: 400 })

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
            img1.current.style.opacity = quantity.current.opacity;
            img2.current.style.opacity = quantity.current.opacity;
            
            img1.current.style.transform = `scale(${ quantity.current.scale }) translateX(${ -quantity.current.translate }px)`;
            img2.current.style.transform = `scale(${ quantity.current.scale }) translateY(${ -quantity.current.translate }px)`;

            col1.current.style.transform = `translateX(${ quantity.current.translate }px)`;
            text.current.style.opacity = quantity.current.opacity;
            text.current.style.transform = `translateY(${ quantity.current.translate }px)`;
            paragraph.current.style.opacity = quantity.current.opacity;
        
            
            /* p1.current.style.transform = `translateY(${ -quantity.current.transform }px)`;
            p2.current.style.transform = `translateX(${ -quantity.current.transform }px)`; */
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
        <Section4Container>
            <Section4Wrapper ref={ container }>
                <RowContainer>
                    <ImageContainer>
                        <ColLeft>
                            <ImageWrapper>
                                <StyledImage ref={img1} src={ imgLeft }/>
                            </ImageWrapper>
                        </ColLeft>
                        <ColRight>
                            <ImageWrapper>
                                <StyledImage ref={img2} src={ imgRight }/>
                            </ImageWrapper>
                        </ColRight>
                    </ImageContainer>
                    <CornerContainer ref={ col1 }>
                        <RowContainer> 
                            <Col33>
                                <QuadContainer />

                            </Col33>
                            <InfoContainer>
                                <InfoRow>
                                    <SobreNosotros>
                                        { section4.corner }
                                    </SobreNosotros>
                                </InfoRow>
                                <InfoRow>
                                    <Serial>
                                        { section4.serial }
                                    </Serial>
                                </InfoRow>
                            </InfoContainer>

                        </RowContainer>
                        <RowContainer>
                            <Index>
                                <span className='left'>0</span>
                                <span className='right'>2</span>
                            </Index>

                        </RowContainer>
                    </CornerContainer>
                </RowContainer>
                <ContentContainer>
                    <ContentWrapper>
                        <TitleSection ref={text}>
                            <span className='top'>
                                { section4.header }
                            </span>
                            <br />
                            <span className='bottom'>
                                { section4.subheader }
                            </span>
                        </TitleSection>
                        <RowContainer>
                            <BodySection ref={paragraph}>
                                { section4.content }
                            </BodySection>
                        </RowContainer>

                    </ContentWrapper>
                </ContentContainer>
            </Section4Wrapper>
        </Section4Container>
    );
};

const Section4Container = styled(MainSection)`
    background-color: ${ ({ theme })=>theme.color.blue77 };
`;

const Section4Wrapper = styled(SectionContainer)`
    min-height: auto;
    background-color: ${ ({ theme })=>theme.color.blue77 };
    padding: 40px 80px;
    position: relative;

    &::before{
        ${ ({ theme })=>theme.border };
        content: "";
        display: block;
        width: 80px;
        height: 40%;
        position: absolute;
        bottom: -8px;
        right: -8px;
        z-index: 0;
    }
`;


const ImageContainer = styled(Col66)`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    position: relative;

    &::before{
        content: "";
        display: block;
        width: calc(100% + 40px);
        height: 25%;
        border: 8px solid ${ ({ theme })=>theme.color.blue28 };
        position: absolute;
        bottom: 40px;
        right: 0;
        
    }
`;

const ColLeft = styled(Col45)`
    margin-bottom: 80px;
`;

const ColRight = styled(Col45)`
    margin-top: 80px;
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    position: relative;
`;

const CornerContainer = styled(Col33)`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 20px;
`;

const QuadContainer = styled(ResposiveContainer)`

    &::before{
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border: 8px solid ${ ({ theme })=>theme.color.blue28 };
        box-sizing: border-box;
    }
`;

const InfoContainer = styled(Col66)`
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 20px;
    position: relative;
`;

const InfoRow = styled(RowContainer)`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const SobreNosotros = styled.h2`
    ${ ({ theme })=>theme.type.main };
    color: ${ ({ theme })=>theme.color.white };
    margin-bottom: 10px;
    letter-spacing: 0.2em;
`;

const Serial = styled.p`
    ${ ({ theme })=>theme.type.main };
    color: ${ ({ theme })=>theme.color.blue28 };
`;

const Index = styled.h3`
    ${ ({ theme })=>theme.type.main };
    font-weight: 600;
    font-size: 150px;

    .left{
        color: ${ ({ theme })=>theme.color.blue46 };
    }
    .right{
        color: ${ ({ theme })=>theme.color.blue28 };
    }
`;

const ContentContainer = styled(RowContainer)`
    flex-wrap: wrap;
    margin: 60px 0 20px;
    
`;

const ContentWrapper = styled(RowContainer)`
    flex-wrap: wrap;
    max-width: 900px;
    position: relative;
`;

const TitleSection = styled.h2`
    ${ ({ theme })=>theme.type.main };
    font-size: 80px;
    font-weight: 600;
    text-align: center;
    line-height: 0.7em;
    margin-bottom: 40px;
    display: inline-block;
    position: relative;

    .top{
        display: inline-block;
        color: ${ ({ theme })=>theme.color.blue28 };
        font-size: 80px;
        margin: 0;
    }

    .bottom{
        display: inline-block;
        color: ${ ({ theme })=>theme.color.blue46 };
        font-size: 50px;
        margin: 0;
    }

`;

const BodySection = styled.p`
    ${ ({ theme })=>theme.type.main };
    font-size: 18px;
    text-align: center;
`;