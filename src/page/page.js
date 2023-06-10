import "./page.css";
import { forwardRef, useImperativeHandle, useEffect, useContext } from "react";
import gsap from "gsap";
import { havuz } from "../App";

let data = [
  { id: 3, src: "ardunio_micro.png" },
  { id: 4, src: "ardunio_uno.png" },
  { id: 5, src: "example1.png" },
  { id: 6, src: "example2.png" },
  { id: 7, src: "example3.png" },
  { id: 8, src: "example4.png" },
];

export const Page = forwardRef((props, ref) => {
  const hvz = useContext(havuz);
  useImperativeHandle(ref, () => ({
    pageAnim() {
      let pageTl = gsap.timeline();
      pageTl
        .to(".pageInner", { scale: 1 })
        .to(".pageBox", { xPercent: 100, autoAlpha: 1 });
      return pageTl;
    },
  }));

  useEffect(() => {});

  return (
    <div className="pageContainer">
      <div className="pageInner">
        <div className="pageBox">
          <img src={`pictures/${hvz.test}`}></img>
        </div>
      </div>
    </div>
  );
});
