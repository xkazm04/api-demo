import {useContext} from 'react'
import styled from "styled-components";
import { Dropdown } from 'rsuite';
import {FeatureContext} from '../../utils/FeatureContext';
import { BlockchainContext } from '../../utils/BlockchainContext';
import {ExamplesAlgoNFT, ExamplesAlgoFungible} from '../../data/examplesAlgo'

const Kontejner = styled.div`
`;


const MyDropdown = styled(Dropdown)`
    margin-top: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  box-shadow: 0px 4px 7px -2px rgba(16, 24, 40, 0.03),
    0px 6px 15px -4px #F3FFF8;

`


const FeatureAlgo = () => {
    const {feature, setFeature, setReq, category} = useContext(FeatureContext);
    const {testNetwork} = useContext(BlockchainContext)
    const changeFeature = (feature, req)=>{
        setFeature(feature);
        setReq(req);   
    }

  return (
    <Kontejner>
{category === 'marketplace' ? 
<>
<div> No supported features for Algo marketplace</div>
                </> : null }
{category === 'fungible' ? 
<MyDropdown title={feature} size="md">
                    <Dropdown.Item onClick={()=>(changeFeature('Deploy token',ExamplesAlgoFungible('deployFungible',testNetwork)))}>Deploy fungible token</Dropdown.Item>
                </MyDropdown> : null }
{category === 'nft' ? 
<MyDropdown title={feature} size="md">
    <Dropdown.Item onClick={()=>(changeFeature('Deploy NFT',ExamplesAlgoNFT('deployNFT',testNetwork)))}>Mint and NFT</Dropdown.Item>
</MyDropdown> : null }
    </Kontejner>
  );
};

export default FeatureAlgo;
