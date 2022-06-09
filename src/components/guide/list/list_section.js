import React from 'react';
import style from 'assets/scss/guide.module.scss'
import ListSub from './list_sub'

function ListSection({list}) {
  function fold(e) {
    let _this = e.currentTarget;
    let wrap = _this.parentNode.parentNode;
    wrap.classList.toggle("fold");
  }
  return (
    <section>
      <h2 className={style.subTit}>{list.title} <button type="button" className={style.btnFold} onClick={fold}>접기</button></h2>
      <div className={style.table}>
        <table>
          <thead>
            <tr>
              <th scope="col">1depth</th>
              <th scope="col">2depth</th>
              <th scope="col">3depth</th>
              <th scope="col">4depth</th>
              <th scope="col">link</th>
              <th scope="col">etc</th>
            </tr>
          </thead>
          <tbody>
            {list.sub.map((listSub, idx) => (
              <ListSub key={idx} listSub={listSub} />
            ))}
          </tbody>
        </table>
      </div>
      
    </section>
  );
}

export default ListSection;
