import styled from "styled-components";

export const Register = () => {
  const MainDiv = styled.div`
    border: 1px solid black;
    height: auto;
    width: 92%;
    margin: auto;
    margin-top: 100px;
    display: flex;
  `;
  return (
    <MainDiv id={"mainDiv"}>
      <div className="leftDiv"></div>
    </MainDiv>
  );
};
