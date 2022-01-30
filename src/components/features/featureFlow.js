import {useContext} from 'react'
import styled from "styled-components";
import { Dropdown } from 'rsuite';
import {FeatureContext} from '../../utils/FeatureContext';
import { BlockchainContext } from '../../utils/BlockchainContext';
import {ExamplesFlowNFT} from '../../data/examplesFlow'

const Kontejner = styled.div`
`;


const MyDropdown = styled(Dropdown)`
    margin-top: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  box-shadow: 0px 4px 7px -2px rgba(16, 24, 40, 0.03),
    0px 6px 15px -4px #F3FFF8;

`

const FeatureOne = () => {
    const {feature, setFeature, setReq, category} = useContext(FeatureContext);
    const {testNetwork} = useContext(BlockchainContext)
    const changeFeature = (feature, req)=>{
        setFeature(feature);
        setReq(req);   
    }

  return (
    <Kontejner>
{category === 'nft' ? 
<MyDropdown title={feature} size="md">
                    <Dropdown.Item onClick={()=>(changeFeature('Deploy NFT',ExamplesFlowNFT('deployNFT',testNetwork)))}>Deploy NFT smart contract</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Mint NFT',ExamplesFlowNFT('mintNFT',testNetwork)))}>Mint NFT</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get contract from tx',ExamplesFlowNFT('getContract', testNetwork)))}>Get contract address from transaction</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get transactions',ExamplesFlowNFT('getNFTTransaction',testNetwork)))}>Get NFT Transactions</Dropdown.Item>
                </MyDropdown> : null }
{category === 'fungible' ? 
<>
<div> No supported fungible token features for Flow yet</div>
                </> : null }
{category === 'marketplace' ? 
<>
<div> No supported marketplace features for Flow yet</div>
                </> : null }
    </Kontejner>
  );
};

export default FeatureOne;
