import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
 
class App extends Component {
  state = {
     saveState : [],
     titleBtn1 : 'Start',
     titleBtn2 : 'Reset',
     miliSecond : 0,
     Second : 0,
     Minute : 0,
     Hours  : 0,

     numbering : 1
  };

  StartTimer = () => {

    // start button
    if (this.state.titleBtn1 === 'Start') {
      this.setState({
        titleBtn1 : 'Stop',
        titleBtn2 : 'Lap'
      });

      this.miliSecond = setInterval(() => this.setState({
        miliSecond: this.state.miliSecond + 1,
      }),100 )


    }
    
    // stop button
    if (this.state.titleBtn1 === 'Stop') {
      this.setState({
        titleBtn1 : 'Start',
        titleBtn2 : 'Reset'
      });
      clearInterval(this.miliSecond)
    }
    
  }

  ResetTimer = () =>{
    if(this.state.titleBtn2 === 'Reset'){
      this.setState({
        miliSecond : 0,
       Second : 0,
       Minute : 0,
       Hours  : 0, 
      })
    }

    if(this.state.titleBtn2 === 'Lap'){
      var array = this.state.saveState
      var Hours = this.state.Hours
      var Minute = this.state.Minute
      var Second = this.state.Second
      var miliSecond = this.state.miliSecond
      var result = (Hours + " : " + Minute + " : " +Second +" : " + miliSecond)
      var dateNow = new Date().toLocaleString();

        array.push({time: result, date :dateNow });
      console.log(this.state.saveState);
    }
  }
  

  render(){
    if (this.state.miliSecond === 10) {
      this.setState({
        miliSecond : 0,
        Second : this.state.Second +1
      });
    } else if(this.state.Second  === 60) {
      this.setState({
        Second: 0,
        Minute : this.state.Minute + 1,
      })
    }else if(this.state.Minute === 60){
      this.setState({
        Minute : 0,
        Hours : this.state.Hours + 1
      })
    }

    let ListData;
    if(this.state.saveState.length > 0){
      ListData = this.state.saveState.map((result,i) =>{
        return (
          <div className="col-md-3 mb-4" key={i}>
            <div className="card">
              <div className="card-header"> Timer saved #{this.state.numbering+i}</div>
              <div className="card-body">
                <div className="card-title">
                  <h4>{result.time}</h4>
                </div>
              </div>
              <div className="card-footer text-muted">Captured on : {result.date}</div>
            </div>
          </div>
    
            // <div className="card-text text-muted"></div>
        )
      })
    }
    return(
      <div className="App">
        <div className="container">

         <div className="row">
           <div className="col-md-4 text-center mb-5">
           <h3>Timer</h3>
              <div className="card">
                <div className="card-body">
                  <h1>
                  {this.state.Hours}{" "}:{" "} 
                  {this.state.Minute}{" "}:{" "} 
                  {this.state.Second}.
                  {this.state.miliSecond}
                  </h1>
                </div>
              </div>
                <button className="btn btn-primary my-2 " onClick={this.StartTimer}>{this.state.titleBtn1}</button>
                <button className="btn btn-danger my-2" onClick={this.ResetTimer}>{this.state.titleBtn2}</button>
           </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {ListData}
          </div>
        </div>
    </div>
    );
  }
}

export default App;
