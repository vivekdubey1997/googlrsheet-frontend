import './App.css';

 import tataLogo from './tataLogo.jpeg'
export default function App() {
  
  return (
    <div className="card_container">
    <div className="short_term_container">
      <div className="short_term">Short term</div>
      <div>29th Nov, 2022 | 4:34 PM</div>
    </div>
    <div className="active_trade_container">
      <div>Active trade</div>
      <div className="gain_for">
        <div>Gain so far</div>
        <div className="number">5.45%</div>
      </div>
    </div>
    <div className="company_container">
      <div className="company_top">
        <div className="tata_logo">
          <img src={tataLogo} />
        </div>
        <div className="company_name">
          <h2>TATAMOTORS</h2>
          <div>
            <p>Rs 85,624.25</p>
            <p>-184.05 (0.21%)</p>
          </div>
        </div>
        <div>{/* <img src={filterIcon} /> */}</div>
      </div>
      <div className="company_mid">Suggested entry at 140rs</div>
      <div className="company_end">
        <div>
          <p>Stopploss</p>
          <h3>Rs125.4 </h3>
        </div>
        <div>
          <p>Target</p>
          <h3>Rs1140.45 </h3>
        </div>
        <div>
          <p>Hold duration</p>
          <h3>6-9 months</h3>
        </div>
      </div>
    </div>
    <div className="potential_left">Potential left -13.3%</div>
    <div className="view_insight">
      <h3>View insights</h3>
      <button>Buy</button>
    </div>
  </div>
  );
}