
import './App.css';
import image from './img_avatar2.png';
import React from "react";

const toDoCategories = [
    {numbers: 20, category: 'Work'},
    {numbers: 30, category: 'University'},
    {numbers: 10, category: 'Home'},
    {numbers: 40, category: 'Personal'},
];

const tasks = [
    {title: 'meeting', category: 'Work',status: false},
    {title: 'washing dishes', category: 'Home' ,status: false},
    {title: 'watching tv', category: 'Personal' ,status: false},
    {title: 'doing home works', category: 'University' ,status: false},
    {title: 'meditation', category: 'Personal' ,status: false},
    {title: 'shopping groceries', category: 'Home' ,status: false},
];

function App() {
  return (
      <div style={{display:"flex",flexDirection:"row"}}>
          <div className="personalCard">
              <img className="avatar" src={image}/>
              <h1>Hello, it's my todo!</h1>
              <p>Categories</p>
              <p>Tasks</p>
              <p>Reminders</p>
              <p>My Personal Info</p>

          </div>
          <div className="App">
              <header>
                  <div><img src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"/></div>
                  <div>
                      <img src="https://img.icons8.com/ios-glyphs/24/000000/search.png"/>
                      <img src="https://img.icons8.com/fluency-systems-regular/24/000000/alarm.png"/>
                  </div>
              </header>
              <h1> What's up! </h1>
              <body>
              <div>
                  <p>CATEGORIES</p>
                  <div className="categoryCardContainer">
                      {toDoCategories.map(card =>
                          <div className="categoryCard">
                              <h6>{card.numbers} tasks</h6>
                              <h3>{card.category}</h3>
                          </div>)}
                  </div>
              </div>
              <div>
                  <p>TODAY'S TASKS</p>
                  <div className="todoCardContainer">
                      {tasks.map(task =>
                          <div className="todoCard">
                              <div style={{display:"flex",alignItems:'center'}}>
                                  <img src="https://img.icons8.com/material-outlined/24/000000/circled.png"/>
                                  <p>{task.title}</p>
                              </div>
                              <div style={{display:"flex",alignItems:'center'}}>
                                  <img src="https://img.icons8.com/material-outlined/24/000000/edit--v1.png"/>
                                  <img src="https://img.icons8.com/fluency-systems-regular/24/000000/filled-trash.png"/>
                              </div>

                          </div>)}
                  </div>
              </div>
              </body>
              <footer style={{textAlign:"center"}}>
                  <img src="https://img.icons8.com/ios/50/000000/add--v1.png"/>
              </footer>
          </div>
      </div>


  );
}

export default App;
