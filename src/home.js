import React from 'react';
import Navibar from './navibar';
import Topn from './topnme';
import Netflix from './images/Netflix.png';
import APrime from './images/aprime.png';
import Brain1 from './images/brain1.png';
import Bottompg from './botton';

const Home = () => {
  return (
    <div>
        <Navibar/>
      <center>
        <Topn />
        <div className='hom-all-cnt-01'>
          <div>
            <h1 className='hom-cnt-01-h1'>Welcome to <strong>sta<span>W</span>ro</strong></h1>
          </div>
          
          
          <div className='hom-cnt-02'>
            <h2 >Let's Get <span className='hom-spn-01'>s</span><span className='hom-spn-02'>t</span><span className='hom-spn-03'>a</span><span className='hom-spn-04'>r</span><span className='hom-spn-05'>t</span>..!</h2>
            <p className='hom-cnt-02-h2-01'>Solve Puzzle and get <strong>Rewards</strong>, <strong>OTT Platforms</strong><br />
            <strong>Movie Tickets</strong>, <strong>Train Tickets</strong>, <strong>Products</strong>,<br />
            <strong>Zomato Coupons</strong>, and More.
            </p>

            <p className='hom-cnt-02-p2'>Play and Get Below rewards</p>
            <div className='hom-png-cnt-01'>
            <div className='hom-png-01'>
              <img src={Netflix} alt='img01' />
            </div>

            <div className='hom-png-02'>
              <img src={APrime} alt='img02' />
            </div>

            <div className='hom-png-03'>
              <img src="https://res.cloudinary.com/admitad-gmbh/image/upload/v1666973032/ixaa8tyj24yv45cmgysl.png" alt='img03' />
            </div>
            <br />

            <div className='hom-png-04'>
              <img src="https://ww2.freelogovectors.net/wp-content/uploads/2021/12/disneyplus-hotstar-logo-freelogovectors.net_-400x400.png?lossy=1&ssl=1&fit=400%2C400" alt='img04' />
            </div>

            </div>

          </div>

          <div className='hom-cnt-07'>
          <div className='hom-cnt-08'>
              <span>Knowledge Opens the Door<br />
              to Opportunity, Achievement,<br />
              Success and Wealth.</span>
            </div>
            <div className='hom-cnt-05'>
              <div className='hom-cnt-06'>
                <img src={Brain1} alt='brain' />
              </div>
            </div>
          </div>
          <h3>.......</h3>
          <div className='hom-btm-cnt-01'>
            <h2>Play From Fire Fox</h2>
            <span>Download App from Playstore</span>
            <div className='fire-fox-div'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/800px-Firefox_logo%2C_2019.svg.png' alt='firefox' />
            </div>
          </div>
        </div>
        <Bottompg/>
      </center>
    </div>
  )
}

export default Home;