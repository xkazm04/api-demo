import {useContext } from "react";
import { Grid, Row, Col } from "rsuite";
import styled from "styled-components";
import { BlockchainContext } from "../utils/BlockchainContext";
import BlockchainComponent from "./cards/blockchainComponent";
import {CeloIcon, BscIcon, PolygonIcon, SolanaIcon, HarmonyIcon, TronIcon, AlgoIcon, EthIcon} from './icons/chainIcons'


const Kontejner = styled.div`
  text-align: left;
  align-items: flex-start;
  margin: 5%;
  width: 25rem;
  height: 35rem;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  box-shadow: 0px 4px 7px -2px rgba(16, 24, 40, 0.03),
    0px 12px 24px -4px rgba(16, 24, 40, 0.03);
  border-radius: 16px;
`;

const BlockchainBox = styled.div`
  margin: 5%;
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

const Value = styled.div`

  margin-left: 15%;
  font-weight: bold;
  overflow-wrap: break-word;
  word-wrap: break-word;
  max-width: 20rem;
`


const Selector = () => {

  const {chain, setChain, privKey, setPrivKey} = useContext(BlockchainContext)
  
  const setMe = (selectedChain,selectedPrivKey) => {
    setChain(selectedChain)
    setPrivKey(selectedPrivKey)
    console.log("clicked");
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
                onClick={() => setMe("CELO", '0d6c13fe5fed644dfa02512d4bffde9453dcb48873afb0b0a4c0cebce160c279')}
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
                onClick={() => setMe("ONE", '0d6c13fe5fed644dfa02512d4bffde9453dcb48873afb0b0a4c0cebce160c279')}
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
        </Grid>
        <Title> Our test data:</Title>

<Flexbox>
  <div>PrivKey</div>
  <Value>{privKey}</Value>
      </Flexbox>
      <Flexbox>
  <div>Chain</div>
  <Value>{chain}</Value>
    </Flexbox>

      </BlockchainBox>
    </Kontejner>
  );
};

export default Selector;
