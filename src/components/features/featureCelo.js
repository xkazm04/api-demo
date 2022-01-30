import {useContext} from 'react'
import styled from "styled-components";
import { Dropdown } from 'rsuite';
import {FeatureContext} from '../../utils/FeatureContext';
import { BlockchainContext } from '../../utils/BlockchainContext';
import {ExamplesCeloNFT, ExamplesCeloFungible, ExamplesCeloMarket} from '../../data/examplesCelo'

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
                    <Dropdown.Item onClick={()=>(changeFeature('Deploy NFT',ExamplesCeloNFT('deployNFT',testNetwork)))}>Deploy NFT smart contract</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Mint NFT',ExamplesCeloNFT('mintNFT',testNetwork)))}>Mint NFT</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Mint NFT express',ExamplesCeloNFT('mintNFTexpress',testNetwork)))}>Mint NFT Express</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get contract from tx',ExamplesCeloNFT('getContract', testNetwork)))}>Get contract address from transaction</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get NFT transcations by address',ExamplesCeloNFT('getNFTByAddress',testNetwork)))}>Get NFT transactions by address</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get NFT transcations by token',ExamplesCeloNFT('getNFTByToken',testNetwork)))}>Get NFT transactions by token</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get transactions',ExamplesCeloNFT('getNFTTransaction',testNetwork)))}>Get NFT Transactions</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get NFT provenance', ExamplesCeloNFT('getNFTProvenance',testNetwork)))}>Get NFT Token Provenance</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get NFT metadata', ExamplesCeloNFT('getNFTMetadata',testNetwork)))}>Get NFT Token Metadata</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get NFT Royalty', ExamplesCeloNFT('getNFTRoyalty',testNetwork)))}>Get NFT Token Royalty</Dropdown.Item>
                </MyDropdown> : null }
{category === 'fungible' ? 
<MyDropdown title={feature} size="md">
                    <Dropdown.Item onClick={()=>(changeFeature('Deploy token',ExamplesCeloFungible('deployFungible',testNetwork)))}>Deploy fungible token</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Mint token',ExamplesCeloFungible('mintFungible', testNetwork)))}>Mint fungible token</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Burn token',ExamplesCeloFungible('burnFungible', testNetwork)))}>Burn fungible token</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get contract from tx',ExamplesCeloFungible('getContract', testNetwork)))}>Get contract address from transaction</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get account transactions',ExamplesCeloFungible('getTransactions', testNetwork)))}>Get account transactions</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get account balance',ExamplesCeloFungible('getBalance', testNetwork)))}>Get account balance</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Approve spending', ExamplesCeloFungible('approveSpending',testNetwork)))}>Approve spending</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Transfer fungible token', ExamplesCeloFungible('transferFungible',testNetwork)))}>Transfer fungible token</Dropdown.Item>
                </MyDropdown> : null }
{category === 'marketplace' ? 
<MyDropdown title={feature} size="md">
                    <Dropdown.Item onClick={()=>(changeFeature('Deploy NFT Marketplace',ExamplesCeloMarket('deployMarket',testNetwork)))}>Deploy NFT marketplace</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Sell asset',ExamplesCeloMarket('marketSell',testNetwork)))}>Sell asset on markeplace</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Buy asset',ExamplesCeloMarket('marketBuy',testNetwork)))}>Buy asset on marketplace</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Cancel listing',ExamplesCeloMarket('cancelListing',testNetwork)))}>Cancel listing</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get listings',ExamplesCeloMarket('getListings',testNetwork)))}>Get listings</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get listing detail',ExamplesCeloMarket('getListingById',testNetwork)))}>Get listing detail by id</Dropdown.Item>
                </MyDropdown> : null }
    </Kontejner>
  );
};

export default FeatureOne;
