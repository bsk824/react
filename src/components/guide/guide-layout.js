import React from 'react';
import Highlight from 'react-highlight';
import 'assets/scss/hlj/atom-one-dark.scss';

function GuideLayout() {
  return (
    <>
    <Highlight>
    {`
import React from 'react';

function GuideComp() {
  return (
    <>
    GuideComp
    </>
  );
}

export default GuideComp;
<div>
  ADSFasdf
</div>
    `}
    </Highlight>
    
    </>
  );
}

export default GuideLayout;
