import React from 'react'
import Hoc from './hoc';
import Navibar from './navibar';
import Topn from './topnme';

const Error = () => {
  return (
    <div>
      <Navibar />
      <Topn />
      <center>
        <span>Error</span><br />
        <h2>404</h2>
      </center>
    </div>
  )
}

export default Hoc(Error);
