let TestKey = localStorage.getItem('testPlaygroundKey')
let ProdKey = localStorage.getItem('mainPlaygroundKey')


 const ExamplesSolNFT = (featId, network) => {
    

if (featId === 'deployNFT') return ( 
`
// https://tatum.io/apidoc.php#operation/NftDeployErc721
const requestOptions = {
    method: 'POST',
// Prefilled API Key from homepage settings, edit if you want to change account or network type
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' },
// Fill your private key related to your account
    body: JSON.stringify({
        "chain": "SOL",
        "symbol": "NFT10",
        "name": "nft10",
        "fromPrivateKey": "3abc79a31093e4cfa4a724e94a44906cbbc3a32e2f75f985a28616676a5dbaf1de8d82a7e1d0561bb0e1b729c7a9b9b1708cf2803ad0ca928a332587ace391ad",
        "url": "ipfs://bafybeihrumg5hfzqj6x47q63azflcpf6nkgcvhzzm6f6nhic2eg6uvozlq/test-356.jpg"
    })};
fetch('https://api-eu1.tatum.io/v3/nft/deploy', requestOptions)
`
)

if (featId === 'mintNFT') return ( 
    `
// https://tatum.io/apidoc.php#operation/NftMintErc721
const requestOptions = {
    method: 'POST',
// Tatum will automatically switch you to tetnet/mainnet based on your filled API key
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}'  },
    body: JSON.stringify({
        "from": "FykfMwA9WNShzPJbbb9DNXsfgDgS3XZzWiFgrVXfWoPJ",
        "chain": "SOL",
        "fromPrivateKey": "3abc79a31093e4cfa4a724e94a44906cbbc3a32e2f75f985a28616676a5dbaf1de8d82a7e1d0561bb0e1b729c7a9b9b1708cf2803ad0ca928a332587ace391ad",
        "to": "FykfMwA9WNShzPJbbb9DNXsfgDgS3XZzWiFgrVXfWoPJ",
        "metadata": {
            "name": "Tatum API",
            "symbol": "TAPI",
            "sellerFeeBasisPoints": 0,
            "uri": "https://www.nba.com/celtics/sites/celtics/files/tatum_27.jpg",
            "creators": [
                {
                    "address": "FykfMwA9WNShzPJbbb9DNXsfgDgS3XZzWiFgrVXfWoPJ",
                    "verified": 1,
                    "share": 100
                }
            ]
        }
    })};
fetch('https://api-eu1.tatum.io/v3/nft/mint', requestOptions)
    `
    )

    if (featId === 'mintNFTexpress') return ( 
        `
const requestOptions = {
    method: 'POST',
// Tatum will automatically switch you to tetnet/mainnet based on your filled API key
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}'  },
    body: JSON.stringify({
        chain: "SOL",
        to: "FykfMwA9WNShzPJbbb9DNXsfgDgS3XZzWiFgrVXfWoPJ",
        url: "ipfs://bafybeidle7gn5jqajxsqxml33rp4grgzuizqbsnpn3uca6s74eatzokqrq",
    })};
// Adjust path parameters to your needs
fetch('https://api-eu1.tatum.io/v3/nft/mint', requestOptions)
        `
        )
if (featId === 'getContract') return ( 
`
const requestOptions = {
    method: 'GET',
// Tatum will automatically switch you to tetnet/mainnet based on your filled API key
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
// Adjust path parameters to your needs /:chain /:txHash 
fetch('https://api-eu1.tatum.io/v3/nft/transaction/SOL/0xab954fee0f4fb179436d4109a0063fcaad4f7e0b5f020b993cecf934364d1e68', requestOptions)
`
)


if (featId === 'getNFTByAddress') return ( 
`
// https://tatum.io/apidoc.php#operation/NftGetTransactionByAddress
const requestOptions = {
    method: 'GET',
// Tatum will automatically switch you to tetnet/mainnet based on your filled API key
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
// Adjust path parameters to your needs /:chain /:accountAddress /:tokenAddress
fetch('https://api-eu1.tatum.io/v3/nft/transaction/SOL/FykfMwA9WNShzPJbbb9DNXsfgDgS3XZzWiFgrVXfWoPJ/0x21346EbE2503aB51aA02D6eb8364c0f0C05B9203?pageSize=10', requestOptions)
`
)

if (featId === 'getNFTByToken') return ( 
    ` 
// https://tatum.io/apidoc.php#operation/NftGetTransactionByAddress
const requestOptions = {
    method: 'GET',
// Tatum will automatically switch you to tetnet/mainnet based on your filled API key
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
// Adjust path parameters to your needs /:chain /:tokenAddress /:tokenId
fetch('https://api-eu1.tatum.io/v3/nft/transaction/tokenId/SOL/0x21346EbE2503aB51aA02D6eb8364c0f0C05B9203/1?pageSize=10', requestOptions)
    `)

if (featId === 'getNFTTransaction') return ( 
`
// https://tatum.io/apidoc.php#operation/NftGetTransactErc721
const requestOptions = {
    method: 'GET',
// Tatum will automatically switch you to tetnet/mainnet based on your filled API key
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
// Adjust path parameters to your needs - /:chain /:txHash
fetch('https://api-eu1.tatum.io/v3/nft/transaction/SOL/0x38e38c20d7af0cea8a14e5a86f8e3fc355fe11ce0a16fc784a6abdb3ea8739e3', requestOptions)
`
)

if (featId === 'getNFTProvenance') return ( 
    `
// https://tatum.io/apidoc.php#operation/NftGetProvenanceDataErc721
const requestOptions = {
    method: 'GET',
// Tatum will automatically switch you to tetnet/mainnet based on your filled API key
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
// Adjust path parameters to your needs /:chain /:contractAddress /:tokenId
fetch('https://api-eu1.tatum.io/v3/nft/provenance/SOL/0x21346EbE2503aB51aA02D6eb8364c0f0C05B9203/1', requestOptions)
    `
    )

if (featId === 'getNFTMetadata') return ( 
`
// https://tatum.io/apidoc.php#operation/NftGetMetadataErc721
const requestOptions = {
    method: 'GET',
// Tatum will automatically switch you to tetnet/mainnet based on your filled API key
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
// Adjust path parameters to your needs /:chain /:contractAddress /:tokenId
fetch('https://api-eu1.tatum.io/v3/nft/metadata/SOL/0x21346EbE2503aB51aA02D6eb8364c0f0C05B9203/1', requestOptions)
`
)

if (featId === 'getNFTRoyalty') return ( 
    `
const requestOptions = {
    method: 'GET',
// Tatum will automatically switch you to tetnet/mainnet based on your filled API key
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
// Adjust path parameters to your needs /:chain /:contractAddress /:tokenId
fetch('https://api-eu1.tatum.io/v3/nft/royalty/SOL/0x21346EbE2503aB51aA02D6eb8364c0f0C05B9203/1', requestOptions)
    `
)

  return (
    `
        Business logic error - this should not happen.
`
  );
};


const ExamplesSolFungible = (featId, network) => {
    
    
    if (featId === 'deployFungible') return ( 
        `
// Tatum will automatically switch you to tetnet/mainnet based on your filled API key
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}},
    body: JSON.stringify({
      chain: "SOL",
      symbol: "erc0412",
      name: "erc0412",
      supply: "100",
      digits: "2",
      fromPrivateKey: "D6JIMQHVSNA2HCA5RKVSZ4BWUVOXA7LO5UQVGN63P5LC6LVP43YYHMPS7DPF2VWA6H476JOTMWJEOZJ6OCY4ZSKJZNVBZ2ANPQB25OY",
})};
fetch('https://api-eu1.tatum.io/v3/blockchain/token/deploy', requestOptions)
        `
        )
    
    
    if (featId === 'mintFungible') return ( 
        `
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' },
    body: JSON.stringify({
        chain: "SOL",
        amount: "1",
        to: "FykfMwA9WNShzPJbbb9DNXsfgDgS3XZzWiFgrVXfWoPJ",
        contractAddress: "0x45871ED5F15203C0ce791eFE5f4B5044833aE10e",
        fromPrivateKey: "0d6c13fe5fed644dfa02512d4bffde9453dcb48873afb0b0a4c0cebce160c279",
})};
fetch('https://api-eu1.tatum.io/v3/blockchain/token/mint', requestOptions)
        `
    )
    if (featId === 'burnFungible') return ( 
        `
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' },
    body: JSON.stringify({
        chain: "SOL",
        amount: "10",
        contractAddress: "0x45871ED5F15203C0ce791eFE5f4B5044833aE10e",
        fromPrivateKey: "0d6c13fe5fed644dfa02512d4bffde9453dcb48873afb0b0a4c0cebce160c279",
})};
fetch('https://api-eu1.tatum.io/v3/blockchain/token/burn', requestOptions)
        `
    )

    if (featId === 'getContract') return ( 
`
const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
// Adjust path parameters to your needs /:chain /:txHash 
fetch('https://api-eu1.tatum.io/v3/nft/transaction/SOL/0xab954fee0f4fb179436d4109a0063fcaad4f7e0b5f020b993cecf934364d1e68', requestOptions)
`
)

    if (featId === 'getBalance') return ( 
    `
const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
// Adjust path parameters to your needs - /:chain /:tokenContract /:accountAddress
fetch('https://api-eu1.tatum.io/v3/blockchain/token/balance/SOL/0x765de816845861e75a25fca122bb6898b8b1282a/FykfMwA9WNShzPJbbb9DNXsfgDgS3XZzWiFgrVXfWoPJ', requestOptions)
    `
    )
    if (featId === 'getTransactions') return ( 
    `
const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
// Adjust path parameters to your needs - /:chain /:accountAddress /:tokenContract ?pagination/sorting
fetch('https://api-eu1.tatum.io/v3/blockchain/token/transaction/SOL/FykfMwA9WNShzPJbbb9DNXsfgDgS3XZzWiFgrVXfWoPJ/FykfMwA9WNShzPJbbb9DNXsfgDgS3XZzWiFgrVXfWoPJ?pageSize=10&offset=0&sort=ASC', requestOptions)
    `
    )
if (featId === 'approveSpending') return ( 
        `
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' },
    body: JSON.stringify({
        chain: "SOL",
        amount: "0.01",
        spender: 'FykfMwA9WNShzPJbbb9DNXsfgDgS3XZzWiFgrVXfWoPJ',
        contractAddress: "0x45871ED5F15203C0ce791eFE5f4B5044833aE10e",
        fromPrivateKey: "0d6c13fe5fed644dfa02512d4bffde9453dcb48873afb0b0a4c0cebce160c279"
})};
fetch('https://api-eu1.tatum.io/v3/blockchain/token/approve', requestOptions)
        `
        )
if (featId === 'transferFungible') return ( 
        `
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' },
    body: JSON.stringify({
        chain: "SOL",
        amount: "0.01",
        to: 'FykfMwA9WNShzPJbbb9DNXsfgDgS3XZzWiFgrVXfWoPJ',
        contractAddress: "0x45871ED5F15203C0ce791eFE5f4B5044833aE10e",
        digits: 18,
        fromPrivateKey: "0d6c13fe5fed644dfa02512d4bffde9453dcb48873afb0b0a4c0cebce160c279"
})};
fetch('https://api-eu1.tatum.io/v3/blockchain/token/transaction', requestOptions)
        `
        )
      return (
        `
Business logic error - this should not happen, please contact me
    `
      );
    };

    

export {ExamplesSolFungible, ExamplesSolNFT}