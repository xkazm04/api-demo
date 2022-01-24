import React from 'react';
import styled from 'styled-components'
import { Button } from 'rsuite';

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
    font-weight: bold;
`

const ActionButton = styled(Button)`
    border: 1px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  box-shadow: 0px 4px 7px -2px rgba(16, 24, 40, 0.03),
    0px 6px 15px -4px #F3FFF8;
    background: transparent;
    width: 5rem;
    height: 6rem;

    position: absolute;
    &:hover{
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.6);
    box-sizing: border-box;
    box-shadow: 4px 10px 7px -2px rgba(16, 24, 40, 0.03),
        2px 18px 25px -8px #F3FFF8;
    }
    &:focus{
        background: transparent;
    }
    &:active{
        background: transparent;
    }
`

const Icon = styled.div`
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 1rem;
    border-radius: 50%;
    &:hover{
        transition: all 0.2s ease-in-out;
        background: linear-gradient(180deg, #F9F8FE 4.17%, #F0EDFF 30.21%, #EEEAFF 56.77%, #FFFFFF 100%);
        cursor: pointer;
    }
`



const BlockchainComponent =({icon, name, onClick})=>{ 



        return (
            <Kontejner>
            
                                <Title>{name}</Title>
                <Icon onClick={onClick}>{icon}</Icon>

                <ActionButton  onClick={onClick}></ActionButton>
            </Kontejner>
        );

}

export default BlockchainComponent;