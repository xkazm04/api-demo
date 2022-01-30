import styled from "styled-components";
import {List} from 'rsuite';
import Table from 'rc-table';


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

const TableBox = styled.div`
  padding-left: 2rem;
  margin-top: 2%;
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
        {result.transactionIndex ? ( <> <ListItem> <b>Transaction index: </b>{result.transactionIndex}</ListItem> </>) : null}
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
          {/* Tables */}
          {result.metadata ? (<TableBox>Tokens<Table columns={tokensForAddressColumns} data={result.logs}> </Table> </TableBox>) : null}
          {result && result.length > 0 ? (<TableBox> <Table  columns={transactionColumns} data={result}> </Table> </TableBox>) : null}
          {result && result.length > 0 ? (<TableBox> <Table  columns={provenanceColumns} data={result}> </Table> </TableBox>) : null}
          {result && result.length > 0 ? (<TableBox> <Table  columns={royaltyColumns} data={result}> </Table> </TableBox>) : null}
          {result.logs ? (<TableBox>Logs<Table scroll={{ x: 'max-content' }}   columns={logsColumns} data={result.logs}> </Table> </TableBox>) : null}
            </MyList>

    </Kontejner>
  );
};
// addresses, values -> prověřit proti specce, provenance - array

const logsColumns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    width: 100,
  },
  {
    title: 'Index',
    dataIndex: 'logIndex',
    key: 'logIndex',
    width: 50,
  },
  {
    title: 'Topics',
    dataIndex: 'topics',
    key: 'topics',
    width: 500,
  },
];


const tokensForAddressColumns = [
  {
    title: 'Contract address',
    dataIndex: 'contractAddress',
    key: 'contractAddress',
    width: 200,
  },
  {
    title: 'Balances',
    dataIndex: 'balances',
    key: 'balances',
    width: 50,
  },
  {
    title: 'Metadate',
    dataIndex: 'metadata',
    key: 'metadata',
    width: 200,
  },
];

const transactionColumns = [
  {
    title: 'Block number',
    dataIndex: 'blockNumber',
    key: 'blockNumber',
    width: 100,
  },
  {
    title: 'Token ID',
    dataIndex: 'tokenId',
    key: 'tokenId',
    width: 200,
  },
  {
    title: 'Transaction ID',
    dataIndex: 'txId',
    key: 'txId',
    width: 300,
  },
];

const provenanceColumns = [
  {
    title: 'Provenance data',
    dataIndex: 'provenanceData',
    key: 'provenanceData',
    width: 300,
  },
  {
    title: 'Token Price',
    dataIndex: 'tokenPrice',
    key: 'tokenPrice',
    width: 100,
  }
];

const royaltyColumns = [
  {
    title: 'Addresses',
    dataIndex: 'addresses',
    key: 'addresses',
    width: 200,
  },
  {
    title: 'Values',
    dataIndex: 'values',
    key: 'values',
    width: 50,
  }
];




export default ApiResult;
