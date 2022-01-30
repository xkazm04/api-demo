# Tatum API playground

Created to demonstrate and revalidate current Tatum services. Powered by npx-create-react-app

![Tatum playground](/assets/playground.png)

## Description
Postman-like tool enables to edit API request and run against Tatum server. 
In comparison with Postman provides novice-friendly GUI and set of prefilled templates for dozens of services

## Services
- Token management (Mint, Burn, Transfer Fungible tokens (Erc20, Bep20, etc..))
- NFT management (Mint, Burn, Transfer and Get details about NFTs)
- IPFS services (Store image to IPFS for free, Display IPFS image)
- Marketplace & Auctions (Services to build your own NFT marketplace with auction mechanisms) - TBD 2/2022

## Supported chains
- Algorand (Deploy token only)
- Full featured EVM compatible chains: Binance Smart Chain, Celo, Ethereum, Harmony (ONE), Polygon, Kucoin
- Solana (Mint NFT only)
- Flow (Mint NFT only)


## Dependencies
1. Node version 16.x.x+ (if installed locally)
2. Tatum API key required (Create for free testnet/mainnet account on https://dashboard.tatum.io/login)

## Demo playground
Available at https://wonderful-mclean-65bab6.netlify.app
### Run application locally

1. Clone repository
2. `npm install`/`yarn` - install all dependencies
3. `npm start`/`yarn start` - start your local environment on http://localhost:3000

## Roadmap (2/2022)
* [ ] Add supported chains by Tatum: Tron, Moonbeam
* [ ] Add marketplace/auction features to playground
* [ ] Add wallet authentication for supported chains



