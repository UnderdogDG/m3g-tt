import styled from 'styled-components';

import { SectionContainer, RowContainer, StyledImage, Col33, Col45, Col66, Col100, ResposiveContainer, MainSection } from '../containers';

import { section4 } from '../utils/data/s4';
import imgLeft from '../imgs/img-conectando-l.png';
import imgRight from '../imgs/img-conectando-r.png';

export function Section4(){
    return(
        <Section4Container>
            <Section4Wrapper>
                <RowContainer>
                    <ImageContainer>
                        <ColLeft>
                            <ImageWrapper>
                                <StyledImage src={ imgLeft }/>
                            </ImageWrapper>
                        </ColLeft>
                        <ColRight>
                            <ImageWrapper>
                                <StyledImage src={ imgRight }/>
                            </ImageWrapper>
                        </ColRight>
                    </ImageContainer>
                    <CornerContainer>
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
                        <TitleSection>
                            <span className='top'>
                                { section4.header }
                            </span>
                            <br />
                            <span className='bottom'>
                                { section4.subheader }
                            </span>
                        </TitleSection>
                        <RowContainer>
                            <BodySection>
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