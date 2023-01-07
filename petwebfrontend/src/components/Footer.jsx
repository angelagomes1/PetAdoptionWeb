import styled from "styled-components"
import {Facebook,Instagram,Twitter,Pinterest,Room,Phone,MailOutline} from '@mui/icons-material';
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection:"column"})}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`; 
const Logo =styled.h1`
    
`;
const Desc =styled.p`
    margin: 20px 0px;
`;
const Socialcontainer =styled.div`
    display: flex;
`;
const SocialIcon =styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color:white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display:"none"})}
`;
const Title=styled.h3`
    margin-bottom: 30px;
`;
const List=styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem=styled.li`
    width: 50%;
    margin-bottom: 10px;
`;
const Right = styled.div`
    flex: 1;
    padding: 20px;
`;
const ContactItem=styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;
const Payment =styled.img`
    width: 50%;
`;
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Purrs&Woofs.</Logo>
            <Desc>A website based meant pets adoption and items purchase. Mainly for animal welfare. </Desc>
            <Socialcontainer>
                <SocialIcon color="3B5999">
                 <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                 <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                 <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                 <Pinterest/>
                </SocialIcon>
            </Socialcontainer>
        </Left>
        <Center>
            <Title>Useful links</Title>
            <List>
                <ListItem>HOME</ListItem>
                <ListItem>ADOPTION SITE</ListItem>
                <ListItem>MY ACCOUNT</ListItem>
                <ListItem>CART</ListItem>
                <ListItem>PET'S COLTHINGS</ListItem>
                <ListItem>FOOD AND TREATS</ListItem>
                <ListItem>TOYS AND ACCESORIES</ListItem>
                <ListItem>WISHLIST</ListItem>
                <ListItem>TERMS</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/>
                Mumbai,Maharastra,India.
            </ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>
              +91 9876543210
            </ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/>
                contact.email@yahoo.com
            </ContactItem>
            <Payment src="assets/paymentimg.jpg"/>
        </Right>
    </Container>
  )
}

export default Footer