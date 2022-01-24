
import './App.css';
import { Routes, Route , Link} from 'react-router-dom';
import { Nav } from 'rsuite';
// import default style
import 'rsuite/styles/index.less';
import { useState } from 'react';
import styled from 'styled-components'
import Main from './pages/main'
import GetNft from './pages/getNft'
import { BlockchainContext } from "./utils/BlockchainContext";
import { FeatureContext } from "./utils/FeatureContext";
import { MetamaskIcon } from './components/icons/chainIcons';

const Navigation = styled(Nav)`
  padding-top: 3%;
  text-decoration: none;
  width: 100%;
  border-bottom: 0.2px solid grey;
  opacity: 0.5;
  &:hover{
    text-decoration:none;
  }
`

const Logo = styled(Nav.Item)`
 color: #4F37FD;
 position: absolute;
 left: 0;
 margin: 1rem;
`

const Metamask = styled.div`
position: absolute;
opacity: 0.03;
`
const ContentKontejner = styled.div`
min-height: 1500px;
background: linear-gradient(180deg, #F9F8FE 4.17%, #F0EDFF 30.21%, #EEEAFF 56.77%, #FFFFFF 100%);
`

const Limk = styled(Link)`
color: #4F37FD;
margin: 2rem;
  &:hover{
    text-decoration:none;
  }
  &:focus{
    text-decoration:none;
  }
`

function App() {

  const [chain, setChain] =  useState('BSC')
  const [feature, setFeature] =  useState('select feature')
  const [privKey, setPrivKey] = useState(null)
  const [req, setReq] =  useState('code snippet')


  return (
    <div className="App">
         <Logo>{TatumLogo}</Logo>
  <Navigation>

     
      <Limk to={'/'}>Home</Limk>
      <Limk to={'/features'}>Demo</Limk>
  </Navigation>
 <Metamask> <MetamaskIcon/></Metamask>

  <BlockchainContext.Provider value={{ chain, setChain, privKey, setPrivKey }}>
  <FeatureContext.Provider value={{ feature, req, setReq, setFeature }}>
<ContentKontejner>
  <Routes>
    <Route path="test" element={<div>Test</div>} />
        <Route path="/" element={<Main />} />
        <Route path="features" element={<GetNft />} />

      </Routes>
      </ContentKontejner>
      </FeatureContext.Provider>
      </BlockchainContext.Provider>
    </div>
  );
}

const TatumLogo = <svg width="107" height="22" viewBox="0 0 107 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.3162 9.34668H12.4619V21.8091H19.3162V9.34668Z" fill="#4F37FD"/>
<path d="M27.4175 0H14.9551V6.23121H27.4175V0Z" fill="#2CCD9A"/>
<path d="M12.4624 3.11523H0V9.34645H12.4624V3.11523Z" fill="#4F37FD"/>
<path d="M93.3171 6.88386H90.6703V21.7948H93.2007V12.0043H93.3171L98.3391 21.7948H98.4651L103.506 12.0043H103.613V21.7948H106.105V6.88386H103.691L98.5717 17.0073H98.4845L93.3171 6.88386ZM35.9908 21.7948H38.5212V9.06715H45.1331V6.85449H38.5212V9.06715H30.707V11.2798H35.9811L35.9908 21.7948ZM58.0468 6.88386V8.84197H62.807V21.7655H65.3374V8.84197H70.1074V6.88386H58.0468ZM84.0293 18.2996C84.0368 18.4696 84.0104 18.6394 83.9518 18.7989C83.8916 18.957 83.7991 19.1004 83.6803 19.2199C83.5627 19.3454 83.4161 19.4396 83.2537 19.4941C83.0974 19.5594 82.9279 19.5863 82.7593 19.5724H77.2428C77.0743 19.5848 76.9051 19.558 76.7484 19.4941C76.5901 19.4368 76.4474 19.3429 76.3315 19.2199C76.2127 19.1004 76.1202 18.957 76.06 18.7989C76.0014 18.6394 75.975 18.4696 75.9825 18.2996V6.88386H73.4521V18.1723C73.4256 18.6555 73.5001 19.1389 73.6709 19.5911C73.8416 20.0433 74.1047 20.4541 74.4431 20.7967C74.7815 21.1394 75.1876 21.4062 75.6349 21.5799C76.0822 21.7535 76.5607 21.8301 77.0392 21.8046H82.9435C83.4224 21.83 83.9013 21.7534 84.3491 21.5798C84.7968 21.4063 85.2035 21.1396 85.5426 20.7971C85.8818 20.4546 86.1458 20.044 86.3177 19.5918C86.4896 19.1396 86.5654 18.656 86.5403 18.1723V6.88386H84.0293V18.2996ZM52.8988 15.8128H47.9835L50.4072 9.80144H50.4944L52.8988 15.8128ZM51.8324 6.88386H49.2147L43.0778 21.8046H45.55L47.0624 18.0255H53.8004L55.3128 21.8046H57.9499L51.8324 6.88386Z" fill="#1C1E4F"/>
</svg>


export default App;
