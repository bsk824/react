import React, { useState } from 'react';
import style from 'assets/scss/guide.module.scss'
import ListSection from './list_section'

function GuideList() {
  const [lists] = useState([
    {
      title: "Common (로그인/인증/전체메뉴, /page)",
      sub: [
        {
          depth1: "Splash",
          link: "/splash",
          fileName: "splash.vue",
          // etc: '<p>asdf</p>'
        },
      ],
    },
    {
      title: "Home (/page)",
      sub: [
        {
          depth1: "Home",
          link: "/map",
          fileName: "map.vue",
        },
      ],
    },
  ]);
  return (
    <div className={style.list}>
      {lists.map((list,idx) => (
        <ListSection key={idx} list={list} />
			))}
    </div>
  );
}

export default GuideList;
