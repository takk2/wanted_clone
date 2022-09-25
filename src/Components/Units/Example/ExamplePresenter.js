import styled from "@emotion/styled";

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
