import {useContext} from 'react'
import styled from "styled-components";
import { Dropdown } from 'rsuite';
import {FeatureContext} from '../../utils/FeatureContext';
import { BlockchainContext } from '../../utils/BlockchainContext';
import {ExamplesOneNFT, ExamplesOneFungible, ExamplesOneMarket} from '../../data/examplesOne'

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
                    <Dropdown.Item onClick={()=>(changeFeature('Deploy NFT',ExamplesOneNFT('deployNFT',testNetwork)))}>Deploy NFT smart contract</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Mint NFT',ExamplesOneNFT('mintNFT',testNetwork)))}>Mint NFT</Dropdown.Item>
                    {/* <Dropdown.Item onClick={()=>(changeFeature('Get NFT transcations by address',ExamplesOneNFT('getNFTByAddress',testNetwork)))}>Get NFT transactions by address</Dropdown.Item> */}
                    {/* <Dropdown.Item onClick={()=>(changeFeature('Get NFT transcations by token',ExamplesOneNFT('getNFTByToken',testNetwork)))}>Get NFT transactions by token</Dropdown.Item> */}
                    <Dropdown.Item onClick={()=>(changeFeature('Get transactions',ExamplesOneNFT('getNFTTransaction',testNetwork)))}>Get NFT Transactions</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get NFT provenance', ExamplesOneNFT('getNFTProvenance',testNetwork)))}>Get NFT Token Provenance</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get NFT metadata', ExamplesOneNFT('getNFTMetadata',testNetwork)))}>Get NFT Token Metadata</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get NFT Royalty', ExamplesOneNFT('getNFTRoyalty',testNetwork)))}>Get NFT Token Royalty</Dropdown.Item>
                </MyDropdown> : null }
{category === 'fungible' ? 
<MyDropdown title={feature} size="md">
                    <Dropdown.Item onClick={()=>(changeFeature('Deploy token',ExamplesOneFungible('deployFungible',testNetwork)))}>Deploy fungible token</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Mint token',ExamplesOneFungible('mintFungible', testNetwork)))}>Mint fungible token</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Burn token',ExamplesOneFungible('burnFungible', testNetwork)))}>Burn fungible token</Dropdown.Item>
                    {/* <Dropdown.Item onClick={()=>(changeFeature('Get account transactions',ExamplesOneFungible('getTransactions', testNetwork)))}>Get account transactions</Dropdown.Item> not supported feature */}
                    <Dropdown.Item onClick={()=>(changeFeature('Get account balance',ExamplesOneFungible('getBalance', testNetwork)))}>Get account balance</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Approve spending', ExamplesOneFungible('approveSpending',testNetwork)))}>Approve spending</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Transfer fungible token', ExamplesOneFungible('transferFungible',testNetwork)))}>Transfer fungible token</Dropdown.Item>
                </MyDropdown> : null }
{category === 'marketplace' ? 
<MyDropdown title={feature} size="md">
                    <Dropdown.Item onClick={()=>(changeFeature('Deploy NFT Marketplace',ExamplesOneMarket('deployMarket',testNetwork)))}>Deploy NFT marketplace</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Sell asset',ExamplesOneMarket('marketSell',testNetwork)))}>Sell asset on markeplace</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Buy asset',ExamplesOneMarket('marketBuy',testNetwork)))}>Buy asset on marketplace</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Cancel listing',ExamplesOneMarket('cancelListing',testNetwork)))}>Cancel listing</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get listings',ExamplesOneMarket('getListings',testNetwork)))}>Get listings</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get listing detail',ExamplesOneMarket('getListingById',testNetwork)))}>Get listing detail by id</Dropdown.Item>
                </MyDropdown> : null }
    </Kontejner>
  );
};

export default FeatureOne;
