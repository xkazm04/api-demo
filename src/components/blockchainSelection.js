import {useContext } from "react";
import { Grid, Row, Col, Toggle } from "rsuite";
import styled from "styled-components";
import { BlockchainContext } from "../utils/BlockchainContext";
import { FeatureContext } from "../utils/FeatureContext";
import BlockchainComponent from "./cards/blockchainComponent";
import {CeloIcon, BscIcon, PolygonIcon, SolanaIcon, HarmonyIcon, TronIcon, AlgoIcon, EthIcon, TatumIcon} from './icons/chainIcons'
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
    margin-bottom: 2%;
    font-size: 1.5rem;
`

const Flexbox = styled.div`
  display: flex;
  flex-direction: row;
  height: 2rem;
  max-width: 4rem;
  flex-wrap: wrap;
  margin-top: 2rem;
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
        <Grid fluid>
          <Row className="show-grid">
          <Col xs={24} sm={24} md={6}>
              <BlockchainComponent
                icon={<AlgoIcon/>}
                name={"Alogorand"}
                onClick={() => setMe("ALGO")}
              />
            </Col>
            <Col xs={24} sm={24} md={6}>
              <BlockchainComponent
                icon={<BscIcon/>}
                name={"Bsc"}
                onClick={() => setMe("BSC")}
              />
            </Col>
            <Col xs={24} sm={24} md={6}>
              <BlockchainComponent
                icon={<CeloIcon/>}
                name={"Celo"}
                onClick={() => setMe("CELO")}
              />
            </Col>
            <Col xs={24} sm={24} md={6}>
              <BlockchainComponent
                icon={<EthIcon/>}
                name={"Eth"}
                onClick={() => setMe("ETH")}
              />
            </Col>
          </Row>
          <Row className="show-grid">
          <Col xs={24} sm={24} md={6}>
              <BlockchainComponent
                icon={<HarmonyIcon/>}
                name={"Harmony"}
                onClick={() => setMe("ONE")}
              />
            </Col>
          <Col xs={24} sm={24} md={6}>
              <BlockchainComponent
                icon={<PolygonIcon/>}
                name={"Polygon"}
                onClick={() => setMe("POLYGON")}
              />
              
            </Col>
            <Col xs={24} sm={24} md={6}>
              <BlockchainComponent
                icon={<SolanaIcon/>}
                name={"Solana"}
                onClick={() => setMe("SOL")}
              />
            </Col>

            <Col xs={24} sm={24} md={6}>
              <BlockchainComponent
                icon={<TronIcon/>}
                name={"Tron"}
                onClick={() => setMe("TRON")}
              />
            </Col>
          </Row>
          <Row className="show-grid">
          <Col xs={24} sm={24} md={6}>
              <BlockchainComponent
                icon={<TatumIcon/>}
                name={"KuCoin"}
                onClick={() => setMe("KCC")}
              />
            </Col>
          <Col xs={24} sm={24} md={6}>
              <BlockchainComponent
                icon={<TatumIcon/>}
                name={"Flow"}
                onClick={() => setMe("FLOW")}
              />
              
            </Col>
            <Col xs={24} sm={24} md={6}>
              <BlockchainComponent
                icon={<TatumIcon/>}
                name={"Moonbeam"}
                onClick={() => setMe("Moonbeam")}
              />
            </Col>

            <Col xs={24} sm={24} md={6}>
              <BlockchainComponent
                icon={<TatumIcon/>}
                name={"XDC"}
                onClick={() => setMe("XDC")}
              />
            </Col>
          </Row>
        </Grid>
        <Title> Our test data:</Title>

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
