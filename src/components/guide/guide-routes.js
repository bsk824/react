import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GuideInfo from 'components/guide/guide-info';
import GuideList from 'components/guide/list/list';
import GuideLayout from 'components/guide/guide-layout';
import GuideComp from 'components/guide/guide-comp';

function GuideRoutes() {
  return (
    <Routes>
      <Route index element={<GuideInfo />}/>
      <Route path="/list" element={<GuideList />}/>
      <Route path="/layout" element={<GuideLayout />}/>
      <Route path="/comp" element={<GuideComp />}/>
    </Routes>
  );
}

export default GuideRoutes;
