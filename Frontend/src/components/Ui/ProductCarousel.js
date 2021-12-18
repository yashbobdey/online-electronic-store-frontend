import React from "react";
import { Carousel } from "react-bootstrap";
import { useHistory } from "react-router-dom";
export default function ProductCarousel() {
  const history = useHistory();
  return (
    <>
      <Carousel fade className="my-5">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ytimg.com/vi/GSlnim4DzyI/maxresdefault.jpg"
            alt="First slide"
            style={{ width: "200px", height: "500px" }}
            onClick={() => {
              history.push(`/product/60f9a6f8b95d223218ef4c4a`);
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ytimg.com/vi/q86ISLoGYa8/maxresdefault.jpg"
            alt="Second slide"
            style={{ width: "200px", height: "500px" }}
            onClick={() => {
              history.push(`/product/60f9a6f8b95d223218ef4c5f`);
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.androidcentral.com/sites/androidcentral.com/files/styles/large_wm_brw/public/article_images/2021/04/oneplus-9r-2.jpg"
            alt="Third slide"
            style={{ width: "200px", height: "500px" }}
            onClick={() => {
              history.push(`/product/60f9a6f8b95d223218ef4c77`);
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ width: "200px", height: "500px" }}
            src="https://i.ytimg.com/vi/eu_bNqRRJ-w/maxresdefault.jpg"
            alt="Fourth slide"
            onClick={() => {
              history.push(`/product/60f9a6f8b95d223218ef4c96`);
            }}
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
