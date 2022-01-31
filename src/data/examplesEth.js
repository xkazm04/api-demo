let TestKey = localStorage.getItem('testPlaygroundKey')
let ProdKey = localStorage.getItem('mainPlaygroundKey')

 const ExamplesEthNFT = (featId, network) => {

if (featId === 'deployNFT') return ( 
`
// https://tatum.io/apidoc.php#operation/NftDeployErc721
const requestOptions = {
    method: 'POST',
// Prefilled API Key from homepage settings, edit if you want to change account or network type
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}',
// If testnet API key applied, choose testnet type - ethereum-ropsten(default)/ethereum-rinkeby
                'x-testnet-type': 'ethereum-ropsten' },
    body: JSON.stringify({
        chain: "ETH",
        name: "My NFT",
        symbol: "TTM_SYMBOL",
        fromPrivateKey: "0d6c13fe5fed644dfa02512d4bffde9453dcb48873afb0b0a4c0cebce160c279",
    })};
fetch('https://api-eu1.tatum.io/v3/nft/deploy', requestOptions)
`
)

if (featId === 'mintNFT') return ( 
    `
//https://tatum.io/apidoc.php#operation/NftMintErc721
const requestOptions = {
    method: 'POST',
// Prefilled API Key from homepage settings, edit if you want to change account or network type
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}',
// If testnet API key applied, choose testnet type - ethereum-ropsten(default)/ethereum-rinkeby
                'x-testnet-type': 'ethereum-ropsten' },
    body: JSON.stringify({
        chain: "ETH",
        to: "0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef",
        fromPrivateKey: "0d6c13fe5fed644dfa02512d4bffde9453dcb48873afb0b0a4c0cebce160c279"
        })};
    fetch('https://api-eu1.tatum.io/v3/nft/deploy', requestOptions)
    `
    )

if (featId === 'getNFTByAddress') return ( 
`
const requestOptions = {
    method: 'GET',
// Prefilled API Key from homepage settings, edit if you want to change account or network type
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}',
// If testnet API key applied, choose testnet type - ethereum-ropsten(default)/ethereum-rinkeby
                'x-testnet-type': 'ethereum-ropsten' },
// Adjust path parameters to your needs /:chain /:accountAddress /:tokenAddress
fetch('https://api-eu1.tatum.io/v3/nft/transaction/ETH/0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c?pageSize=10', requestOptions)
`
)

if (featId === 'getNFTByToken') return ( 
    ` 
    const requestOptions = {
        method: 'GET',
// Prefilled API Key from homepage settings, edit if you want to change account or network type
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}',
// If testnet API key applied, choose testnet type - ethereum-ropsten(default)/ethereum-rinkeby
                'x-testnet-type': 'ethereum-ropsten' },
// Adjust path parameters to your needs /:chain /:tokenAddress /:tokenId
    fetch('https://api-eu1.tatum.io/v3/nft/transaction/tokenId/ETH/0x789c00ed7ddd72a806dbac40df926df32fde3c2f/5?pageSize=10&offset=0', requestOptions)
    `)

if (featId === 'getNFTTransaction') return ( 
`
const requestOptions = {
    method: 'GET',
// Prefilled API Key from homepage settings, edit if you want to change account or network type
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}',
// If testnet API key applied, choose testnet type - ethereum-ropsten(default)/ethereum-rinkeby
                'x-testnet-type': 'ethereum-ropsten' },
// Adjust path parameters to your needs - /:chain /:txHash
fetch('https://api-eu1.tatum.io/v3/nft/transaction/ETH/0x225b95efd04ad2489d958e69f92f6aa8c64f557890baccf7eabbe96de83ce475', requestOptions)
`
)

if (featId === 'getNFTProvenance') return ( 
    `
    const requestOptions = {
        method: 'GET',
// Prefilled API Key from homepage settings, edit if you want to change account or network type
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}',
// If testnet API key applied, choose testnet type - ethereum-ropsten(default)/ethereum-rinkeby
                'x-testnet-type': 'ethereum-ropsten' },
    // Adjust path parameters to your needs /:chain /:contractAddress /:tokenId
    fetch('https://api-eu1.tatum.io/v3/nft/provenance/ETH/0x789c00ed7ddd72a806dbac40df926df32fde3c2f/1', requestOptions)
    `
    )

if (featId === 'getNFTMetadata') return ( 
`
const requestOptions = {
    method: 'GET',
// Prefilled API Key from homepage settings, edit if you want to change account or network type
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}',
// If testnet API key applied, choose testnet type - ethereum-ropsten(default)/ethereum-rinkeby
                'x-testnet-type': 'ethereum-ropsten' },
// Adjust path parameters to your needs /:chain /:contractAddress /:tokenId
fetch('https://api-eu1.tatum.io/v3/nft/metadata/ETH/0x789c00ed7ddd72a806dbac40df926df32fde3c2f/1', requestOptions)
`
)

if (featId === 'getNFTRoyalty') return ( 
    `
    const requestOptions = {
        method: 'GET',
// Prefilled API Key from homepage settings, edit if you want to change account or network type
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}',
// If testnet API key applied, choose testnet type - ethereum-ropsten(default)/ethereum-rinkeby
                'x-testnet-type': 'ethereum-ropsten' },
    // Adjust path parameters to your needs /:chain /:contractAddress /:tokenId
    fetch('https://api-eu1.tatum.io/v3/nft/royalty/ETH/0x789c00ed7ddd72a806dbac40df926df32fde3c2f/1', requestOptions)
    `
)

  return (
    `
        Business logic error - this should not happen, please contact me
`
  );
};



const ExamplesEthFungible = (featId, network) => {
    
    
    if (featId === 'deployFungible') return ( 
        `
const requestOptions = {
    method: 'POST',
// Prefilled API Key from homepage settings, edit if you want to change account or network type
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}',
// If testnet API key applied, choose testnet type - ethereum-ropsten(default)/ethereum-rinkeby
                'x-testnet-type': 'ethereum-ropsten' },
    body: JSON.stringify({
        chain: "ETH",
        symbol: "TTM_ETH",
        name: "TestnetTatum",
        totalCap: "10000000",
        supply: "10",
        digits: 18,
        address: "0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef",
        fromPrivateKey: "0d6c13fe5fed644dfa02512d4bffde9453dcb48873afb0b0a4c0cebce160c279"
})};
fetch('https://api-eu1.tatum.io/v3/blockchain/token/deploy', requestOptions)
        `
        )
    
    
    if (featId === 'mintFungible') return ( 
        `
const requestOptions = {
    method: 'POST',
// Prefilled API Key from homepage settings, edit if you want to change account or network type
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}',
// If testnet API key applied, choose testnet type - ethereum-ropsten(default)/ethereum-rinkeby
                'x-testnet-type': 'ethereum-ropsten' },
    body: JSON.stringify({
        chain: "ETH",
        amount: "1",
        to: "0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef",
        contractAddress: "0x2C64Ba36A418a7291ecD3410Ae4e2258cE36AF72",
        fromPrivateKey: "0d6c13fe5fed644dfa02512d4bffde9453dcb48873afb0b0a4c0cebce160c279",
})};
fetch('https://api-eu1.tatum.io/v3/blockchain/token/mint', requestOptions)
        `
    )
    if (featId === 'burnFungible') return ( 
        `
const requestOptions = {
    method: 'POST',
// Prefilled API Key from homepage settings, edit if you want to change account or network type
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}',
// If testnet API key applied, choose testnet type - ethereum-ropsten(default)/ethereum-rinkeby
                'x-testnet-type': 'ethereum-ropsten' },
    body: JSON.stringify({
        chain: "ETH",
        amount: "10",
        contractAddress: "0x2C64Ba36A418a7291ecD3410Ae4e2258cE36AF72",
        fromPrivateKey: "0d6c13fe5fed644dfa02512d4bffde9453dcb48873afb0b0a4c0cebce160c279",
})};
fetch('https://api-eu1.tatum.io/v3/blockchain/token/burn', requestOptions)
        `
    )

    if (featId === 'getBalance') return ( 
    `
const requestOptions = {
    method: 'GET',
// Prefilled API Key from homepage settings, edit if you want to change account or network type
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}',
// If testnet API key applied, choose testnet type - ethereum-ropsten(default)/ethereum-rinkeby
                'x-testnet-type': 'ethereum-ropsten' },
// Adjust path parameters to your needs - /:chain /:tokenContract /:accountAddress
fetch('https://api-eu1.tatum.io/v3/blockchain/token/balance/ETH/0x2C64Ba36A418a7291ecD3410Ae4e2258cE36AF72/0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef', requestOptions)
    `
    )
    if (featId === 'getTransactions') return ( 
    `
const requestOptions = {
    method: 'GET',
// Prefilled API Key from homepage settings, edit if you want to change account or network type
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}',
// If testnet API key applied, choose testnet type - ethereum-ropsten(default)/ethereum-rinkeby
                'x-testnet-type': 'ethereum-ropsten' },
// Adjust path parameters to your needs - /:chain /:accountAddress /:tokenContract ?pagination/sorting
fetch('https://api-eu1.tatum.io/v3/blockchain/token/transaction/ETH/0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef/0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef?pageSize=10&offset=0&from=1087623&to=1087823&sort=ASC', requestOptions)
    `
    )
if (featId === 'approveSpending') return ( 
        `
const requestOptions = {
    method: 'POST',
// Prefilled API Key from homepage settings, edit if you want to change account or network type
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}',
// If testnet API key applied, choose testnet type - ethereum-ropsten(default)/ethereum-rinkeby
                'x-testnet-type': 'ethereum-ropsten' },
    body: JSON.stringify({
        chain: "ETH",
        amount: "0.01",
        spender: '0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef',
        contractAddress: "0x2C64Ba36A418a7291ecD3410Ae4e2258cE36AF72",
        fromPrivateKey: "0d6c13fe5fed644dfa02512d4bffde9453dcb48873afb0b0a4c0cebce160c279"
})};
fetch('https://api-eu1.tatum.io/v3/blockchain/token/approve', requestOptions)
        `
        )
if (featId === 'transferFungible') return ( 
        `
const requestOptions = {
    method: 'POST',
// Prefilled API Key from homepage settings, edit if you want to change account or network type
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}',
// If testnet API key applied, choose testnet type - ethereum-ropsten(default)/ethereum-rinkeby
                'x-testnet-type': 'ethereum-ropsten' },
    body: JSON.stringify({
        chain: "ETH",
        amount: "0.01",
        to: '0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef',
        contractAddress: "0x2C64Ba36A418a7291ecD3410Ae4e2258cE36AF72",
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


    const ExamplesEthMarket = (featId, network) => {
    
    
        if (featId === 'deployMarket') return ( 
            `
const requestOptions = {
    method: 'POST',
// Prefilled API Key from homepage settings, edit if you want to change account or network type
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}',
// If testnet API key applied, choose testnet type - ethereum-ropsten(default)/ethereum-rinkeby
                'x-testnet-type': 'ethereum-ropsten' },
    body: JSON.stringify({
        chain: "ETH",
        feeRecipient: "0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef",
        marketplaceFee: 1,
        fromPrivateKey: "0d6c13fe5fed644dfa02512d4bffde9453dcb48873afb0b0a4c0cebce160c279",
})};
fetch('https://api-eu1.tatum.io/v3/blockchain/marketplace/listing', requestOptions)
`
            )
        if (featId === 'marketSell') return ( 
            `
const requestOptions = {
    method: 'POST',
// Prefilled API Key from homepage settings, edit if you want to change account or network type
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}',
// If testnet API key applied, choose testnet type - ethereum-ropsten(default)/ethereum-rinkeby
                'x-testnet-type': 'ethereum-ropsten' },
    body: JSON.stringify({
        chain: "ETH",
        contractAddress: "0x687422eEA2cB73B5d3e242bA5456b782919AFc85",
        nftAddress: "0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef",
        seller: "0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef",
        listingId: "1d",
        amount: "1",
        tokenId: "1",
        price: "1",
        isErc721: true,
        fromPrivateKey: "0d6c13fe5fed644dfa02512d4bffde9453dcb48873afb0b0a4c0cebce160c279",
})};
fetch('https://api-eu1.tatum.io/v3/blockchain/marketplace/listing/sell', requestOptions)
`)
        if (featId === 'marketBuy') return ( 
            `
const requestOptions = {
    method: 'POST',
// Prefilled API Key from homepage settings, edit if you want to change account or network type
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}',
// If testnet API key applied, choose testnet type - ethereum-ropsten(default)/ethereum-rinkeby
                'x-testnet-type': 'ethereum-ropsten' },
    body: JSON.stringify({
        chain: "ETH",
        contractAddress: "0x687422eEA2cB73B5d3e242bA5456b782919AFc85",
        listingId: "1d",
        amount: "1",
        isErc721: true,
        fromPrivateKey: "0d6c13fe5fed644dfa02512d4bffde9453dcb48873afb0b0a4c0cebce160c279",
})};
fetch('https://api-eu1.tatum.io/v3/blockchain/marketplace/listing/buy', requestOptions)
`)
        if (featId === 'cancelListing') return ( 
            `
const requestOptions = {
    method: 'POST',
// Prefilled API Key from homepage settings, edit if you want to change account or network type
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}',
// If testnet API key applied, choose testnet type - ethereum-ropsten(default)/ethereum-rinkeby
                'x-testnet-type': 'ethereum-ropsten' },
    body: JSON.stringify({
        chain: "ETH",
        contractAddress: "0x687422eEA2cB73B5d3e242bA5456b782919AFc85",
        listingId: "1d",
        fromPrivateKey: "0d6c13fe5fed644dfa02512d4bffde9453dcb48873afb0b0a4c0cebce160c279",
})};
fetch('https://api-eu1.tatum.io/v3/blockchain/marketplace/listing/cancel', requestOptions)
`)
        
        if (featId === 'getListings') return ( 
        `
const requestOptions = {
    method: 'GET',
// Prefilled API Key from homepage settings, edit if you want to change account or network type
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}',
// If testnet API key applied, choose testnet type - ethereum-ropsten(default)/ethereum-rinkeby
                'x-testnet-type': 'ethereum-ropsten' },
// Adjust path parameters to your needs - /:chain /:contractAddress /:listingType 
    fetch('https://api-eu1.tatum.io/v3/blockchain/marketplace/listing/ETH/0x687422eEA2cB73B5d3e242bA5456b782919AFc85/SOLD', requestOptions)
        `)
        if (featId === 'getListingById') return ( 
            `
const requestOptions = {
    method: 'GET',
// Prefilled API Key from homepage settings, edit if you want to change account or network type
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}',
// If testnet API key applied, choose testnet type - ethereum-ropsten(default)/ethereum-rinkeby
                'x-testnet-type': 'ethereum-ropsten' },
// Adjust path parameters to your needs - /:chain /:contractAddress /:listingId
    fetch('https://api-eu1.tatum.io/v3/blockchain/marketplace/listing/ETH/0x687422eEA2cB73B5d3e242bA5456b782919AFc85/listing/1', requestOptions)
            `)
          return (
            `
                Business logic error - this should not happen, please contact me
        `
          );
        };
    
        
export {ExamplesEthFungible, ExamplesEthNFT, ExamplesEthMarket}