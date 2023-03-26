import {React, useContext} from 'react';
import { Outlet, Link} from 'react-router-dom';
import { UserContext } from '../../contexts/user.context.jsx';
import { signOutUser } from '../../utils/firebase/firebase.utils.jsx';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Container, Wrapper, Left, Center, Right, Language, SearchContainer, Input, Logo, MenuItem} from './Navbar.styles.jsx';

const Navbar = () => {
  const {currentUser, setCurrentUser} = useContext(UserContext);
  const signOutHandler = async () =>{
      await signOutUser();
      setCurrentUser(null)
  }
  return (
   <Container>
     <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input />
                <SearchIcon 
                    style={{color: 'gray', 
                    fontSize:16
                    }} 
                />
            </SearchContainer>
        </Left>
        <Center>
          <Link to='/'>
            <Logo>ByDre Store</Logo>
          </Link>
        </Center>
        <Right>
        <Link to= 'register'>
            <MenuItem>REGISTER</MenuItem>
        </Link>

          {
            currentUser ? (
            <Link to= 'sign-in' onClick={signOutHandler}>
                 <MenuItem>SIGN OUT</MenuItem>
            </Link> 
            ) : (
            <Link to= 'sign-in'>
                <MenuItem>SIGN IN</MenuItem>
            </Link> 
            )}


          
            <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
      <Outlet />
    </Container>
  )
}

export default Navbar
