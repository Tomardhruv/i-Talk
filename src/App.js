import { ChatEngine } from "react-chat-engine";

import ChatFeed from './components/ChatFeed';

import LoginForm from './components/LoginForm';

import './App.css';

const App = () => {

    if (!localStorage.getItem('username')) return <LoginForm />;

    return (
        <ChatEngine
          height="100vh"
          projectID="6a28bf7b-594a-4ff5-9652-e80d0313e840"
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
          renderChatFeed={(chatAppProps) => <ChatFeed { ... chatAppProps}  />}
          onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
};

export default App;