let TestKey = process.env.REACT_APP_TESTNET_API_KEY
let ProdKey = process.env.REACT_APP_MAINNET_API_KEY

 const ExamplesPolygonNFT = (featId, network) => {
    

if (featId === 'deployNFT') return ( 
`
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' },
// Fill your private key related to your account
    body: JSON.stringify({
        chain: "MATIC",
        name: "My NFT",
        provenance: true,
        publicMint: true,
        symbol: "TTM_SYMBOL",
        fromPrivateKey: "0d6c13fe5fed644dfa02512d4bffde9453dcb48873afb0b0a4c0cebce160c279",
    })};
fetch('https://api-eu1.tatum.io/v3/nft/deploy', requestOptions)
`
)

if (featId === 'mintNFT') return ( 
    `
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}'  },
        body: JSON.stringify({
            chain: "MATIC",
            to: "0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef",
            provenance: true,
            fromPrivateKey: "0d6c13fe5fed644dfa02512d4bffde9453dcb48873afb0b0a4c0cebce160c279"
        })};
    // Adjust path parameters to your needs
    fetch('https://api-eu1.tatum.io/v3/nft/deploy', requestOptions)
    `
    )

if (featId === 'getNFTByAddress') return ( 
`
const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
// Adjust path parameters to your needs
fetch('https://api-eu1.tatum.io/v3/nft/transaction/MATIC/{address}/{tokenAddress}?pageSize=10&offset=0&from=1087623&to=1087823', requestOptions)
`
)

if (featId === 'getNFTByToken') return ( 
    ` 
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
    // Adjust path parameters to your needs
    fetch('https://api-eu1.tatum.io/v3/nft/transaction/tokenId/MATIC/{tokenAddress}/{tokenId}?pageSize=10&offset=0&from=1087623&to=1087823', requestOptions)
    `)

if (featId === 'getNFTTransaction') return ( 
`
const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
// Adjust path parameters to your needs - /:chain /:txHash
fetch('https://api-eu1.tatum.io/v3/nft/transaction/MATIC/0x225b95efd04ad2489d958e69f92f6aa8c64f557890baccf7eabbe96de83ce475', requestOptions)
`
)

if (featId === 'getNFTProvenance') return ( 
    `
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
    // Adjust path parameters to your needs /:chain /:contractAddress /:tokenId
    fetch('https://api-eu1.tatum.io/v3/nft/provenance/MATIC/0x2C64Ba36A418a7291ecD3410Ae4e2258cE36AF72/1', requestOptions)
    `
    )

if (featId === 'getNFTMetadata') return ( 
`
const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
// Adjust path parameters to your needs /:chain /:contractAddress /:tokenId
fetch('https://api-eu1.tatum.io/v3/nft/metadata/MATIC/0x2C64Ba36A418a7291ecD3410Ae4e2258cE36AF72/1', requestOptions)
`
)

if (featId === 'getNFTRoyalty') return ( 
    `
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
    // Adjust path parameters to your needs /:chain /:contractAddress /:tokenId
    fetch('https://api-eu1.tatum.io/v3/nft/royalty/MATIC/0x2C64Ba36A418a7291ecD3410Ae4e2258cE36AF72/1', requestOptions)
    `
)

  return (
    `
        Business logic error - this should not happen, please contact me
`
  );
};


const ExamplesPolygonFungible = (featId, network) => {
    
    
    if (featId === 'deployFungible') return ( 
        `
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' },
    body: JSON.stringify({
        chain: "MATIC",
        symbol: "TTM_Polygon",
        name: "TestnetTatum",
        totalCap: "10000000",
        supply: "10000000",
        digits: 18,
        address: "0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef",
        fromPrivateKey: "0d6c13fe5fed644dfa02512d4bffde9453dcb48873afb0b0a4c0cebce160c279",
        fee: {
            "gasLimit": "200000",
            "gasPrice": "20"
                }
})};
// Adjust path parameters to your needs
fetch('https://api-eu1.tatum.io/v3/blockchain/token/deploy', requestOptions)
        `
        )
    
    
    if (featId === 'mintFungible') return ( 
        `
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' },
    body: JSON.stringify({
        chain: "MATIC",
        amount: "10",
        to: "0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef",
        contractAddress: "0x328adef22f3e6b623035bc06576368a0df361c0d",
        fromPrivateKey: "0d6c13fe5fed644dfa02512d4bffde9453dcb48873afb0b0a4c0cebce160c279",
})};
// Adjust path parameters to your needs
fetch('https://api-eu1.tatum.io/v3/blockchain/token/mint', requestOptions)
        `
    )
    if (featId === 'burnFungible') return ( 
        `
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' },
    body: JSON.stringify({
        chain: "MATIC",
        amount: "10",
        contractAddress: "0x328adef22f3e6b623035bc06576368a0df361c0d",
        fromPrivateKey: "0d6c13fe5fed644dfa02512d4bffde9453dcb48873afb0b0a4c0cebce160c279",
})};
// Adjust path parameters to your needs
fetch('https://api-eu1.tatum.io/v3/blockchain/token/burn', requestOptions)
        `
    )

    if (featId === 'getBalance') return ( 
    `
const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
// Adjust path parameters to your needs - /:chain /:tokenContract /:accountAddress
fetch('https://api-eu1.tatum.io/v3/blockchain/token/balance/MATIC/0x0000000000000000000000000000000000001010/0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef', requestOptions)
    `
    )
    if (featId === 'getTransactions') return ( 
    `
const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
// Adjust path parameters to your needs - /:chain /:accountAddress /:tokenContract ?pagination/sorting
fetch('https://api-eu1.tatum.io/v3/blockchain/token/transaction/MATIC/0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef/0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef?pageSize=10&offset=0&from=1087623&to=1087823&sort=ASC', requestOptions)
    `
    )
      return (
        `
            Business logic error - this should not happen, please contact me
    `
      );
    };


    const ExamplesPolygonMarket = (featId, network) => {
    
    
        if (featId === 'deployMarket') return ( 
            `
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' },
    body: JSON.stringify({
        chain: "MATIC",
        feeRecipient: "0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef",
        marketplaceFee: 150,
        fromPrivateKey: "0x05e150c73f1920ec14caa1e0b6aa09940899678051a78542840c2668ce5080c2",
        fee: {
            gasLimit: "400000",
            gasPrice: "20"
            }
})};
// Adjust path parameters to your needs
fetch('https://api-eu1.tatum.io/v3/blockchain/marketplace/listing', requestOptions)
`
            )
        
        if (featId === 'getTransactions') return ( 
        `
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
    // Adjust path parameters to your needs - /:chain /:accountAddress /:tokenContract ?pagination/sorting
    fetch('https://api-eu1.tatum.io/v3/blockchain/token/transaction/MATIC/0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef/0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef?pageSize=10&offset=0&from=1087623&to=1087823&sort=ASC', requestOptions)
        `
        )
          return (
            `
                Business logic error - this should not happen, please contact me
        `
          );
        };
    

export {ExamplesPolygonFungible, ExamplesPolygonNFT, ExamplesPolygonMarket}