import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TextSphere from './page-components/TextSphere';
import './Home.css';
export default function Home() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top when the component mounts or the route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <section id = "textSection">
        <h1>Hey! I'm Jeffrey Ye</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit id reiciendis molestiae. Repellat eos obcaecati officiis assumenda, alias aperiam, recusandae dicta atque quisquam explicabo, deserunt inventore natus! Eaque, possimus repellat.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda aliquam dicta mollitia modi saepe ipsum, quasi eligendi, deleniti illum eius delectus dolore doloribus eum animi expedita molestias consequuntur aliquid at.</p>
      </section>
      <section id = "imageSection">
        <p>Insert image here</p>
      </section>
      <section id = "textSphereSection"><TextSphere /></section>
    </>
  );
};

