import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Kontejner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding: 5%;
    margin-top: 3%;
    height: 15rem;
    width: 100%;
    background: rgba(255, 255, 255, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.6);
    box-sizing: border-box;
    box-shadow: 0px 4px 7px -2px rgba(16, 24, 40, 0.03), 0px 12px 24px -4px rgba(16, 24, 40, 0.03);
    border-radius: 16px;

`

const Ul = styled.ul`
    margin-top: 5%;
`

const HintComponent =()=>{ 


        return (
            <Kontejner>
             <i>Pssst! Heard you might want to help with creating your first NFT </i>
             <Ul>
                 <p>1. Create free <a href='https://dashboard.tatum.io' target="noopener">Tatum account</a></p>
                 <p>2. Generate <a href='https://www.youtube.com/watch?v=h4l7Q3u3SEI' target="noopener">Tatum mainnet API key</a> </p>
                 <p>3. Store image to <Link to='/storage'>IPFS</Link> </p>
                 <p>4. Deploy NFT smart contract <Link to='/features'>no code</Link> and mint</p>
             </Ul>


            </Kontejner>
        );

}

export default HintComponent;