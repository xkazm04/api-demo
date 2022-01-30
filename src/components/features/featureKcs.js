import {useContext} from 'react'
import styled from "styled-components";
import { Dropdown } from 'rsuite';
import {FeatureContext} from '../../utils/FeatureContext';
import { BlockchainContext } from '../../utils/BlockchainContext';
import {ExamplesKcsNFT, ExamplesKcsFungible} from '../../data/examplesKcs'

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
                    <Dropdown.Item onClick={()=>(changeFeature('Mint NFT',ExamplesKcsNFT('mintNFT',testNetwork)))}>Mint NFT</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Mint NFT express',ExamplesKcsNFT('mintNFTexpress',testNetwork)))}>Mint NFT Express</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get contract from tx',ExamplesKcsNFT('getContract', testNetwork)))}>Get contract address from transaction</Dropdown.Item>
                    {/* <Dropdown.Item onClick={()=>(changeFeature('Get NFT transcations by address',ExamplesKcsNFT('getNFTByAddress',testNetwork)))}>Get NFT transactions by address</Dropdown.Item> */}
                    {/* <Dropdown.Item onClick={()=>(changeFeature('Get NFT transcations by token',ExamplesKcsNFT('getNFTByToken',testNetwork)))}>Get NFT transactions by token</Dropdown.Item> */}
                    <Dropdown.Item onClick={()=>(changeFeature('Get transactions',ExamplesKcsNFT('getNFTTransaction',testNetwork)))}>Get NFT Transactions</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get NFT provenance', ExamplesKcsNFT('getNFTProvenance',testNetwork)))}>Get NFT Token Provenance</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get NFT metadata', ExamplesKcsNFT('getNFTMetadata',testNetwork)))}>Get NFT Token Metadata</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get NFT Royalty', ExamplesKcsNFT('getNFTRoyalty',testNetwork)))}>Get NFT Token Royalty</Dropdown.Item>
                </MyDropdown> : null }
{category === 'fungible' ? 
<MyDropdown title={feature} size="md">
                    <Dropdown.Item onClick={()=>(changeFeature('Deploy token',ExamplesKcsFungible('deployFungible',testNetwork)))}>Deploy fungible token</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Mint token',ExamplesKcsFungible('mintFungible', testNetwork)))}>Mint fungible token</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Burn token',ExamplesKcsFungible('burnFungible', testNetwork)))}>Burn fungible token</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get contract from tx',ExamplesKcsFungible('getContract', testNetwork)))}>Get contract address from transaction</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get account transactions',ExamplesKcsFungible('getTransactions', testNetwork)))}>Get account transactions</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get account balance',ExamplesKcsFungible('getBalance', testNetwork)))}>Get account balance</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Approve spending', ExamplesKcsFungible('approveSpending',testNetwork)))}>Approve spending</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Transfer fungible token', ExamplesKcsFungible('transferFungible',testNetwork)))}>Transfer fungible token</Dropdown.Item>
                </MyDropdown> : null }
    </Kontejner>
  );
};

export default FeatureOne;
