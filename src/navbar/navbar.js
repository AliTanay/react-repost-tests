import "./navbar.css";
import foto from "./example1.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useImperativeHandle, forwardRef, useEffect } from "react";
export const NavBar = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    NavBarScroll() {
      let lastsScroll = 0;
      let timer;
      window.addEventListener("scroll", () => {
        clearTimeout(timer);
        if (window.scrollY > lastsScroll) {
          gsap.to(".head", { autoAlpha: 0 });
        } else {
          gsap.to(".head", { autoAlpha: 1 });
        }
        lastsScroll = window.scrollY;
        timer = setTimeout(() => {
          gsap.to(".head", { autoAlpha: 1 });
        }, 100);
      });
    },
  }));
  const boxClick = (e) => {
    let boxTl = gsap.timeline();
    boxTl
      .to(".nav-btn", {
        width: "10rem",
        height: "10rem",
        borderRadius: "2rem",
        top: "5rem",
      })
      .to(".close", {autoAlpha: 1,})
      .to(".nav-btn a", { autoAlpha: 1, stagger: 0.1, xPercent: 100 },"<")
  };
  const closeBoxClick = (e) => {
    e.stopPropagation();
    let closeboxTl = gsap.timeline();
    closeboxTl
      .to(".nav-btn a", { autoAlpha: 0, stagger: 0.1, xPercent: -100 })
      .to(".close", {autoAlpha:0})
      .to(".nav-btn", {
        width: "3.5rem",
        height: "3.5rem",
        borderRadius: "50%",
        right: "1rem",
        top: "0.25rem",
      })
  };
  return (
    <>
      <div className="head">
        <img src={foto}></img>
        <nav>
          <a href="/#">Home</a>
          <a href="/#">Products</a>
          <a href="/#">About</a>
          <a href="/#">
            <div>+</div>
          </a>
        </nav>
        <div className="nav-btn" onClick={boxClick}>
          <div className="close" onClick={closeBoxClick}>
            X
          </div>
          <a href="/#">Home</a>
          <a href="/#">Products</a>
          <a href="/#">About</a>
          <a href="/#">
            <div>+</div>
          </a>
        </div>
      </div>
    </>
  );
});
