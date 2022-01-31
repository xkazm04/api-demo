import {useState} from 'react'
import styled from 'styled-components';
import {List, Loader} from 'rsuite'
import { BulbIcon } from '../icons/regularIcons';


const Title = styled.h3`
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 150%;
    color: #4F37FD;
`

const BoxUpload = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5%;
    margin-left: 5%;
    width: 40%;
    min-height: 80vh;
    background: rgba(255, 255, 255, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.6);
    box-sizing: border-box;
    box-shadow: 0px 4px 7px -2px rgba(16, 24, 40, 0.03), 0px 12px 24px -4px rgba(16, 24, 40, 0.03);
    border-radius: 16px;
`

const Input = styled.input`
    border: solid 0.2px #4F37FD;
    margin-top: 2%;
    margin-bottom: 2%;
    width: 100%;

background: #FFFFFF;
box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.02), 0px 4px 13px rgba(0, 0, 0, 0.03);
border-radius: 8px;
padding: 2%;
`

const Button = styled.button`
    background: linear-gradient(98.8deg, #4F37FD 0%, #8B7DF4 100%);
border-radius: 8px;
color: white;
padding: 0.5rem;
`

const DetailBox = styled.div`
    margin-top: 3%;
    margin-bottom: 3%;
    width: 100%;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.02), 0px 4px 13px rgba(0, 0, 0, 0.03);
border-radius: 8px;
`

const ListItem = styled(List.Item)`
    font-weight: medium;
    padding: 0.2rem;
    text-align: left;
    width: 100%;
`

const HashBox = styled.div`
    color: #187600;
    margin-top: 5%;
    font-size: 0.8rem;
    text-align: left;
`

const Label = styled.label`
 color: #391EFF;
`

const Loading = styled.div`
    margin-top: 5%;
`

const Hint = styled.div`
    text-align: left;
    position: relative;
    font-size: 0.8rem;
    font-style: italic;
    margin-top: 20%;
`

const RequiredKey = styled.div`
    color: #a70000;
`

const UploadFile =()=>{ 
    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
    const [uploadResult, setUploadResult] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    let TestKey = localStorage.getItem('testPlaygroundKey')
    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

	const handleSubmission = () => {
		const formData = new FormData();  

		formData.append('file', selectedFile);
        setLoading(true)
		fetch(
			'https://api-eu1.tatum.io/v3/ipfs',
			{
                headers:{'x-api-key': `${TestKey}`},
				method: 'POST',
				body: formData
                
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
                setUploadResult(result)
                setLoading(false)
			})
			.catch((error) => {
				console.error('Error:', error);
                setError(error)
                setLoading(false)
			});
	};

        return (
            <>
            <BoxUpload>
<Title>Upload to IPFS</Title>
{TestKey === undefined ? <RequiredKey><i>Testnet API key required</i></RequiredKey> : null}
{TestKey === '' ? <RequiredKey><i>Testnet API key required</i></RequiredKey> : null}


<Label>
            <Input type="file"
                id="upload" name="ipfsUpload"
                accept="image/png, image/jpeg"
                onChange={changeHandler}></Input>
                </Label>


                        {isFilePicked ? (
                            <DetailBox>
                                <ListItem>Filename: {selectedFile.name}</ListItem>
                                <ListItem>Filetype: {selectedFile.type}</ListItem>
                                <ListItem>Size in bytes: {selectedFile.size}</ListItem>
                                <ListItem>
                                    lastModifiedDate:{' '}
                                    {selectedFile.lastModifiedDate.toLocaleDateString()}
                                </ListItem>
                            </DetailBox>
                        ) : (
                            <DetailBox>Select a file to show details</DetailBox>
                        )}
                                                    <div>
                            <Button onClick={handleSubmission}>Upload to IPFS</Button>
                        </div>
            {uploadResult ? <HashBox>IPFS file uploaded with <b>Hash: {uploadResult.ipfsHash}</b></HashBox> : null}
            {loading ? <Loading>..<Loader/>..</Loading> : null}
            {error ? <>Error occured, check console</> : null}

            {uploadResult ? <Hint><BulbIcon/>Hint: Pass hash into format ipfs://Hash and put this URI as NFT mint property</Hint>: null}
            </BoxUpload>

            </>
        );

}

export default UploadFile;