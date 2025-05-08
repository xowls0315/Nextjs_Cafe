import Container from "../../common/layout/Container";
import Heading from "../../common/typography/Heading";
import ContentGrid from "./ContentGrid";
import ContentsAside from "./ContentsAside";

const Contents = () => {
  return (
    <Container className="py-10 px-8 md:px-0">
      <Heading level={3}>Contents</Heading>
      <div className="w-full flex flex-col md:flex-row gap-10">
        <ContentGrid />
        <ContentsAside />
      </div>
    </Container>
  );
};

export default Contents;
