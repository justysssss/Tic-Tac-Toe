import React, { useState, useRef } from 'react';
import './TicTacToe.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';
import profile_pic from '../Assets/profile_icon.png';

let data = ["" , "", "", "", "", "", "", "", "",];

const TicTacToe = () => {

  let [count,setcount] = useState(0);
  let [lock,setlock] = useState(false);
  let titleref = useRef(null);
  let box1  = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9];

  const [boxIcon, setBoxIcon] = useState(profile_pic); // Ensure this is a valid image path
  const [boxBorderColor, setBoxBorderColor] = useState('#0f1b21');

  const toggles = (e, num) => {
    if(lock) {
      return 0;
    }
    if(count%2 === 0)
    {
      e.target.innerHTML = `<img src='${cross_icon}'>`;
      data[num] ="x";
      setcount(++ count);
    }
    else{
      e.target.innerHTML = `<img src='${circle_icon}'>`;
      data[num] ="o";
      setcount(++ count);
    }
    checkWin();
  }
    const checkWin = () => {
      if (data[0]==data[1] && data[1]==data[2] && data[2]!=="")
      {
        won(data[2]);
      }
      else if (data[3]==data[4] && data[4]==data[5] && data[5]!=="")
      {
        won(data[5]);
      }
      else if (data[6]==data[7] && data[7]==data[8] && data[8]!=="")
      {
        won(data[8]);
      }
      else if (data[0]==data[3] && data[3]==data[6] && data[6]!=="")
      {
        won(data[6]);
      }
      else if (data[1]==data[4] && data[4]==data[7] && data[7]!=="")
      {
        won(data[7]);
      }
      else if (data[2]==data[5] && data[5]==data[8] && data[8]!=="")
      {
        won(data[8]);
      }
      else if (data[0]==data[4] && data[4]==data[8] && data[8]!=="")
      {
        won(data[8]);
      }
      else if (data[0]==data[1] && data[1]==data[2] && data[2]!=="")
      {
        won(data[2]);
      }
      else if (data[2]==data[4] && data[4]==data[6] && data[6]!=="")
      {
        won(data[6]);
      }
    }

    const won = (winner) => {
      setlock(true);
      if(winner=="x")
      {
        titleref.current.innerHTML = `Congratulations: <img src=${cross_icon}>`;
      }
      else{
        titleref.current.innerHTML = `Congratulations: <img src=${circle_icon}>`;
      }
    }

    const reset = () => {
      setlock(false);
      titleref.current.innerHTML = "Tic Tac Toe Game";
      data = ["" , "", "", "", "", "", "", "", "",];
      box_array.map((e) => {
        e.current.innerHTML = "";
      })
    }

  return (
    <div className="container">
      <h1 className="title"ref={titleref}>Tic Tac Toe Game</h1>
      <div className="board">
        <div className="row1">
          <div className="boxes" ref={box1} onClick={(e)=>{toggles(e,0)}}></div>
          <div className="boxes" ref={box2} onClick={(e)=>{toggles(e,1)}}></div>
          <div className="boxes" ref={box3} onClick={(e)=>{toggles(e,2)}}></div>
        </div>
        <div className="row2">
          <div className="boxes" ref={box4} onClick={(e)=>{toggles(e,3)}}></div>
          <div className="boxes" ref={box5} onClick={(e)=>{toggles(e,4)}}></div>
          <div className="boxes" ref={box6} onClick={(e)=>{toggles(e,5)}}></div>
        </div>
        <div className="row3">
          <div className="boxes" ref={box7} onClick={(e)=>{toggles(e,6)}}></div>
          <div className="boxes" ref={box8} onClick={(e)=>{toggles(e,7)}}></div>
          <div className="boxes" ref={box9} onClick={(e)=>{toggles(e,8)}}></div>
        </div>
      </div>
      <button className="reset" onClick={()=>{reset()}}>Reset</button>
    </div>
  );
};

export default TicTacToe;