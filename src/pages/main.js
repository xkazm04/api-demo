import {useState} from 'react';
import {Link} from 'react-router-dom'
import NavCard from '../components/cards/navCard';
import styled from 'styled-components'
import { Grid, Row, Col } from 'rsuite';

const Page = styled.div`
    padding-top: 5%;
`
const Limk = styled(Link)`
text-decoration: none;
&:hover{
text-decoration:none;
}
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
    margin-top: 2%;
`

const DataFlex = styled.div`
    display: flex;
    font-family: Inter;
    margin-top: 3%;
    margin-bottom: 3%;
    width: 100%;

`

const InputBox = styled.div`
    width: 100%;
    margin-right: 3%;
`

const Input = styled.input`
    border: solid 0.2px #4F37FD;
    margin: 2%;
    width: 100%;

background: #FFFFFF;
box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.02), 0px 4px 13px rgba(0, 0, 0, 0.03);
border-radius: 8px;
padding: 2%;
`
const MainPage =()=>{ 
    const [testKey, setTestKey] = useState(localStorage.getItem('testPlaygroundKey'))
    const [mainKey, setMainKey] = useState(localStorage.getItem('mainPlaygroundKey'))


    const handleTestChange = (e) => {
        setTestKey(e.target.value)
        localStorage.setItem('testPlaygroundKey', e.target.value)
    }

    const handleMainChange = (e) => {
        setMainKey(e.target.value)
        localStorage.setItem('mainPlaygroundKey',e.target.value)
    }

    

        return (
            <Page>
                <Kontejner>
                <TryMe>Initialize your test data</TryMe>
                <p><i>Optional - You can pass or change your API key in code editor before any test</i> </p>
                <DataFlex>
                    
            <InputBox><label for='inputOne'>Testnet API Key</label>    <Input type='text' placeholder='Testnet API Key' id='inputOne' value={testKey} onChange={handleTestChange}/></InputBox>
            <InputBox><label for='inputTwo'>Mainnet API Key</label>   <Input type='text' placeholder='Mainnet API Key'  id='inputTwo' value={mainKey} onChange={handleMainChange}/></InputBox>
            </DataFlex>
                    <TryMe>Select playground section</TryMe>
                    <Gridik fluid>
                    <Row gutter={35} className="show-grid">
                              <Col xs={24} sm={12} md={8}>
                            <Limk to='/features'>  <NavCard title={'Fungible token management'} description={'Build your own NFT marketplace'}  iconColor={'#CD1010'}  cat={'marketplace'}/></Limk>
                            </Col>
                            <Col xs={24} sm={12} md={8}>
                           <Limk to='/features'> <NavCard title={'NFT management'} description={'Deploy, mint or burn NFT and track their movement'} iconColor={'#2CCD9A'} cat={'nft'} /></Limk>
                            </Col>
                            <Col xs={24} sm={12} md={8}>
                            <Limk to='/features'>  <NavCard title={'NFT Marketplace'} description={'Build your own NFT marketplace'}  iconColor={'#CD1010'}  cat={'marketplace'}/></Limk>
                            </Col>
    </Row>
                        
                        </Gridik>
                        </Kontejner>
            </Page>
        );

}

export default MainPage;