import { Link } from "react-router-dom";
import styled from "styled-components";
import Menubar from "../../components/common/menubar";

function TestPage() {
  return (
    <>
      <Wrapper>
        <ItemBox>
          <h1>2025 키오스크 만들기 스터디</h1>
          <Link to={"/home"}>
            <MyButton>시작하기</MyButton>
          </Link>
        </ItemBox>
      </Wrapper>
      <Menubar />
    </>
  );
}
export default TestPage;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ItemBox = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MyButton = styled.button`
  background-color: pink;
  color: white;
  padding: 10px 40px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
`;
