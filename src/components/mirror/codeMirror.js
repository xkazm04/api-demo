import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

import {useContext, useState} from 'react';
import styled from 'styled-components'
import {FeatureContext} from '../../utils/FeatureContext';
import { oneDark } from '@codemirror/theme-one-dark';
import ResultList from './apiResult'
import { BlockchainContext } from '../../utils/BlockchainContext';
import IconButton from 'rsuite/IconButton';

const Kontejner = styled.div`
  width: 60vw;
  height: 65vh;
  padding: 1%;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  box-shadow: 0px 4px 7px -2px rgba(16, 24, 40, 0.03),
    0px 12px 24px -4px rgba(16, 24, 40, 0.03);
  border-radius: 16px;
  text-align: left;
`

const Title = styled.h3`
    text-align: center;
    margin-bottom: 2%;
`
const PlayButton = styled(IconButton)`
    border: 1px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  box-shadow: 0px 4px 7px -2px rgba(16, 24, 40, 0.03),
    0px 6px 15px -4px #F3FFF8;

`

const Mirror =()=>{ 
    const {feature, req, setReq} = useContext(FeatureContext);
    const {chain} = useContext(BlockchainContext)
    const [result, setResult] = useState('nothing')
    const [error, setError] = useState(null) 
    


    const play =  () => {
       const res = Function(req)
       res()
       console.log(res)
    }

        return (
            <Kontejner>
              <Title>  {feature}</Title>
            <CodeMirror
                    value={req}
                    height="50vh"
                    width='59vw'
                    theme={oneDark}
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value) => {
                        setReq(value)
            }}
            />
            <PlayButton icon={TatumIcon} onClick={play} >Run me</PlayButton>

     {result ? <ResultList result={result} error={error}/> : null} 
            </Kontejner>
        );

}

const TatumIcon = <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.3162 9.34668H12.4619V21.8091H19.3162V9.34668Z" fill="#4F37FD"/>
<path d="M27.4175 0H14.9551V6.23121H27.4175V0Z" fill="#2CCD9A"/>
<path d="M12.4624 3.11523H0V9.34645H12.4624V3.11523Z" fill="#4F37FD"/>
</svg>


export default Mirror;