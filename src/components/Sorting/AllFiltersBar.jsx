import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Button} from '../Button'
import { Divider } from '@mui/material';

const Wrapper = styled.div`
    height:30px;
    width: 50px;
    /* border: 1px solid black; */
    margin-top: -17px;
    position: fixed;
    margin-right:25px;
`

const TextDiv = styled.div`
    font-size: large;
    font-weight: bolder;
    text-align: left;
    margin-bottom: 0;
    padding-left:70px;
    h4:hover{
        text-decoration: underline;
    }
`
const TextDiv2 = styled.div`
    font-size: small;
    font-weight: bold;
    text-align: left;
    margin-top: 20px;
    padding-left:70px;
    p:hover{
        text-decoration: underline;
    }
`
const TextDiv3 = styled.div`
    font-weight: normal;
    text-align: left;
    margin-top: 0px;
    padding-left:70px;
    p:hover{
        text-decoration: underline;
    }
`
const Logo = styled.div`
    width: 45%;
    height: 60px;
    margin-left:60px;
    margin-top:5%;
    /* border:1px solid black; */
`
const FiltrButton = styled(Button)`
    background-color: rgb(236,236,236);
    padding: 10px 30px;
    /* position:relative; */
    height:100%;
    color:black;
    :hover{
        background-color:black;
        color:white;
    }
`

export default function SwipeableTemporaryDrawer() {
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
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <Logo>
            <img src="https://cdn.mos.cms.futurecdn.net/H95bg4rrACvGwq5V2rtVUk.jpg" alt="" width={"100%"} height={"100%"}/>
        </Logo>
      <List>
        {['All filters', 'Sort', 'Price', 'Material','Category','Suitable for','Size','Features','Suitable for business','Customer rating','Top seller'].map((text, index) => (
          <TextDiv button key={text}>
            <h4>{text}</h4>
            <Divider/>
          </TextDiv>
        ))}
      </List>
      {/* <List style={{marginTop:"-30px"}}>
        {['Tips and inspirations', 'Currently at IKEA', 'Track your order'].map((text, index) => (
          <TextDiv2 button key={text}>
          <p>{text}</p>
        </TextDiv2>
        ))}
      </List>
      <List style={{marginTop:"0px"}}>
        {['IKEA Family', 'IKEA Business', 'IKEA Restaurants'].map((text, index) => (
          <TextDiv3 button key={text}>
          <p>{text}</p>
        </TextDiv3>
        ))}
      </List>
      <List>

      </List> */}
    </Box>
  );

  return (
    <div>
        <React.Fragment key={"right"}>
            {/* <Wrapper>

        {/* <IconButton onClick={toggleDrawer("right", true) }><MenuIcon/></IconButton> */}

            {/* </Wrapper> */} 
            <FiltrButton onClick={toggleDrawer("right", true) } style={{height:"100%"}}>All filters</FiltrButton>
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