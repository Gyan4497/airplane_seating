import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class Seats extends Component {
  // getDefaultProps(){
  //   return {
  //     table: [2,3]
  //   };
  // }
  constructor(props) {
    super(props);
    this.state= {
      table: []
    }
  }
  
  render(){
    // console.log(table);
    this.setState({table: [[2,3],[3,4]]});
    var rows = this.props.table.map(function (item, i){
        var entry = item.map(function (element, j) {
            return ( 
                <td key={j}> {element} </td>
                );
        });
        return (
            <tr key={i}> {entry} </tr>
          );
    });
    return (
        <table className="table-hover table-striped table-bordered">
            <tbody>
                {rows}
            </tbody>
        </table>
    );
  }
}

class DisplayGrid extends Component {
  constructor(props) {
    super(props);
    this.state= {

    }
  }

  breakdown() {
    var a= [];
    var b = this.props.seatArr;
    console.log(b +"b");
    var rows = b[0];
    var cols = b[1];
    // var c = c.split(',');
    // var rows = c[0];
    // var cols = c[1];
    // for(var i=0; i<rows; i++) {
    //   for(var j=0; j<cols; j++) {
    //     a[i][j]=0;
    //   }
    // }
    console.log(a);


  }
  render() {
    this.breakdown();
    // var tables = () => {return this.props.seatArr.map((tables) => <table>{
    //     var tablerows= () => {
    //     return this.props.tables.map(rows => {
    //       var row = rows.map(cell => <td>{cell}</td>); 
    //       return(
    //         <tr>{row}</tr>
    //       );
    //     });
    // }
    //   }</table>)}
    
    return(
      // <div>{this.tables()}</div>
      <div></div>
    );
    // return(
    //   <div className="seatGrid">
        {/* {this.props.seatArr.map((table) => (<table>
            {rows = function(table) {
              return (
                <tr key={i}>{cols = function(table) {
                      return( <td key={j}></td>);
                    }
                  }</tr>
              );
            }}
            
          </table>))} */}


          
    //   </div>
    // );
  }
}

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seatArr: [],
      totalpassenger: 0

    }
  }
  _onSubmit(e) {
    e.preventDefault();
    var seatarray = this.refs.seatarray.value;
    var seatArr = JSON.parse(seatarray);
    console.log(seatArr);
    console.log(seatArr[0][1]);
    for(var i=0; i<seatArr.length; i++) {

    }
    var airplane = seatArr;
    console.log("airplane length "+ airplane.length)
    console.log("airplane 0 element " + airplane[0][0]);
    var seatBlock = [];
    var totalArrays = 0;   
    for(var i=0; i<airplane.length; i++) {
      totalArrays += airplane[i][0];
    }
    seatBlock.length = totalArrays;
    var rowArray= [];
    for(var i=0; i<airplane.length; i++) {
    }
    for(var i=0; i<totalArrays; i++)
    {

      var newArr = Array.apply(null, Array(airplane[i][1])).map(Number.prototype.valueOf,0);
      seatBlock.push(newArr);
      console.log(newArr);
    }

    this.setState({ seatArr });
    console.log("input form" + this.state.seatArr);
    this.setState.totalpassenger = this.refs.totalpassenger.value;
  }

  render () {
    return (
      <div>
        <form onSubmit={this._onSubmit.bind(this)} ref='form' className="formBox">
          <input type='text' ref='seatarray' className="seatArray" placeholder="input the array"/>
          <input type='text' ref='totalpassenger' className="totalPassenger" placeholder="input the number of Passenger"/>
          <input type='submit' value='Go!!'  className="submit"/>
        </form>
        <DisplayGrid seatArr={this.state.seatArr} totalpassenger={this.state.totalpassenger}/>
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <InputForm/>

      </div>
    );
  }
}

export default App;
