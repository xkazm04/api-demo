import {useContext } from "react";
import { Grid, Row, Col, Toggle } from "rsuite";
import styled from "styled-components";
import { BlockchainContext } from "../utils/BlockchainContext";
import { FeatureContext } from "../utils/FeatureContext";
import BlockchainComponent from "./cards/blockchainComponent";
import {CeloIcon, BscIcon, PolygonIcon, SolanaIcon, HarmonyIcon, TronIcon, AlgoIcon, EthIcon, KccIcon , FlowIcon} from './icons/chainIcons'
import {CeloAIcon, BscAIcon, PolygonAIcon, SolanaAIcon, HarmonyAIcon, TronAIcon, AlgoAIcon, EthAIcon, KccAIcon, FlowAIcon} from './icons/chainActiveIcons'
import './support.css'


const Kontejner = styled.div`
  text-align: left;
  align-items: flex-start;
  margin: 5%;
  width: 25rem;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  box-shadow: 0px 4px 7px -2px rgba(16, 24, 40, 0.03),
    0px 12px 24px -4px rgba(16, 24, 40, 0.03);
  border-radius: 16px;
`;

const BlockchainBox = styled.div`
  margin: 2%;
`;

const Title = styled.h3`
    text-align: center;
    margin-top: 5%;
    font-size: 1rem;
`

const Flexbox = styled.div`
  display: flex;
  flex-direction: row;
  height: 2rem;
  max-width: 4rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`

const NetworkFlex = styled.div`
  display: flex;
  flex-direction: row;
`

const Value = styled.div`
  position: absolute;
  margin-left: 1rem;
  font-weight: bold;
  overflow-wrap: break-word;
  word-wrap: break-word;
  max-width: 20rem;
`
const MyToggle= styled(Toggle)`
  margin-left: 7rem;
`

const Selector = () => {
  const {chain, setChain, testNetwork, setNetwork} = useContext(BlockchainContext)
  const {setReq, setFeature} = useContext(FeatureContext)
  
  const toggleNetwork = () => {
    setNetwork(!testNetwork)
    console.log(testNetwork)
  }
  const setMe = (selectedChain) => {
    setChain(selectedChain)
    setReq('')
    setFeature('Select feature')
  };

  return (
    <Kontejner>
      <BlockchainBox>
      <Title>Select blockchain:</Title>
        <Grid fluid>
          <Row className="show-grid">
          <Col xs={24} sm={24} md={6}>
           {chain === 'ALGO' ?  <BlockchainComponent active={'#9899a1'} icon={<AlgoAIcon/>} name={"Algorand"} onClick={() => setMe("ALGO")}/>:
            <BlockchainComponent  icon={<AlgoIcon/>} name={"Algorand"} onClick={() => setMe("ALGO")}/>}  
           </Col>
            <Col xs={24} sm={24} md={6}>
            {chain === 'BSC' ? <BlockchainComponent  active={'#e8b30b'}  icon={<BscAIcon/>} name={"Bsc"} onClick={() => setMe("BSC")} />:
            <BlockchainComponent icon={<BscIcon/>} name={"Bsc"} onClick={() => setMe("BSC")} />}  
            </Col>
            <Col xs={24} sm={24} md={6}>
            {chain === 'CELO' ? <BlockchainComponent active={'#33c97b'} icon={<CeloAIcon/>} name={"Celo"} onClick={() => setMe("CELO")} />:
            <BlockchainComponent icon={<CeloIcon/>} name={"Celo"} onClick={() => setMe("CELO")} />}  
              
            </Col>
            <Col xs={24} sm={24} md={6}>
            {chain === 'ETH' ? <BlockchainComponent  active={'#bbc6ef'} icon={<EthAIcon/>} name={"Eth"} onClick={() => setMe("ETH")} />:
           <BlockchainComponent icon={<EthIcon/>} name={"Ethereum"} onClick={() => setMe("ETH")} />}  
             
            </Col>
          </Row>
          <Row className="show-grid">
          <Col xs={24} sm={24} md={6}>
          {chain === 'ONE' ?<BlockchainComponent active={'#6beac1'} icon={<HarmonyAIcon/>} name={"Harmony"} onClick={() => setMe("ONE")} />:
           <BlockchainComponent icon={<HarmonyIcon/>} name={"Harmony"} onClick={() => setMe("ONE")} />}  
            </Col>
          <Col xs={24} sm={24} md={6}>
          {chain === 'POLYGON' ? <BlockchainComponent active={'#b78de9'} icon={<PolygonAIcon/>} name={"Polygon"} onClick={() => setMe("POLYGON")}/>:
            <BlockchainComponent icon={<PolygonIcon/>} name={"Polygon"} onClick={() => setMe("POLYGON")}/>}          
            </Col>
            <Col xs={24} sm={24} md={6}>
              {chain === 'SOL' ?  <BlockchainComponent active={'#44b0bb'} icon={<SolanaAIcon/>} name={"Solana"} onClick={() => setMe("SOL")} />:
             <BlockchainComponent icon={<SolanaIcon/>} name={"Solana"} onClick={() => setMe("SOL")} />}          
            </Col>

            <Col xs={24} sm={24} md={6}>
            {chain === 'TRON' ? <BlockchainComponent active={'#de0e15'} icon={<TronAIcon/>} name={"Tron"} onClick={() => setMe("TRON")}/>:
              <BlockchainComponent icon={<TronIcon/>} name={"Tron"} onClick={() => setMe("TRON")}/>}
            </Col>
          </Row>
          <Row className="show-grid">
          <Col xs={24} sm={24} md={6}>
          {chain === 'KCS' ?<BlockchainComponent active={'#91cac1'} icon={<KccAIcon/>} name={"KuCoin"} onClick={() => setMe("KCS")} />:
              <BlockchainComponent icon={<KccIcon/>} name={"KuCoin"} onClick={() => setMe("KCS")} />}
            </Col>
          <Col xs={24} sm={24} md={6}>
          {chain === 'FLOW' ?<BlockchainComponent active={'#00e887'} icon={<FlowAIcon/>} name={"Flow"} onClick={() => setMe("FLOW")} />:
              <BlockchainComponent icon={<FlowIcon/>} name={"Flow"} onClick={() => setMe("FLOW")} />}
            </Col>
            {/* <Col xs={24} sm={24} md={6}>
            {chain === 'GLMR' ?<BlockchainComponent active={'#e67dad'} icon={<MoonAIcon/>} name={"Moonbeam"} onClick={() => setMe("GLMR")} />:
              <BlockchainComponent icon={<MoonIcon/>} name={"Moonbeam"} onClick={() => setMe("GLMR")} />}
            </Col>

            <Col xs={24} sm={24} md={6}>
            {chain === 'XDC' ? <BlockchainComponent active={'#f1f1wf1'} icon={<TatumAIcon/>} name={"XDC"} onClick={() => setMe("XDC")} />:
              <BlockchainComponent icon={<TatumIcon/>} name={"XDC"} onClick={() => setMe("XDC")} />}
            </Col> */}
          </Row>
        </Grid>
        <Title>Selected environment:</Title>

  <Flexbox>
  <div>Chain</div>
 <NetworkFlex> <Value>{chain}</Value>  <MyToggle size="md" checkedChildren="Mainnet" unCheckedChildren="Testnet" onChange={toggleNetwork}/> </NetworkFlex>
      </Flexbox>
      <Flexbox>

    </Flexbox>

      </BlockchainBox>
    </Kontejner>
  );
};

export default Selector;
