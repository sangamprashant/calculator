import React from "react";

function Main() {
  return (
    <div className="container">
      <h1 className="title">Calculator</h1>
      <div className="card result-card">
        <h1 className="result">0</h1>
      </div>
      <div className="row">
        <div className="colmd3">
          <div className="round side">C</div>
        </div>
        <div className="colmd3">
          <div className="round side">%</div>
        </div>
        <div className="colmd3">
          <div className="round side">del</div>
        </div>
        <div className="colmd3">
          <div className="round side">/</div>
        </div>
      </div>
      <div className="row">
        <div className="colmd3">
          <div className="round inside">7</div>
        </div>
        <div className="colmd3">
          <div className="round inside">8</div>
        </div>
        <div className="colmd3">
          <div className="round inside">9</div>
        </div>
        <div className="colmd3">
          <div className="round side">x</div>
        </div>
      </div>
      <div className="row">
        <div className="colmd3">
          <div className="round inside">4</div>
        </div>
        <div className="colmd3">
          <div className="round inside">5</div>
        </div>
        <div className="colmd3">
          <div className="round inside">6</div>
        </div>
        <div className="colmd3">
          <div className="round side">-</div>
        </div>
      </div>
      <div className="row">
        <div className="colmd3">
          <div className="round inside">1</div>
        </div>
        <div className="colmd3">
          <div className="round inside">2</div>
        </div>
        <div className="colmd3">
          <div className="round inside">3</div>
        </div>
        <div className="colmd3">
          <div className="round side">+</div>
        </div>
      </div>
      <div className="row">
        <div className="colmd3">
          <div className="round inside">00</div>
        </div>
        <div className="colmd3">
          <div className="round inside">0</div>
        </div>
        <div className="colmd3">
          <div className="round inside">.</div>
        </div>
        <div className="colmd3">
          <div className="round side">=</div>
        </div>
      </div>
    </div>
  );
}

export default Main;
