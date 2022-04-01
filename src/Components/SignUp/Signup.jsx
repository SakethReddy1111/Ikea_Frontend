import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

import { useEffect, useState } from "react";

export const SignUp = () => {
  const MainDiv = styled.div`
    border: 1px solid black;
    height: auto;
    width: 92%;
    margin: auto;
    margin-top: 100px;
    display: flex;
  `;
  const LeftDiv = styled.div`
    border: 1px solid black;
    width: 40%;
    /* margin: auto; */
  `;

  const PTag = styled.p`
    font-size: 28px;
    font-weight: bold;
    border: 1px solid yellow;
  `;

  //Main Image Div
  const ImgDiv = styled.div`
    border: 1px solid teal;
    width: 90%;
    display: flex;
    margin-left: 20px;
  `;

  //Div image left
  const ImgDivLeft = styled.div`
    border: 1px solid red;
    height: auto;
    width: 45%;
    margin: auto;
  `;

  const VarImageDiv = styled.div`
    border: 1px solid orange;
    width: 90%;
    height: ${({ height }) => height};
    margin-bottom: 10px;
  `;

  const VarImageTag = styled.img`
    src: ${({ link }) => link};
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 3%;
  `;

  const RightDiv = styled.div`
    border: 2px solid brown;
    width: 50%;
    height: 1200px;
    margin: auto;
  `;

  //Right Side

  //Handling Password Visibility

  //   useEffect(() => {
  //     console.log("1st time");
  //   }, []);
  //Handling the Register
  const [form, setForm] = useState({
    firstName: "",
    // surname: "",
    // mobile: "",
    // dob: "",
    // gender: "",
    // postCode: "",
    // email: "",
    // password: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    // console.log(event.target.value);
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  //child Checkbox newsletter

  return (
    <MainDiv className="mainDiv">
      <LeftDiv className="leftDiv">
        <PTag>
          Create an
          <span style={{ color: "blue" }} className="leftDivFont">
            IKEA Family
          </span>
          <br />
          Profile
        </PTag>
        <ImgDiv>
          <ImgDivLeft>
            <VarImageDiv height={"275px"}>
              <VarImageTag src="https://www.ikea.com/in/en/profile/da397fb7ef6e6d94257db1af77290435.jpg" />
            </VarImageDiv>
            <VarImageDiv height={"200px"}>
              <VarImageTag src="https://www.ikea.com/in/en/profile/281cff11b1bbb9d08737f5d656d7f8d6.jpg" />
            </VarImageDiv>
            <VarImageDiv height={"275px"}>
              <VarImageTag src="https://www.ikea.com/in/en/profile/a620cf6567e1d802e42dad2d419da1a1.jpg" />
            </VarImageDiv>
            <VarImageDiv height={"200px"}>
              <VarImageTag src="https://www.ikea.com/in/en/profile/558de95264a0f9501533593ab355259e.jpg" />
            </VarImageDiv>
          </ImgDivLeft>
          <ImgDivLeft>
            <VarImageDiv height={"200px"}>
              <VarImageTag src="https://www.ikea.com/in/en/profile/5fdf8de127f0c602066c3aee7254c463.jpg" />
            </VarImageDiv>
            <VarImageDiv height={"275px"}>
              <VarImageTag src="https://www.ikea.com/in/en/profile/ddc28f908192eea06190ca5bf8657069.jpg" />
            </VarImageDiv>
            <VarImageDiv height={"200px"}>
              <VarImageTag src="https://www.ikea.com/in/en/profile/471c4b31a982119d5ad6018388835e64.jpg" />
            </VarImageDiv>
            <VarImageDiv height={"275px"}>
              <VarImageTag src="https://www.ikea.com/in/en/profile/3e48e8734c5c5751bd6b21045258bfac.jpg" />
              <VarImageTag src="https://www.ikea.com/in/en/profile/6c9a5b763c764348260c1831ee856f56.jpg" />
            </VarImageDiv>
          </ImgDivLeft>
        </ImgDiv>
      </LeftDiv>
      <RightDiv>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <label htmlFor="">First Name</label>
          <input
            type="text"
            id={"firstName"}
            onChange={(event) => handleChange(event)}
          />

          <input type="submit" value={"Create"} />
        </form>
      </RightDiv>
      {/* <div className="rightDiv"></div> */}
    </MainDiv>
  );
};
