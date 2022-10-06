import styled from "@emotion/styled";

const filterText = [
  "회사생활",
  "취업/이직",
  "라이프스타일",
  "조직문화",
  "인간관계",
  "IT/기술",
  "커리어고민",
  "리더십",
  "브랜딩",
  "UX/UI",
  "HR",
  "개발",
  "디자인",
  "서비스기획",
  "경영/전략",
  "마케팅",
  "노무",
  "콘텐츠 제작",
];

const Mainresenter = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <SliderWrap>
          <span>slide01</span>
          <span>slide02</span>
          <span>slide03</span>
        </SliderWrap>
        <ContentWrap>
          <section>
            <div className="title">나에게 필요한 커리어 인사이트</div>
          </section>

          <ContentFilterWrap>
            <FilterItemList>
              {filterText.map((text, index) => {
                return <FilterItem key={index}>{text}</FilterItem>;
              })}
            </FilterItemList>
          </ContentFilterWrap>

          <ContentItemListWrap>
            <ContentItemList>
              <ContentItem>Item 01</ContentItem>
              <ContentItem>Item 02</ContentItem>
              <ContentItem>Item 03</ContentItem>
            </ContentItemList>
          </ContentItemListWrap>
        </ContentWrap>
      </Wrapper>
    </>
  );
};

export default Mainresenter;

const Wrapper = styled.div`
  padding-top: 25px;
  width: 100%;
  background-color: white;
  color: black;
`;

const Header = styled.div`
  height: 50px;
  background-color: yellow;
`;

const SliderWrap = styled.article`
  height: 300px;
  background-color: yellow;
`;

const ContentWrap = styled.article`
  width: 1080px;
  margin: 0 auto;
  padding-top: 60px;
  color: black;

  .title {
    font-size: 22px;
  }
`;

const ContentFilterWrap = styled.section``;

const FilterItemList = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  padding: 0;
  list-style: none;
`;

const FilterItem = styled.li`
  padding: 9px 22px;
  border: 1px solid #e1e2e3;
  border-radius: 25px;
  font-size: 15px;
  font-weight: 600;
  color: #888;
`;

const ContentItemListWrap = styled.section``;

const ContentItemList = styled.ul``;

const ContentItem = styled.li``;
