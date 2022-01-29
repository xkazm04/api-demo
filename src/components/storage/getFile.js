import {useState} from 'react'
import styled from 'styled-components';
import {Loader} from 'rsuite'


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
    font-size: 12px;

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
margin-top: 3%;
`

const PhotoBox = styled.div`
    margin-top: 5%;
`

const Loading = styled.div`
    margin-top: 5%;
`

const Frame = styled.div`
border: solid 0.5px #e8e8e8;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.02), 0px 4px 13px rgba(0, 0, 0, 0.03);
border-radius: 8px;
` 



const UploadFile =()=>{ 

    const [photo, setPhoto] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [formInput, setFormInput] = useState('')

    const changeHandler = (event) => {
		setFormInput(event.target.value);
	};

	const handleGet = () => {
        setLoading(true)
		fetch(
			`https://api-eu1.tatum.io/v3/ipfs/${formInput}`,
			{
                headers:{'x-api-key': '0e5b8956-110d-4406-9c07-c24135e7389c_100'},
				method: 'GET'
			}
		)
			.then((response) => response.blob())
			.then((blob) => {
                const result = URL.createObjectURL(blob);
				console.log('Success:');
                setPhoto(result)
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
            <Title>Get IPFS image</Title>
            <Input type="input"
                value={formInput} placeholder="insert ipfs hash"
                onChange={changeHandler}></Input>
                <Button onClick={handleGet}>Get Image</Button>
                {loading ? <Loading>..<Loader/>..</Loading> : null}
            {error ? <>Error occured, check console</> : null}
                <PhotoBox>
                    {photo ? <Frame><img src={photo}  width="auto" height="200"></img></Frame> : null}
                    </PhotoBox> 
            </BoxUpload>
            </>
        );

}

export default UploadFile;