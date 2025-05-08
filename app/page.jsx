import Aside from "@/components/home/aside/Aside";
import Contents from "@/components/home/contents/Contents";
import MdSlider from "@/components/home/mdSlider/MdSlider";
import Slider from "@/components/home/Slider/Slider";

export default function Home() {
  return (
    <div>
      <Aside />
      <Slider />
      <Contents />
      <MdSlider />
    </div>
  );
}
