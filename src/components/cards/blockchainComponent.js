import React from 'react';
import styled from 'styled-components'

const Kontejner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: center;
    align-items: center;
    
`

const Title = styled.div`
    justify-content: center;
    text-align: center;
    margin: 5%;
    font-size: 1rem;
    padding: 0.3rem;
    border-radius: 15px;
    font-weight: bold;
    background: ${props => props.active || 'transparent'};
    width: 100%;
`
const Icon = styled.div`
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: 0.1rem;
    padding-top: 0.7rem;
    border-radius: 50%;
    &:hover{
        transition: all 0.2s ease-in-out;
        background: linear-gradient(180deg, #F9F8FE 4.17%, #F0EDFF 30.21%, #EEEAFF 56.77%, #FFFFFF 100%);
        cursor: pointer;
    }
`



const BlockchainComponent =({icon, name, onClick, active})=>{ 



        return (
            <Kontejner>
            
                <Title  active={active}>{name}</Title>
                <Icon onClick={onClick}>{icon}</Icon>

            </Kontejner>
        );

}

export default BlockchainComponent;