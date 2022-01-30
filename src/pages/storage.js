import {useEffect} from 'react'
import styled from 'styled-components';
import UploadFile from '../components/storage/uploadFile';
import GetFile from '../components/storage/getFile';
const Kontejner = styled.div`
    padding: 2%; 
    display: flex;
`

const Storage =()=>{ 

    useEffect(() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
    }, []);
    


    


        return (
            <Kontejner>
                    <UploadFile/>
                    <GetFile/>
            </Kontejner>
        );

}

export default Storage;