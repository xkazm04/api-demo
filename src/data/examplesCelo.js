let TestKey = localStorage.getItem('testPlaygroundKey')
let ProdKey = localStorage.getItem('mainPlaygroundKey')


 const ExamplesCeloNFT = (featId, network) => {
    

if (featId === 'deployNFT') return ( 
`
// https://tatum.io/apidoc.php#operation/NftDeployErc721
const requestOptions = {
    method: 'POST',
// Prefilled API Key from homepage settings, edit if you want to change account or network type
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' },
// Fill your private key related to your account
    body: JSON.stringify({
        chain: "CELO",
        name: "My NFT",
        provenance: true,
        publicMint: true,
        symbol: "TTM_SYMBOL",
        fromPrivateKey: "0d6c13fe5fed644dfa02512d4boneffde9453dcb48873afb0b0a4c0cebce160c279",
        feeCurrency: "CELO"
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
        chain: "CELO",
        to: "0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef",
        contractAddress: "0x21346EbE2503aB51aA02D6eb8364c0f0C05B9203",
        provenance: true,
        fromPrivateKey: "0d6c13fe5fed644dfa02512d4bffde9453dcb48873afb0b0a4c0cebce160c279",
        feeCurrency: "CELO"
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
        chain: "CELO",
        to: "0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef",
        url: "ipfs://bafybeidle7gn5jqajxsqxml33rp4grgzuizqbsnpn3uca6s74eatzokqrq",
        feeCurrency: "CELO"
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
fetch('https://api-eu1.tatum.io/v3/nft/transaction/CELO/0xab954fee0f4fb179436d4109a0063fcaad4f7e0b5f020b993cecf934364d1e68', requestOptions)
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
fetch('https://api-eu1.tatum.io/v3/nft/transaction/CELO/0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef/0x21346EbE2503aB51aA02D6eb8364c0f0C05B9203?pageSize=10', requestOptions)
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
fetch('https://api-eu1.tatum.io/v3/nft/transaction/tokenId/CELO/0x21346EbE2503aB51aA02D6eb8364c0f0C05B9203/1?pageSize=10', requestOptions)
    `)

if (featId === 'getNFTTransaction') return ( 
`
// https://tatum.io/apidoc.php#operation/NftGetTransactErc721
const requestOptions = {
    method: 'GET',
// Tatum will automatically switch you to tetnet/mainnet based on your filled API key
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
// Adjust path parameters to your needs - /:chain /:txHash
fetch('https://api-eu1.tatum.io/v3/nft/transaction/CELO/0x38e38c20d7af0cea8a14e5a86f8e3fc355fe11ce0a16fc784a6abdb3ea8739e3', requestOptions)
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
fetch('https://api-eu1.tatum.io/v3/nft/provenance/CELO/0x21346EbE2503aB51aA02D6eb8364c0f0C05B9203/1', requestOptions)
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
fetch('https://api-eu1.tatum.io/v3/nft/metadata/CELO/0x21346EbE2503aB51aA02D6eb8364c0f0C05B9203/1', requestOptions)
`
)

if (featId === 'getNFTRoyalty') return ( 
    `
const requestOptions = {
    method: 'GET',
// Tatum will automatically switch you to tetnet/mainnet based on your filled API key
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
// Adjust path parameters to your needs /:chain /:contractAddress /:tokenId
fetch('https://api-eu1.tatum.io/v3/nft/royalty/CELO/0x21346EbE2503aB51aA02D6eb8364c0f0C05B9203/1', requestOptions)
    `
)

  return (
    `
        Business logic error - this should not happen.
`
  );
};


const ExamplesCeloFungible = (featId, network) => {
    
    
    if (featId === 'deployFungible') return ( 
        `
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' },
    body: JSON.stringify({
        chain: "CELO",
        symbol: "TTM_Celo",
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
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' },
    body: JSON.stringify({
        chain: "CELO",
        amount: "1",
        to: "0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef",
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
        chain: "CELO",
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
fetch('https://api-eu1.tatum.io/v3/nft/transaction/CELO/0xab954fee0f4fb179436d4109a0063fcaad4f7e0b5f020b993cecf934364d1e68', requestOptions)
`
)

    if (featId === 'getBalance') return ( 
    `
const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
// Adjust path parameters to your needs - /:chain /:tokenContract /:accountAddress
fetch('https://api-eu1.tatum.io/v3/blockchain/token/balance/CELO/0x765de816845861e75a25fca122bb6898b8b1282a/0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef', requestOptions)
    `
    )
    if (featId === 'getTransactions') return ( 
    `
const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
// Adjust path parameters to your needs - /:chain /:accountAddress /:tokenContract ?pagination/sorting
fetch('https://api-eu1.tatum.io/v3/blockchain/token/transaction/CELO/0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef/0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef?pageSize=10&offset=0&sort=ASC', requestOptions)
    `
    )
if (featId === 'approveSpending') return ( 
        `
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' },
    body: JSON.stringify({
        chain: "CELO",
        amount: "0.01",
        spender: '0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef',
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
        chain: "CELO",
        amount: "0.01",
        to: '0xffb28c3c7a1b19380b7e9e5A7Bbe2afF1AA7A5Ef',
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


    const ExamplesCeloMarket = (featId, network) => {
    
    
        if (featId === 'deployMarket') return ( 
            `
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' },
    body: JSON.stringify({
        chain: "CELO",
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
        chain: "CELO",
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
        chain: "CELO",
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
        chain: "CELO",
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
    fetch('https://api-eu1.tatum.io/v3/blockchain/marketplace/listing/CELO/0x45871ED5F15203C0ce791eFE5f4B5044833aE10e/SOLD', requestOptions)
        `)
        if (featId === 'getListingById') return ( 
            `
const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
// Adjust path parameters to your needs - /:chain /:contractAddress /:listingId
    fetch('https://api-eu1.tatum.io/v3/blockchain/marketplace/listing/CELO/0x45871ED5F15203C0ce791eFE5f4B5044833aE10e/listing/1', requestOptions)
            `)
          return (
            `
                Business logic error - this should not happen, please contact me
        `
          );
        };
    

export {ExamplesCeloFungible, ExamplesCeloNFT, ExamplesCeloMarket}