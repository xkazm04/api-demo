export const CodeSnippetsBSC = {
    first: 
        `
    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('https://reqres.in/api/posts', requestOptions)
            .then(response => response.json())

    } catch (e) {
        console.error(e.message);

    }

` , getNFTByAddress: '',
    getNFTByToken: '',
    getNFTTransactions: '',
    getNFTProvenance: '',
    getNFTMetadata: '',
    getNFTRoyalty: ''

    }

    export const CodeSnippetsETH = {
        first: 
            `
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: 'React POST Request Example' })
            };
            fetch('https://reqres.in/api/posts', requestOptions)
                .then(response => response.json())
    
        } catch (e) {
            console.error(e.message);
    
        }
    
    ` , getNFTByAddress: 'eth address',
        getNFTByToken: '',
        getNFTTransactions: '',
        getNFTProvenance: '',
        getNFTMetadata: '',
        getNFTRoyalty: ''
    
     }