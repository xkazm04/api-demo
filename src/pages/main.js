import React from 'react';
import NavCard from '../components/cards/navCard';
import styled from 'styled-components'
import { Grid, Row, Col } from 'rsuite';

const Page = styled.div`
    padding-top: 5%;
`

const Kontejner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5%;
    margin-left: 5%;
    width: 80%;
    min-height: 80vh;
    background: rgba(255, 255, 255, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.6);
    box-sizing: border-box;
    box-shadow: 0px 4px 7px -2px rgba(16, 24, 40, 0.03), 0px 12px 24px -4px rgba(16, 24, 40, 0.03);
    border-radius: 16px;
`

const TryMe = styled.h3`
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 150%;
    color: #4F37FD;

`
const Gridik = styled(Grid)`
    margin-top: 5%;
`
const Blank =()=>{ 

        return (
            <Page>
                <Kontejner>
                    <TryMe>Select playground section</TryMe>
                    <Gridik fluid>
                    <Row gutter={50} className="show-grid">
                            <Col xs={24} sm={12} md={6}>
                            <NavCard title={'NFT Supply'} description={'Deploy, mint or burn NFT'} iconColor={'#2CCD9A'} link={'/'} />
                            </Col>
                            <Col xs={24} sm={12} md={6}>
                            <NavCard title={'Transfer NFT'} description={'Transfer NFT from one address to another'}  iconColor={'#0EE8F5'} link={'/getNFt'}/>
                            </Col>
                            <Col xs={24} sm={12} md={6}>
                            <NavCard title={'Get NFT transactions'} description={'Get NFT transactions by address, token'}  iconColor={'#CD1010'}/>
                            </Col>
                            <Col xs={24} sm={12} md={6}>
                            <NavCard title={'Get NFT Token'} description={'Get NFT Token Provenance, Metadata, Royalty info'}  iconColor={'#EFFF31'}/>
                            </Col>
    </Row>
                        
                        </Gridik>
                        </Kontejner>
            </Page>
        );

}

export default Blank;