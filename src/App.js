import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
 
class App extends Component {
   state = {
     titleBtn : 'Start',
     miliSecond : 0,
     Second : 0,
     Minute : 0,
     Hours  : 0,     
  };

  StartTimer = () => {

    // start button
    if (this.state.titleBtn === 'Start') {
      this.setState({
        titleBtn : 'Stop',
      });

      this.miliSecond = setInterval(() => this.setState({
        miliSecond: this.state.miliSecond + 1,
      }),100 )


    }
    
    // stop button
    if (this.state.titleBtn === 'Stop') {
      this.setState({
        titleBtn : 'Start',
      });
      clearInterval(this.miliSecond)
    }
  }

  ResetTimer = () =>{
    this.setState({
      miliSecond : 0,
     Second : 0,
     Minute : 0,
     Hours  : 0, 
    })
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
    return(
      <div className="App">
        <div className="container">

         <div className="row">
           <div className="col-md-4 text-center">
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
                <button className="btn btn-primary my-2 " onClick={this.StartTimer}>{this.state.titleBtn}</button>
                <button className="btn btn-danger my-2" onClick={this.ResetTimer}>Reset</button>
           </div>
          </div>
        </div>
    </div>
    );
  }
}

export default App;
