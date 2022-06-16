import React from 'react';
import Highlight from 'react-highlight';

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
