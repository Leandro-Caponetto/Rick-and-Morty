import React from 'react'
import style from '../styles/About.module.css'



const About = () => {
  return (
    <>
      <div className={style.about}>
        <h1>Soy Leandro Caponetto, un dev en crecimiento</h1>
        <h2>actualmente estudio POO</h2>

        <div className={style.container}>
          <div className={style.card_box}>
            <span></span>
          </div>
        </div>

        <div className={style.card_about}>
          <div className={style.circle}></div>
        
          <div className={style.circle}></div>
          <div className={style.about_inner}>
          <p>
            React Hook useEffect has a missing dependency: 'seteandoTitle'.
            Either include it or remove the dependency array. If 'seteandoTitle'
            changes too often, find the parende it or remove the dependency to
            component that defines it and wrap that definition in useCallback
          </p>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default About;