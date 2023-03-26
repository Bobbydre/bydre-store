import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import {Container, Title, Desc, InputContainer, Input, Button} from './newsletter.styles'

    const Newsletter = () => {
        return (
          <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates from your favorite products.</Desc>
            <InputContainer>
              <Input placeholder="Your email" />
              <Button >
                <SendIcon />
              </Button>
            </InputContainer>
          </Container>
        );
      };
      
      export default Newsletter;
