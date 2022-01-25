

    export const CodeSnippetsBSC = {
        first: 
            `
        try {
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify({ title: 'React POST Request Example' })
            };
            fetch('https://reqres.in/api/posts', requestOptions)
                .then(response => response.json())
    
        } catch (e) {
            console.error(e.message);
    
        }
    
    ` , getNFTByAddress:             `
    try {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'x-api-key': 'REPLACE_KEY_VALUE' },
            body: JSON.stringify({
                blockNumber: 6541235,
                txId: "0x955c1037608c7aecb6d1a3f150ce7d0a80536bcabb0deb69d62f55292cc4c372",
                contractAddress: "0x4f54fAD27F7F46C102Cd49b8E75C5593397cd9c3",
                tokenId: "1",
                from: "0x780c3de0aba1b51f04cfe8a5d9d277d4ad032b8d",
                to: "0x8cb76aed9c5e336ef961265c6079c14e9cd3d2ea"
                })
        };
        fetch('https://api-eu1.tatum.io/v3/nft/transaction/{chain}/{address}/{tokenAddress}?pageSize=10&offset=0&from=1087623&to=1087823', requestOptions)
            .then(response => response.json())

    } catch (e) {
        console.error(e.message);

    }

`,
        getNFTByToken:  `
        try {
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'x-api-key': 'REPLACE_KEY_VALUE' },
            };
            fetch('https://api-eu1.tatum.io/v3/nft/transaction/tokenId/{chain}/{tokenAddress}/{tokenId}?pageSize=10&offset=0&from=1087623&to=1087823', requestOptions)
                .then(response => response.json())
    
        } catch (e) {
            console.error(e.message);
    
        }
    
    `,
        getNFTTransactions: `
        try {
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'x-api-key': 'REPLACE_KEY_VALUE' }
            };
            fetch('https://api-eu1.tatum.io/v3/nft/transaction/{chain}/{hash}', requestOptions)
                .then(response => response.json())
    
        } catch (e) {
            console.error(e.message);
    
        }
    `,
        getNFTProvenance: `
        try {
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'x-api-key': 'REPLACE_KEY_VALUE' }
            };
            fetch('https://api-eu1.tatum.io/v3/nft/provenance/{chain}/{contractAddress}/{tokenId}', requestOptions)
                .then(response => response.json())
    
        } catch (e) {
            console.error(e.message);
    
        }
    `,
        getNFTMetadata: `
        try {
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'x-api-key': 'REPLACE_KEY_VALUE' }
            };
            fetch('https://api-eu1.tatum.io/v3/nft/metadata/{chain}/{contractAddress}/{token}?account=0xc1b45bc27b9c61c3', requestOptions)
                .then(response => response.json())
    
        } catch (e) {
            console.error(e.message);
    
        }
    `,
        getNFTRoyalty: `
        try {
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'x-api-key': 'REPLACE_KEY_VALUE' }
            };
            fetch('https://api-eu1.tatum.io/v3/nft/royalty/{chain}/{contractAddress}/{token}', requestOptions)
                .then(response => response.json())
    
        } catch (e) {
            console.error(e.message);
    
        }
    `
    
     }