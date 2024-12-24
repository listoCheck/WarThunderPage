import React from 'react';
import ReactDOM from 'react-dom/client';
import {Select} from "./components/Select";
import {MusicPlayer} from "./components/MusicPlayer";
import {BackVideo} from "./components/BackVideo";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <BackVideo/>
      <MusicPlayer />
      <Select />
  </React.StrictMode>
);

