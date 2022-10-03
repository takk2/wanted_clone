import styled from "@emotion/styled";

// 20줄 넘어가면 파일 따로 빼기 ExampleStyles.js
const Wrapper = styled.div`
  width: 100%;
  span {
    border: 2px solid #dbdbdb;
  }
`;

const ExamplePresenter = () => {
  return (
    <Wrapper>
      <span>Example presenter 파일에는 UI요소를 작성합니다. </span>
    </Wrapper>
  );
};

export default ExamplePresenter;
