import styled from "styled-components";
import {List, Panel} from 'rsuite';

const Kontejner = styled.div`
  margin-top: 5%;
  padding: 1%;
  max-width:  60rem;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  box-shadow: 0px 4px 7px -2px rgba(16, 24, 40, 0.03),
    0px 12px 24px -4px rgba(16, 24, 40, 0.03);
  border-radius: 16px;
`;

const ListItem = styled(List.Item)`
    font-weight: medium;
    padding-left: 1rem;
    padding-top: 2px;
`

const MyList = styled(List)`
    max-width:  60rem;
`

const Title = styled.h3`
    text-align: center;
    margin-bottom: 2%;
`


const ResultComponent = ({ result, error }) => {

  return (
    <Kontejner>
            <Title>Result</Title>
        {error ? <div>{error}</div> : null}
  <MyList>

      {/*  */}
          {result.xpub ? ( <>
              <ListItem>xpub: </ListItem>
              
                <List.Item>{result.xpub}</List.Item>
            </>
          ) : null}

         {result.contractAddress ? ( <>
                <ListItem>Contract address: {result.contractAddress}</ListItem>
            </>
          ) : null}

           
            </MyList>

    </Kontejner>
  );
};

export default ResultComponent;
