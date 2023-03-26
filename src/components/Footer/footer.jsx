
  import React from 'react';
  import FacebookIcon from '@mui/icons-material/Facebook';
  import InstagramIcon from '@mui/icons-material/Instagram';
  import TwitterIcon from '@mui/icons-material/Twitter';
  import PinterestIcon from '@mui/icons-material/Pinterest';
  import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
  import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
  import HomeIcon from '@mui/icons-material/Home';

  import { Container, Left, Logo, Desc, SocialContainer, SocialIcon, Center, Title, List, Right, ListItem, ContactItem, Payment } from './footer.styles';





const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>ByDre Store</Logo>
          <Desc>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly believable.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <TwitterIcon />
            </SocialIcon>
            <SocialIcon color="E60023">
              <PinterestIcon />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <HomeIcon style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
          </ContactItem>
          <ContactItem>
            <PhoneInTalkIcon style={{marginRight:"10px"}}/> +234 7062 182 666
          </ContactItem>
          <ContactItem>
            <EmailOutlinedIcon style={{marginRight:"10px"}} /> contact@bydre.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;