import React from 'react';
import Summary from '../Component_Summary/Summary';
import Social from '../Component_Social/Social';

function Home() {
  return (
    <section className="Home">
      <section className="Hello">
        <article className="Hello__intro--container">
          <h4>HELLO</h4>
          <h1>I'm Justin</h1>
          <p>A Front-End UX Engineer</p>
          <p>From Richmond</p>
        </article>
        <button className="Hello__hire">HIRE ME</button>
        <Social />
      </section>
      <img src="../images/JustFred.jpg" alt="Justin, overlooking downtown Fredericksburg" />
      <Summary />
    </section>
  );
}

export default Home;