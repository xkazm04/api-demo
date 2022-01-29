let TestKey = process.env.REACT_APP_TESTNET_API_KEY
let ProdKey = process.env.REACT_APP_MAINNET_API_KEY

 const ExamplesOneNFT = (featId, network) => {
    

if (featId === 'deployNFT') return ( 
`
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' },
// Fill your private key related to your account
    body: JSON.stringify({
        chain: "ONE",
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
            chain: "ONE",
            to: "one1l7egc0r6rvvnszm7ned8h032lud20f00sdz499",
            contractAddress: "0x21346EbE2503aB51aA02D6eb8364c0f0C05B9203",
            provenance: true,
            fromPrivateKey: "0d6c13fe5fed644dfa02512d4bffde9453dcb48873afb0b0a4c0cebce160c279"
        })};
    // Adjust path parameters to your needs
    fetch('https://api-eu1.tatum.io/v3/nft/mint', requestOptions)
    `
    )

if (featId === 'getNFTByAddress') return ( 
`
const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
// Adjust path parameters to your needs /:chain /:accountAddress /:tokenAddress
fetch('https://api-eu1.tatum.io/v3/nft/transaction/ONE/one1l7egc0r6rvvnszm7ned8h032lud20f00sdz499/0x21346EbE2503aB51aA02D6eb8364c0f0C05B9203?pageSize=10', requestOptions)
`
)

if (featId === 'getNFTByToken') return ( 
    ` 
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
    // Adjust path parameters to your needs /:chain /:tokenAddress /:tokenId
    fetch('https://api-eu1.tatum.io/v3/nft/transaction/tokenId/ONE/0x21346EbE2503aB51aA02D6eb8364c0f0C05B9203/1?pageSize=10', requestOptions)
    `)

if (featId === 'getNFTTransaction') return ( 
`
const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
// Adjust path parameters to your needs - /:chain /:txHash
fetch('https://api-eu1.tatum.io/v3/nft/transaction/ONE/0x38e38c20d7af0cea8a14e5a86f8e3fc355fe11ce0a16fc784a6abdb3ea8739e3', requestOptions)
`
)

if (featId === 'getNFTProvenance') return ( 
    `
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
    // Adjust path parameters to your needs /:chain /:contractAddress /:tokenId
    fetch('https://api-eu1.tatum.io/v3/nft/provenance/ONE/0x21346EbE2503aB51aA02D6eb8364c0f0C05B9203/1', requestOptions)
    `
    )

if (featId === 'getNFTMetadata') return ( 
`
const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
// Adjust path parameters to your needs /:chain /:contractAddress /:tokenId
fetch('https://api-eu1.tatum.io/v3/nft/metadata/ONE/0x21346EbE2503aB51aA02D6eb8364c0f0C05B9203/1', requestOptions)
`
)

if (featId === 'getNFTRoyalty') return ( 
    `
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
    // Adjust path parameters to your needs /:chain /:contractAddress /:tokenId
    fetch('https://api-eu1.tatum.io/v3/nft/royalty/ONE/0x21346EbE2503aB51aA02D6eb8364c0f0C05B9203/1', requestOptions)
    `
)

  return (
    `
        Business logic error - this should not happen, please contact me
`
  );
};


const ExamplesOneFungible = (featId, network) => {
    
    
    if (featId === 'deployFungible') return ( 
        `
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' },
    body: JSON.stringify({
        chain: "ONE",
        symbol: "TTM_One",
        name: "TestnetTatum",
        totalCap: "10000000",
        supply: "10",
        digits: 18,
        address: "one1l7egc0r6rvvnszm7ned8h032lud20f00sdz499",
        fromPrivateKey: "0d6c13fe5fed644dfa02512d4bffde9453dcb48873afb0b0a4c0cebce160c279"
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
        chain: "ONE",
        amount: "1",
        to: "one1l7egc0r6rvvnszm7ned8h032lud20f00sdz499",
        contractAddress: "one1ycnazmwdylwmdn6zxst4d2nvt2xxew25y2zr3x",
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
        chain: "ONE",
        amount: "10",
        contractAddress: "one1ycnazmwdylwmdn6zxst4d2nvt2xxew25y2zr3x",
        fromPrivateKey: "0d6c13fe5fed644dfa02512d4bffde9453dcb48873afb0b0a4c0cebce160c279",
})};
fetch('https://api-eu1.tatum.io/v3/blockchain/token/burn', requestOptions)
        `
    )

    if (featId === 'getBalance') return ( 
    `
const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
// Adjust path parameters to your needs - /:chain /:tokenContract /:accountAddress
fetch('https://api-eu1.tatum.io/v3/blockchain/token/balance/ONE/one1ycnazmwdylwmdn6zxst4d2nvt2xxew25y2zr3x/0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef', requestOptions)
    `
    )
    if (featId === 'getTransactions') return ( 
    `
const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
// Adjust path parameters to your needs - /:chain /:accountAddress /:tokenContract ?pagination/sorting
fetch('https://api-eu1.tatum.io/v3/blockchain/token/transaction/ONE/0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef/0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef?pageSize=10&offset=0&from=1087623&to=1087823&sort=ASC', requestOptions)
    `
    )
if (featId === 'approveSpending') return ( 
        `
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' },
    body: JSON.stringify({
        chain: "ONE",
        amount: "0.01",
        spender: '0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef',
        contractAddress: "one1ycnazmwdylwmdn6zxst4d2nvt2xxew25y2zr3x",
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
        chain: "ONE",
        amount: "0.01",
        to: '0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef',
        contractAddress: "one1ycnazmwdylwmdn6zxst4d2nvt2xxew25y2zr3x",
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


    const ExamplesOneMarket = (featId, network) => {
    
    
        if (featId === 'deployMarket') return ( 
            `
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' },
    body: JSON.stringify({
        chain: "ONE",
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
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' },
    body: JSON.stringify({
        chain: "ONE",
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
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' },
    body: JSON.stringify({
        chain: "ONE",
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
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' },
    body: JSON.stringify({
        chain: "ONE",
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
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
// Adjust path parameters to your needs - /:chain /:contractAddress /:listingType 
    fetch('https://api-eu1.tatum.io/v3/blockchain/marketplace/listing/ONE/one1dp6z9m4zedemt5lzg2a9g44hs2ge4ly95l3p53/SOLD', requestOptions)
        `)
        if (featId === 'getListingById') return ( 
            `
const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
// Adjust path parameters to your needs - /:chain /:contractAddress /:listingId
    fetch('https://api-eu1.tatum.io/v3/blockchain/marketplace/listing/ONE/one1dp6z9m4zedemt5lzg2a9g44hs2ge4ly95l3p53/listing/1', requestOptions)
            `)
          return (
            `
                Business logic error - this should not happen, please contact me
        `
          );
        };
    

export {ExamplesOneFungible, ExamplesOneNFT, ExamplesOneMarket}