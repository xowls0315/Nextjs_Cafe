import Container from "@/components/common/layout/Container";
import Banner from "@/components/store/Banner";
import KakaoMap from "@/components/store/KakaoMap";

const Page = () => {
  return (
    <div>
      <Banner />
      <Container>
        <KakaoMap />
      </Container>
    </div>
  );
};

export default Page;
