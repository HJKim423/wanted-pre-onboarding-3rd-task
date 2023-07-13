import { Banner } from "./ListItemStyle";

function BannerItem() {
  return (
    <Banner
      onClick={() => {
        window.open(" https://www.wanted.co.kr/");
      }}
    >
      <img
        alt="wanted"
        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
      />
    </Banner>
  );
}

export default BannerItem;
