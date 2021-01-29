import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className={"header"}>
        <img src={'https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg'} />
      </header>
      <nav className={"nav"}>
          <div>
              <a>Profile</a>
          </div>
          <div>
              <a>Messages</a>
          </div>
          <div>
              <a>News</a>
          </div>
          <div>
              <a>Music</a>
          </div>
          <div>
              <a>Settings</a>
          </div>

      </nav>
      <div className={"content"}>
          <img src={"https://img.freepik.com/free-vector/purple-3d-modern-background-design_53876-87399.jpg?size=626&ext=jpg&ga=GA1.2.1464808425.1601683200"} />
        <div>
            Main content
        </div>
          <div>
              ava+description
          </div>
          <div>
              My posts
              <div>
                  New post
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
