import React from 'react';
import { Outlet} from "react-router-dom";
import './InstractorBody.css';
import Header from './Header';
import Footer from './footer';

function InstractorBody() {

  return (
   <>
      <Header/>
        <Outlet /> 
      <Footer/>
   </>
  );
}

export default InstractorBody;