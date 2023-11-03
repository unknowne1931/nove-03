import React from 'react'
import Hoc from './hoc'
import Navibar from './navibar'
import Topn from './topnme'
import { Link } from 'react-router-dom'

const Clainre = () => {
  return (
    <div>
        <Navibar/>
        <Topn/>
        <center>
            <div>
                <h2 className='clar-h2-hed'>Way to Claim Reward</h2><br />

                <div className='clr-note-cnt-01-mb'>
                  <span className='clr-noti'><strong>*</strong> If you have Rewards, Mail us from you'r Registerd E-Mail</span><br /><br />
                  <span className='clr-noti'><strong>*</strong> Or Send a Message Request to Instagram, to claim Rewards</span><br />
                  <h3><Link to='https://www.instagram.com/stawro/' >Instagram</Link><br /> <strong>stawropuzzle@gmail.com</strong></h3>
                  <br />
                </div>

                <div className='clin-cnt-01-be'>
                  <span className='clr-mil'>Mail</span><br />
                    <span className='clr-spn-01-mb'>For Quick Responce</span><br />
                    <span className='clr-spn-02-mb'><strong> Subject</strong> "To claim Rewards."</span>
                    <br />
                </div>
            </div>
        </center>
    </div>
  )
}

export default Hoc(Clainre)
