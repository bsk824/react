import React from 'react';
import { Link } from 'react-router-dom';
import style from 'assets/scss/guide.module.scss'
import 'assets/scss/hlj/atom-one-dark.scss';
import GuideRoutes from 'components/guide/guide-routes'

function Guide() {
  return (
    <div className={style['wrap']}>
      <header className={style['header']}>
        <h1 className={style['header__logo']}><Link to="/guide/"><span>GUIDE</span></Link></h1>
        <nav className={style['header__nav']}>
          <Link to="/guide/list">FILELIST</Link>
          <Link to="/guide/layout">LAYOUT</Link>
          <Link to="/guide/comp">COMP</Link>
        </nav>
      </header>
      <div className={style['container']}>
        <GuideRoutes/>
      </div>
    </div>
  );
}

export default Guide;
