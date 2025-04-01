import './App.css';
import Header from './components/Header/Header';
import TeamInfo from './components/Team/TeamInfo';
import Home from './components/Home/Home';

import { useState } from 'react';

function App() {
  const [teamData, setTeamData] = useState(null);
  const [teamName, setTeamName] = useState('');
  const [teamLogo, setTeamLogo] = useState('');
  const [teamId, setTeamId] = useState('');

  const isTeamSelected = teamData && teamData.length > 0 && teamName !== '';

  return (
    <div className="App">
      <Header setTeamData={setTeamData} setTeamName={setTeamName} setTeamLogo={setTeamLogo} setTeamId={setTeamId}/>
      {/* show home page when no team is searched */}
      {!isTeamSelected ? <Home/> : <TeamInfo teamData={teamData} teamName={teamName} teamLogo={teamLogo} teamId={teamId}/>}
    </div>
  );
}

export default App;
