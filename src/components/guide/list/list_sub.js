import React from 'react';
import { Link } from 'react-router-dom';

function ListSub({listSub}) {
  function btn(fileName) {
    return (
      <button type="button">{fileName}</button>
    )
  }
  function qrset(link, name) {
    let tag = document.createElement('a');
    tag.href = link;  
    return (
      <>
        <Link to={link}>{name}</Link>
        <img 
          src={`https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${tag.href}&choe=UTF-8`} 
          style={{width: 150+'px', height: 150+'px'}}
          alt={name}
        />
      </>
    )
  }
  function linkChk(obj) {
    let result;
    if(obj.layer) {
      result = btn(obj.fileName);
    }
    if(obj.link) {
      result = qrset(obj.link, obj.fileName);
    }
    return result
  }
  return (
    <tr>
      <td>{listSub.depth1}</td>
      <td>{listSub.depth2}</td>
      <td>{listSub.depth3}</td>
      <td>{listSub.depth4}</td>
      <td>{linkChk(listSub)}</td>
      <td>{listSub.etc}</td>
    </tr>
  );
}

export default ListSub;
