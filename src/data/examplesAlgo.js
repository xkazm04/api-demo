let TestKey = localStorage.getItem('testPlaygroundKey')
let ProdKey = localStorage.getItem('mainPlaygroundKey')


 const ExamplesAlgoNFT = (featId, network) => {
    

if (featId === 'deployNFT') return ( 
`
// https://tatum.io/apidoc.php#operation/NftDeployErc721
const requestOptions = {
    method: 'POST',
// Prefilled API Key from homepage settings, edit if you want to change account or network type
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' },
// Fill your private key related to your account
    body: JSON.stringify({
        "chain": "ALGO",
        "symbol": "NFT10",
        "name": "nft10",
        "fromPrivateKey": "ZLHV2AGU3Q42QZURSR7XG6P64RQFZ4FLSOBIONV53RNE54AM4LCCPW2Z76PJIW66GGV7WJSJC5XFRV7IBQAFXLHWKYVXESMMYUSOGQI",
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
        chain: "ALGO",
        to: "7MNHZCYM4LCM2THDISAVFVO6OTRANZ4BKITPGZQTHBOVEKM7JRJ6FUMJKY",
        contractAddress: "0x21346EbE2503aB51aA02D6eb8364c0f0C05B9203",
        provenance: true,
        fromPrivateKey: "0d6c13fe5fed644dfa02512d4bffde9453dcb48873afb0b0a4c0cebce160c279"
    })};
// Adjust path parameters to your needs
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
        chain: "ALGO",
        to: "7MNHZCYM4LCM2THDISAVFVO6OTRANZ4BKITPGZQTHBOVEKM7JRJ6FUMJKY",
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
fetch('https://api-eu1.tatum.io/v3/nft/transaction/ALGO/0xab954fee0f4fb179436d4109a0063fcaad4f7e0b5f020b993cecf934364d1e68', requestOptions)
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
fetch('https://api-eu1.tatum.io/v3/nft/transaction/ALGO/7MNHZCYM4LCM2THDISAVFVO6OTRANZ4BKITPGZQTHBOVEKM7JRJ6FUMJKY/0x21346EbE2503aB51aA02D6eb8364c0f0C05B9203?pageSize=10', requestOptions)
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
fetch('https://api-eu1.tatum.io/v3/nft/transaction/tokenId/ALGO/0x21346EbE2503aB51aA02D6eb8364c0f0C05B9203/1?pageSize=10', requestOptions)
    `)

if (featId === 'getNFTTransaction') return ( 
`
// https://tatum.io/apidoc.php#operation/NftGetTransactErc721
const requestOptions = {
    method: 'GET',
// Tatum will automatically switch you to tetnet/mainnet based on your filled API key
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
// Adjust path parameters to your needs - /:chain /:txHash
fetch('https://api-eu1.tatum.io/v3/nft/transaction/ALGO/0x38e38c20d7af0cea8a14e5a86f8e3fc355fe11ce0a16fc784a6abdb3ea8739e3', requestOptions)
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
fetch('https://api-eu1.tatum.io/v3/nft/provenance/ALGO/0x21346EbE2503aB51aA02D6eb8364c0f0C05B9203/1', requestOptions)
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
fetch('https://api-eu1.tatum.io/v3/nft/metadata/ALGO/0x21346EbE2503aB51aA02D6eb8364c0f0C05B9203/1', requestOptions)
`
)

if (featId === 'getNFTRoyalty') return ( 
    `
const requestOptions = {
    method: 'GET',
// Tatum will automatically switch you to tetnet/mainnet based on your filled API key
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
// Adjust path parameters to your needs /:chain /:contractAddress /:tokenId
fetch('https://api-eu1.tatum.io/v3/nft/royalty/ALGO/0x21346EbE2503aB51aA02D6eb8364c0f0C05B9203/1', requestOptions)
    `
)

  return (
    `
        Business logic error - this should not happen.
`
  );
};


const ExamplesAlgoFungible = (featId, network) => {
    
    
    if (featId === 'deployFungible') return ( 
        `
// Tatum will automatically switch you to tetnet/mainnet based on your filled API key
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}},
    body: JSON.stringify({
      chain: "ALGO",
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
        chain: "ALGO",
        amount: "1",
        to: "7MNHZCYM4LCM2THDISAVFVO6OTRANZ4BKITPGZQTHBOVEKM7JRJ6FUMJKY",
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
        chain: "ALGO",
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
fetch('https://api-eu1.tatum.io/v3/nft/transaction/ALGO/0xab954fee0f4fb179436d4109a0063fcaad4f7e0b5f020b993cecf934364d1e68', requestOptions)
`
)

    if (featId === 'getBalance') return ( 
    `
const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
// Adjust path parameters to your needs - /:chain /:tokenContract /:accountAddress
fetch('https://api-eu1.tatum.io/v3/blockchain/token/balance/ALGO/0x765de816845861e75a25fca122bb6898b8b1282a/7MNHZCYM4LCM2THDISAVFVO6OTRANZ4BKITPGZQTHBOVEKM7JRJ6FUMJKY', requestOptions)
    `
    )
    if (featId === 'getTransactions') return ( 
    `
const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
// Adjust path parameters to your needs - /:chain /:accountAddress /:tokenContract ?pagination/sorting
fetch('https://api-eu1.tatum.io/v3/blockchain/token/transaction/ALGO/7MNHZCYM4LCM2THDISAVFVO6OTRANZ4BKITPGZQTHBOVEKM7JRJ6FUMJKY/7MNHZCYM4LCM2THDISAVFVO6OTRANZ4BKITPGZQTHBOVEKM7JRJ6FUMJKY?pageSize=10&offset=0&sort=ASC', requestOptions)
    `
    )
if (featId === 'approveSpending') return ( 
        `
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' },
    body: JSON.stringify({
        chain: "ALGO",
        amount: "0.01",
        spender: '7MNHZCYM4LCM2THDISAVFVO6OTRANZ4BKITPGZQTHBOVEKM7JRJ6FUMJKY',
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
        chain: "ALGO",
        amount: "0.01",
        to: '7MNHZCYM4LCM2THDISAVFVO6OTRANZ4BKITPGZQTHBOVEKM7JRJ6FUMJKY',
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

    

export {ExamplesAlgoFungible, ExamplesAlgoNFT}