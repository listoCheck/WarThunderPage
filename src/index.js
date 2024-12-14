import React from 'react';
import ReactDOM from 'react-dom/client';
import {Select} from "./components/Select";
import {MusicPlayer} from "./components/MusicPlayer";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <MusicPlayer />
      <Select />
  </React.StrictMode>
);

