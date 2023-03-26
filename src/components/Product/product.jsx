  import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
  import SearchIcon from '@mui/icons-material/Search';
  import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
  import {Container, Circle, Image, Info, Icon} from './product.styles'


  const Product = ({ item }) => {
    return (
      <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
          <Icon>
            <ShoppingCartOutlinedIcon />
          </Icon>
          <Icon>
            <SearchIcon />
          </Icon>
          <Icon>
            <FavoriteBorderOutlinedIcon  />
          </Icon>
        </Info>
      </Container>
    );
  };
  
  export default Product;