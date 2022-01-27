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
    padding-left: 2rem;
    padding-top: 1px;
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
        {result.txId ? ( <> <ListItem> <b>Transaction id: </b>{result.txId}</ListItem> </>) : null}
        {result.transactionHash ? ( <> <ListItem> <b>Transaction hash: </b>{result.transactionHash}</ListItem> </>) : null}
        {result.transactionIndex ? ( <> <ListItem> <b>Transaction ondex: </b>{result.transactionIndex}</ListItem> </>) : null}
          {result.contractAddress ? ( <> <ListItem> <b>Contract address:  </b>{result.contractAddress}</ListItem> </> ) : null}
          {result.tokenId ? ( <> <ListItem> <b>Token ID: </b>{result.tokenId}</ListItem> </>) : null}
          {result.from ? ( <> <ListItem> <b>Address from: </b>{result.from}</ListItem> </>) : null}
          {result.to ? ( <> <ListItem> <b>Address to: </b>{result.to}</ListItem> </>) : null}
          {result.value ? ( <> <ListItem> <b>Value: </b>{result.value}</ListItem> </>) : null}
          {result.tokenPrice ? ( <> <ListItem> <b>Token price: </b>{result.tokenPrice}</ListItem> </>) : null}
          {result.blockNumber ? ( <> <ListItem> <b>Block number: </b>{result.blockNumber}</ListItem> </>) : null}
          {result.blockHash ? ( <> <ListItem> <b>Block hash: </b>{result.blockHash}</ListItem> </>) : null}
          {result.status ? ( <> <ListItem> <b>Status: </b>{result.status}</ListItem> </>) : null}
          {result.gas ? ( <> <ListItem> <b>Gas: </b>{result.gas}</ListItem> </>) : null}
          {result.gasPrice ? ( <> <ListItem> <b>Gas price: </b>{result.gasPrice}</ListItem> </>) : null}
          {result.cumulativeGasUsed ? ( <> <ListItem> <b>Cumulative gas used: </b>{result.cumulativeGasUsed}</ListItem> </>) : null}
          {result.gasUsed ? ( <> <ListItem> <b>Gas used: </b>{result.gasUsed}</ListItem> </>) : null}
          {result.provenanceData ? ( <> <ListItem> <b>Provenance data: </b>{result.provenanceData}</ListItem> </>) : null}
          {result.data ? ( <> <ListItem> <b>Data: </b>{result.data}</ListItem> </>) : null}
          {result.input ? ( <> <ListItem> <b>Input: </b>{result.input}</ListItem> </>) : null}
          {result.nonce ? ( <> <ListItem> <b>Nonce: </b>{result.nonce}</ListItem> </>) : null}
          {result.message ? ( <> <ListItem> <b>Error message: </b>{result.message}</ListItem> </>) : null}

          {result.balance ? ( <> <ListItem> <b>Token balance: </b>{result.balance}</ListItem> </>) : null}
           
            </MyList>

    </Kontejner>
  );
};
// addresses, values, logs --- table, provenance - array

export default ApiResult;
