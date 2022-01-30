import {useContext} from 'react'
import styled from "styled-components";
import { Dropdown } from 'rsuite';
import {FeatureContext} from '../../utils/FeatureContext';
import { BlockchainContext } from '../../utils/BlockchainContext';


const Kontejner = styled.div`
`;




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
<div> No supported features for Monnbeam yet</div>
                </> : null }
                {category === 'nft' ? 
<>
<div> No supported features for Monnbeam yet</div>
                </> : null }
                {category === 'fungible' ? 
<>
<div> No supported features for Monnbeam yet</div>
                </> : null }

    </Kontejner>
  );
};

export default FeatureAlgo;
