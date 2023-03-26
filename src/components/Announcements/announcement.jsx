import React from 'react';
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '../Announcements/announcement.styles';

const Announcement = () => {
  return ( 
    <Fragment>
     <Container>
          Mega Sales! Free shipping and free Unisex Accessories on every order above $200. HURRY!!!
      </Container>
       <Outlet />
  </Fragment>
  );
};

export default Announcement;
