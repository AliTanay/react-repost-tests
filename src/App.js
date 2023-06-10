import { useRef } from "react";
import React from "react";
import "./App.css";
import { NavBar } from "./navbar/navbar";
import { Page } from "./page/page";
import { Page1 } from "./page1/page1";
import { useEffect } from "react";

export const havuz = React.createContext();

function App() {
  const Page1Ref = useRef();
  const PageRf = useRef();
  const NavBarRf = useRef();
  useEffect(() => {
    PageRf.current.pageAnim().play();
    NavBarRf.current.NavBarScroll();
    Page1Ref.current.page1Anim();
    window.onbeforeunload=()=>{
      window.scrollTo(0, 0);
    }
  }, []);
  const test=(item)=>{
    let tst = item.target.getAttribute("src")
    
  }
  return (
    <>
      <havuz.Provider value={{test}}>
      <NavBar ref={NavBarRf} />
      <Page ref={PageRf}/>
      <Page1 ref={Page1Ref} />
      </havuz.Provider>
    </>
  );
}
export default App;
