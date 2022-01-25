import {useContext} from 'react'
import styled from "styled-components";
import { Dropdown } from 'rsuite';
import {FeatureContext} from '../../utils/FeatureContext';
import {CodeSnippetsAPI} from '../../data/examplesBsc'

const Kontejner = styled.div`
`;


const MyDropdown = styled(Dropdown)`
    margin-top: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  box-shadow: 0px 4px 7px -2px rgba(16, 24, 40, 0.03),
    0px 6px 15px -4px #F3FFF8;

`


const FeatureBsc = (method) => {
    const {feature, setFeature, setReq} = useContext(FeatureContext);
    const changeFeature = (feature, req)=>{
        setFeature(feature);
        setReq(req);   
    }

  return (
    <Kontejner>

<MyDropdown title={feature} size="md">
                    <Dropdown.Item onClick={()=>(changeFeature('Get NFT transcations by address',CodeSnippetsAPI.getNFTByAddress))}>Get NFT transactions by address</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get NFT transcations by token',CodeSnippetsAPI.getNFTByToken))}>Get NFT transactions by token</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get Transactions',CodeSnippetsAPI.getNFTTransactions))}>Get NFT Transactions</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get contract address from transaction', CodeSnippetsAPI.getNFTProvenance))}>Get NFT Token Provenance</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get contract address from transaction', CodeSnippetsAPI.getNFTMetadata))}>Get NFT Token Metadata</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get contract address from transaction', CodeSnippetsAPI.getNFTRoyalty))}>Get NFT Token Royalty</Dropdown.Item>
                </MyDropdown>
    </Kontejner>
  );
};

export default FeatureBsc;
