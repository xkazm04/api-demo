import styled from "styled-components";
import {List} from 'rsuite';

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


const ApiResult = ({ result, error }) => {

  return (
    <Kontejner>
            <Title>Result</Title>
        {error ? <div>{error}</div> : null}
  <MyList>

      {/*  */}
        {result.txId ? ( <> <ListItem>Transaction id: </ListItem> <List.Item>{result.txId}</List.Item> </>) : null}
        {result.transactionHash ? ( <> <ListItem>Transaction hash: </ListItem> <List.Item>{result.transactionHash}</List.Item> </>) : null}
        {result.transactionIndex ? ( <> <ListItem>Transaction ondex: </ListItem> <List.Item>{result.transactionIndex}</List.Item> </>) : null}
          {result.contractAddress ? ( <> <ListItem>Contract address: {result.contractAddress}</ListItem> </> ) : null}
          {result.tokenId ? ( <> <ListItem>Token ID: </ListItem> <List.Item>{result.tokenId}</List.Item> </>) : null}
          {result.from ? ( <> <ListItem>Address from: </ListItem> <List.Item>{result.from}</List.Item> </>) : null}
          {result.to ? ( <> <ListItem>Address to: </ListItem> <List.Item>{result.to}</List.Item> </>) : null}
          {result.value ? ( <> <ListItem>Value: </ListItem> <List.Item>{result.value}</List.Item> </>) : null}
          {result.tokenPrice ? ( <> <ListItem>Token price: </ListItem> <List.Item>{result.tokenPrice}</List.Item> </>) : null}
          {result.blockNumber ? ( <> <ListItem>Block number: </ListItem> <List.Item>{result.blockNumber}</List.Item> </>) : null}
          {result.blockHash ? ( <> <ListItem>Block hash: </ListItem> <List.Item>{result.blockHash}</List.Item> </>) : null}
          {result.status ? ( <> <ListItem>Status: </ListItem> <List.Item>{result.status}</List.Item> </>) : null}
          {result.gas ? ( <> <ListItem>Gas: </ListItem> <List.Item>{result.gas}</List.Item> </>) : null}
          {result.gasPrice ? ( <> <ListItem>Gas price: </ListItem> <List.Item>{result.gasPrice}</List.Item> </>) : null}
          {result.cumulativeGasUsed ? ( <> <ListItem>Cumulative gas used: </ListItem> <List.Item>{result.cumulativeGasUsed}</List.Item> </>) : null}
          {result.gasUsed ? ( <> <ListItem>Gas used: </ListItem> <List.Item>{result.gasUsed}</List.Item> </>) : null}
          {result.provenanceData ? ( <> <ListItem>Provenance data: </ListItem> <List.Item>{result.provenanceData}</List.Item> </>) : null}
          {result.data ? ( <> <ListItem>Data: </ListItem> <List.Item>{result.data}</List.Item> </>) : null}
          {result.input ? ( <> <ListItem>Input: </ListItem> <List.Item>{result.input}</List.Item> </>) : null}
          {result.nonce ? ( <> <ListItem>Nonce: </ListItem> <List.Item>{result.nonce}</List.Item> </>) : null}
           
            </MyList>

    </Kontejner>
  );
};
// addresses, values, logs --- table

export default ApiResult;
