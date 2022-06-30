import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GuideInfo from 'components/guide/guide-info';
import GuideList from 'components/guide/list/list';
import GuideLayout from 'components/guide/guide-layout';
import GuideComp from 'components/guide/guide-comp';
import Canvas from 'components/canvas/canvas';

function GuideRoutes() {
  return (
    <Routes>
      <Route index element={<GuideInfo />}/>
      <Route path="/list" element={<GuideList />}/>
      <Route path="/layout" element={<GuideLayout />}/>
      <Route path="/comp" element={<GuideComp />}/>
      <Route path="/canvas" element={<Canvas />}/>
    </Routes>
  );
}

export default GuideRoutes;
