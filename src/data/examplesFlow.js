let TestKey = localStorage.getItem('testPlaygroundKey')
let ProdKey = localStorage.getItem('mainPlaygroundKey')


 const ExamplesFlowNFT = (featId, network) => {
    

if (featId === 'deployNFT') return ( 
`
// https://tatum.io/apidoc.php#operation/NftDeployErc721
const requestOptions = {
    method: 'POST',
// Prefilled API Key from homepage settings, edit if you want to change account or network type
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' },
// Fill your private key related to your account
    body: JSON.stringify({
        chain: "FLOW",
        account: "0xbb6bf7afc73a820b",
        privateKey: "45ffe682dd0e0236c66176b5a5c111c8890432c992fb02a41170b02c34ca6a39"
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
        chain: "FLOW",
        account: "0xbb6bf7afc73a820b",
        to: "0xbb6bf7afc73a820b",
        privateKey: "45ffe682dd0e0236c66176b5a5c111c8890432c992fb02a41170b02c34ca6a39",
        contractAddress: "17a50dad-bcb1-4f3d-ae2c-ea2bfb04419f",
        url: "ipfs://bafybeidle7gn5jqajxsqxml33rp4grgzuizqbsnpn3uca6s74eatzokqrq",
    })};
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
fetch('https://api-eu1.tatum.io/v3/nft/transaction/FLOW/0xab954fee0f4fb179436d4109a0063fcaad4f7e0b5f020b993cecf934364d1e68', requestOptions)
`
)

if (featId === 'getNFTTransaction') return ( 
`
// https://tatum.io/apidoc.php#operation/NftGetTransactErc721
const requestOptions = {
    method: 'GET',
// Tatum will automatically switch you to tetnet/mainnet based on your filled API key
    headers: { 'Content-Type': 'application/json', 'x-api-key': '${network === true ? TestKey : ProdKey}' }}
// Adjust path parameters to your needs - /:chain /:txHash
fetch('https://api-eu1.tatum.io/v3/nft/transaction/FLOW/0x38e38c20d7af0cea8a14e5a86f8e3fc355fe11ce0a16fc784a6abdb3ea8739e3', requestOptions)
`
)

  return (
    `
        Business logic error - this should not happen.
`
  );
};



export {ExamplesFlowNFT}