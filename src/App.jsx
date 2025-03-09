import React from 'react'
import './App.css'
import amex from './assets/icons8-american-express-48.png'
import diners from './assets/icons8-diners-club-50.png'
import discover from './assets/icons8-discover-card-48.png'
import visa from './assets/icons8-visa-48.png'
import master from './assets/icons8-mastercard-48.png'
import paypal from './assets/icons8-paypal-24.png'
import maestro from './assets/icons8-maestro-48.png'
import jcb from './assets/icons8-jcb-48.png'
import correct from './assets/icons8-correct-48.png'
import wrong from './assets/icons8-wrong-48.png'




function App() {
  return (
    <>

    <div id='heading'>
    <h1>
      Fair pricing for everyone
    </h1>
    <p>Our robust analytics offer rich insights into the information buyers want,informing where <br />
      teams</p>
    </div>
<br /><br />
    <div id='cards'>
      <div className='items'>
      <h2>Silver</h2>
        <p id='divison'>Use for single end product which end users can't be charged for.</p>
        <p><span>$49</span>/one time pay</p>
        <br />
        <div id='benifits'>
          <div> <img src={correct} alt=""  height='15px'/><b>Full source code</b></div>
          <div> <img src={correct} alt=""  height='15px'/><b>Documentation</b></div>
          <div className='wrong'> <img src={wrong} alt=""  height='15px'/>Use in SaaS app</div>
          <div> <img src={correct} alt=""  height='15px'/><b>One</b> Project</div>
          <div> <img src={correct} alt=""  height='15px'/><b>One Year</b> Techinical Support</div>
          <div><img src={correct} alt=""  height='15px'/><b>One Year</b> Free Updates</div>
          <div></div>
          <button>Purchase Now</button>
        </div>
      </div>
      <div className='items'>
      <h2>Gold</h2>
        <p id='divison'>Use for unlimited end product  end users can't be charged for.</p>
        <p><span>$89</span>/one time pay</p>
        <br />
        <div id='benifits'>
          <div> <img src={correct} alt=""  height='15px'/><b>Full source code</b></div>
          <div> <img src={correct} alt=""  height='15px'/><b>Documentation</b></div>
          <div className='wrong'> <img src={wrong} alt=""  height='15px'/>Use in SaaS app</div>
          <div> <img src={correct} alt=""  height='15px'/><b>Unlimited</b> Project</div>
          <div> <img src={correct} alt=""  height='15px'/><b>One Year</b> Techinical Support</div>
          <div><img src={correct} alt=""  height='15px'/><b>One Year</b> Free Updates</div>
          <div></div>
          <button>Purchase Now</button>
        </div>

      </div>
      <div className='items'>
      <h2>Diamond<span id='popular'>Popular</span></h2>
        <p id='divison'>Use for single end product which end users can be charged for.</p>
        <p><span>$299</span>/one time pay</p>
        <br />
        <div id='benifits'>
          <div> <img src={correct} alt=""  height='15px'/><b>Full source code</b></div>
          <div> <img src={correct} alt=""  height='15px'/><b>Documentation</b></div>
          <div> <img src={correct} alt=""  height='15px'/>Use in SaaS app</div>
          <div> <img src={correct} alt=""  height='15px'/><b>One</b> Project</div>
          <div> <img src={correct} alt=""  height='15px'/><b>One Year</b> Techinical Support</div>
          <div><img src={correct} alt=""  height='15px'/><b>One Year</b> Free Updates</div>
          <div></div>
          <button>Purchase Now</button>
        </div>
      </div>
      <div className='items'>
      <h2>Platinium</h2>
        
        <p id='divison'>Use in unlimited end product  end users can't be charged for.</p>
        <p><span>$499</span>/one time pay</p>
        <br />
        <div id='benifits'>
          <div> <img src={correct} alt=""  height='15px'/><b>Full source code</b></div>
          <div> <img src={correct} alt=""  height='15px'/><b>Documentation</b></div>
          <div> <img src={correct} alt=""  height='15px'/>Use in SaaS app</div>
          <div> <img src={correct} alt=""  height='15px'/><b>Unlimited</b> Project</div>
          <div> <img src={correct} alt=""  height='15px'/><b>One Year</b> Techinical Support</div>
          <div><img src={correct} alt=""  height='15px'/><b>One Year</b> Free Updates</div>
          <div></div>
          <button>Purchase Now</button>
        </div>
      </div>
    </div>
    

    <br /><br />

    <div id='payment'>
      <p>Secured payment with Paypal & Razorpay</p>
      <div id="variant">
        <img src={visa} alt="" />
        <img src={master} alt="" />
        <img src={amex} alt="" />
        <img src={discover} alt="" />
        <img src={paypal} alt="" />
        <img src={maestro} alt="" />
        <img src={jcb} alt="" />
        <img src={diners} alt="" />
      </div>
      
      
    </div>


    </>
  )
}

export default App