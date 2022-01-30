import {useEffect} from 'react';
import BlockchainSelector from '../components/blockchainSelection';
import FeatureSelector from '../components/features/featureSelection';
import CodeMirror from '../components/mirror/codeMirror';
import styled from 'styled-components';

const Kontejner = styled.div`
    display: flex;
`

const MirrorBox = styled.div`
    margin: 3%;
`


const Features =()=>{ 
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
}, []);
        return (
            <Kontejner>
            <div>
                <BlockchainSelector/>
                <FeatureSelector/>  
                </div>

                <MirrorBox>

                <CodeMirror/>
                </MirrorBox>
            </Kontejner>
        );

}

export default Features;