import { forwardRef, useImperativeHandle, useRef, useEffect,useContext} from "react";
import "./page1.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {havuz} from "../App"
let data = [
  { id: 3, src: "ardunio_micro.png" },
  { id: 4, src: "ardunio_uno.png" },
  { id: 5, src: "example1.png" },
  { id: 6, src: "example2.png" },
  { id: 7, src: "example3.png" },
  { id: 8, src: "example4.png" },
];
export const Page1 = forwardRef((props, ref) => {
  const hvz = useContext(havuz)
  gsap.registerPlugin(ScrollTrigger)
  useImperativeHandle(ref, () => ({
    page1Anim() {
      let page1Tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".page1",
          start: "top top",
          end: "bottom bottom",
          scrub: 4,
          pin:true
        },
      });
      page1Tl
      .to(".photo", {width:"100%",autoAlpha: 1 ,stagger:.1})
      .to(".photo img",{autoAlpha: 1 ,stagger:.1})
    }
  }));
  return (
    <>
      <div className="page1">
        <div className="page1Inner">
          {data.map((data) => (
            <div className="photo" onClick={hvz.test}>
              <img src={`pictures/${data.src}`}></img>
            </div>
          ))}
        </div>
      </div>
    </>
  );
});
