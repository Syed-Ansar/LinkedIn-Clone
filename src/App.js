import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from "./components/Feed"

function App() {
  return (
    <div className="app">


      {/* Header */}
      <Header />
      {/* App body */}
      {/* sidebar */}
      <div className='app_body'>
        <Sidebar />
        {/* feed */}
        <Feed />
        {/* widgets */}
      </div>
    </div>
  );
}

export default App;
