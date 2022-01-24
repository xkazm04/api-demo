import {useContext, useState} from 'react';
import styled from 'styled-components'
import { Dropdown } from 'rsuite';
import {FeatureContext} from '../../utils/FeatureContext';
import { BlockchainContext } from '../../utils/BlockchainContext';

const testnetApiKey = 'be8215a0-7504-40b3-9ae2-6667554b56f8'
const mainnetApiKey = 'be8215a0-7504-40b3-9ae2-6667554b56f8'

const Kontejner = styled.div`
  margin-left: 5%;
  width: 25rem;
  height: 10rem;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  box-shadow: 0px 4px 7px -2px rgba(16, 24, 40, 0.03),
    0px 12px 24px -4px rgba(16, 24, 40, 0.03);
  border-radius: 16px;
`

const MyDropdown = styled(Dropdown)`
    margin-top: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  box-shadow: 0px 4px 7px -2px rgba(16, 24, 40, 0.03),
    0px 6px 15px -4px #F3FFF8;

`


const FeatureSelector =()=>{ 

    const {feature,setReq, setFeature} = useContext(FeatureContext);
    const {chain} = useContext(BlockchainContext)
    const changeFeature = (feature, req)=>{
        setFeature(feature);
        setReq(req);
        console.log('changed context ')    
    }



        return (
            <Kontejner>
                <div>Select feature</div>
                <MyDropdown title={feature} size="md">
                    <Dropdown.Item onClick={()=>(changeFeature('Get metadata','custom req'))}>Get metadata</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(changeFeature('Get contract address from transaction', 
`
axios({
    method: 'get',
    headers: {
    // Testnet API key by default
        'x-api-key': \`${testnetApiKey}\`,
        'Content-Type': 'application/json'},
    // Change blockchain by selection on the left or by replacing the URL
    url: \`https://api-eu1.tatum.io/v3/nft/address/${chain}/0x225b95efd04ad2489d958e69f92f6aa8c64f557890baccf7eabbe96de83ce475 \`, })
     `))} 
                      >
                        Get contract address from transaction</Dropdown.Item>
                    
                    <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                </MyDropdown>
            </Kontejner>
        );

}

export default FeatureSelector;