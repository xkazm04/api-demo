import {useState, useContext} from 'react';
import styled from 'styled-components';
import {FeatureContext} from '../../utils/FeatureContext'



const Card = styled.div`
margin-top: 8%;
display: flex;
flex-direction: column;
align-items: flex-start;
text-align: left;
padding: 24px;
width: 15rem;
height: 15rem;
background: #FFFFFF;
box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.02), 0px 4px 13px rgba(0, 0, 0, 0.03);
border-radius: 8px;
&:hover{
    transition: all 0.2s ease-in-out;
    text-decoration:none;
    box-shadow: 2px 8px 8px rgba(0, 0, 0, 0.04), 0px 8px 26px rgba(0, 0, 0, 0.03);
}

`

const Title = styled.p`
text-decoration: none;
font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 140%;
color: #302F35;
&:hover{

    text-decoration:none;
}
`

const Description = styled.p`
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 140%;
color: #767481;
`

const NavCard =({title, description, iconColor, cat})=>{ 
    const [hover, setHover] = useState(false)
    const {setCategory} = useContext(FeatureContext)
    const icon = <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="5" y="5" width="12" height="12" stroke="#4F37FD" stroke-width="2"/>
<rect x="5" y="23" width="12" height="12" stroke="#4F37FD" stroke-width="2"/>
<rect x="23" y="23" width="12" height="12" stroke="#4F37FD" stroke-width="2"/>
<rect x="23" y="5" width="12" height="12" stroke="#2CCD9A" stroke-width="2"/>
</svg>

const hoverIcon = <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="5" y="5" width="12" height="12" stroke="#4F37FD" stroke-width="2"/>
<rect x="5" y="23" width="12" height="12" stroke="#4F37FD" stroke-width="2"/>
<rect x="23" y="23" width="12" height="12" stroke="#4F37FD" stroke-width="2"/>
<rect x="23" y="5" width="12" height="12" fill={iconColor} stroke={iconColor} stroke-width="2"/>
</svg>



        return (
           <Card
           onMouseEnter={() => setHover(true)}
           onMouseLeave={() => setHover(false)}
           onClick={() => setCategory(cat)}
           >
                        <div>
                                {hover ? <div>{hoverIcon}</div> : <div>{icon}</div>}
                        </div> 
                        <Title>{title}</Title>
                        <Description>{description}</Description>
            </Card>
        );

}




export default NavCard;