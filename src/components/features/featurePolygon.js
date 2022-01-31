import {useContext} from 'react'
import styled from "styled-components";
import { Dropdown } from 'rsuite';
import {FeatureContext} from '../../utils/FeatureContext';
import { BlockchainContext } from '../../utils/BlockchainContext';
import {ExamplesPolygonNFT, ExamplesPolygonFungible, ExamplesPolygonMarket} from '../../data/examplesPolygon'

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
                    <Dropdown.Item onClick={()=>(changeFeature('Deploy NFT',ExamplesPolygonNFT('deployNFT',testNetwork)))}>Deploy NFT smart contract</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Mint NFT',ExamplesPolygonNFT('mintNFT',testNetwork)))}>Mint NFT</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Mint NFT express',ExamplesPolygonNFT('mintNFTexpress',testNetwork)))}>Mint NFT Express</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get contract from tx',ExamplesPolygonNFT('getContract', testNetwork)))}>Get contract address from transaction</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get NFT transcations by address',ExamplesPolygonNFT('getNFTByAddress',testNetwork)))}>Get NFT transactions by address</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get NFT transcations by token',ExamplesPolygonNFT('getNFTByToken',testNetwork)))}>Get NFT transactions by token</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get transactions',ExamplesPolygonNFT('getNFTTransaction',testNetwork)))}>Get NFT Transactions</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get NFT provenance', ExamplesPolygonNFT('getNFTProvenance',testNetwork)))}>Get NFT Token Provenance</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get NFT metadata', ExamplesPolygonNFT('getNFTMetadata',testNetwork)))}>Get NFT Token Metadata</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get NFT Royalty', ExamplesPolygonNFT('getNFTRoyalty',testNetwork)))}>Get NFT Token Royalty</Dropdown.Item>
                </MyDropdown> : null }
{category === 'fungible' ? 
<MyDropdown title={feature} size="md">
                    <Dropdown.Item onClick={()=>(changeFeature('Deploy token',ExamplesPolygonFungible('deployFungible',testNetwork)))}>Deploy fungible token</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Mint token',ExamplesPolygonFungible('mintFungible', testNetwork)))}>Mint fungible token</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Burn token',ExamplesPolygonFungible('burnFungible', testNetwork)))}>Burn fungible token</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get contract from tx',ExamplesPolygonFungible('getContract', testNetwork)))}>Get contract address from transaction</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get account transactions',ExamplesPolygonFungible('getTransactions', testNetwork)))}>Get account transactions</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get account balance',ExamplesPolygonFungible('getBalance', testNetwork)))}>Get account balance</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Approve spending', ExamplesPolygonFungible('approveSpending',testNetwork)))}>Approve spending</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Transfer fungible token', ExamplesPolygonFungible('transferFungible',testNetwork)))}>Transfer fungible token</Dropdown.Item>
                </MyDropdown> : null }
{category === 'marketplace' ? 
<MyDropdown title={feature} size="md">
                    <Dropdown.Item onClick={()=>(changeFeature('Deploy NFT Marketplace',ExamplesPolygonMarket('deployMarket',testNetwork)))}>Deploy NFT marketplace</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Sell asset',ExamplesPolygonMarket('marketSell',testNetwork)))}>Sell asset on markeplace</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Buy asset',ExamplesPolygonMarket('marketBuy',testNetwork)))}>Buy asset on marketplace</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Cancel listing',ExamplesPolygonMarket('cancelListing',testNetwork)))}>Cancel listing</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get listings',ExamplesPolygonMarket('getListings',testNetwork)))}>Get listings</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get listing detail',ExamplesPolygonMarket('getListingById',testNetwork)))}>Get listing detail by id</Dropdown.Item>
                </MyDropdown> : null }
    </Kontejner>
  );
};

export default FeatureOne;
