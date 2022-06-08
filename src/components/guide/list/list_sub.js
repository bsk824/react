import React from 'react';
import { Link } from 'react-router-dom';

function ListSub({listSub}) {
  function linkChk(obj) {
    let result;
    if(obj.layer) {
      result = `<button type="button">${obj.fileName}</button>`;
    }
    if(obj.link) {
      result = <Link to={listSub.link}>{listSub.fileName}</Link>
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
