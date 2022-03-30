import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import styled from "styled-components"



const TextDiv3 = styled.div`
    font-weight: normal;
    text-align: left;
    margin-top: 0px;
    padding-left:50px;
    p:hover{
        text-decoration: underline;
    }
`
const LoginDiv = styled.div`
    background-color: rgb(0,88,163);
    display: flex;
    padding-top:15%;
    height:100px;
    color: white;
    border-bottom: 1px solid rgb(48,118,178);
    h1{
        margin-top: 8%;
        padding-left: 50px;
        padding-right: 60%;
    }
`
const Button = styled.button`
    display: inline-block;
    color: #000;
    padding: 0.75rem 1.25rem 0.75rem 1.25rem;
    height:40px;
    margin-top: 8%;
    border-radius: 20px;
    border: 0 transparent;
    font-size: .75rem;
    font-weight: 700;
    line-height: 1.5;
    background-color: #fff;
`
const FamilyDiv = styled.div`
    background-color: rgb(0,88,163);
    margin-top: -4.5%;
    height: 100px;
    padding-left: 50px;
    border-bottom: 1px solid rgb(48,118,178);
    padding-bottom:3%;
    h4{
        color:white;
        padding-top:15px;
    }
    p{
        font-size:small;
        margin-top:-3%;
        word-spacing: 1.5px;
        letter-spacing: 1px;
        color:white;
    }
    p:hover{
        text-decoration: underline;
    }
`
const RightSideBar = () => {
  const [state, setState] = React.useState({

    right: false,
    
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 500 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <LoginDiv>
        <h1>Hej,</h1>
        <Button>Login</Button>
      </LoginDiv>
      <Divider style={{color:"rgb(48,118,178)"}}/>
    <FamilyDiv>
        <h4>Join IKEA Family</h4>
        <p>
        Get access to a number of member benefits. Enjoy <br /> guaranteed discounts, free workshops, exclusive previews <br /> and a lot more when you join. Its free!
        </p>
    </FamilyDiv>
      <Divider style={{color:"rgb(48,118,178)"}}/>
      <FamilyDiv>
        <h4>Join IKEA Business Network</h4>
        <p>
        Get easy access to services, offers and benefits to <br />help your business needs. Together, we can help your<br /> business to grow. It's free!
        </p>
    </FamilyDiv>
      <List>
        {['Purchase History', 'Shopping List', 'Planners'].map((text, index) => (
          <TextDiv3 button key={text}>
           <p>{text}</p>
          </TextDiv3>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
        <React.Fragment key={"right"}>

        <IconButton onClick={toggleDrawer("right", true) } style={{marginTop:"5px"}}><PersonOutlineIcon style={{color:"black"}}/></IconButton>
           
          <SwipeableDrawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            onOpen={toggleDrawer("right", true)}
          >
            {list("right")}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}


export default RightSideBar