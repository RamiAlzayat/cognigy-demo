import React, { useEffect } from 'react';
import { useAppDispatch } from './app/hooks';
import { initApiAsync, messageHandler } from './slices/chatSlice';

import ChatButton from './components/ChatButton/ChatButton';
import ChatWindow from './components/Chat/ChatWindow';

import logo from './assets/images/logo.svg';
import 'animate.css';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    initChat();
  }, []);

  const initChat = () => {
    dispatch(initApiAsync());
    dispatch(messageHandler());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ChatWindow />
      <ChatButton />
    </div>
  );
};

export default App;
