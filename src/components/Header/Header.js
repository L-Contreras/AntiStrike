import './Header.css';
import SearchBar from '../Search/Search';

function Header( { setTeamData, setTeamName, setTeamLogo, setTeamId }) {
    return (
        <div className='Header'>
            
            <h1>AntiStrike</h1>
            <SearchBar setTeamData={setTeamData} setTeamName={setTeamName} setTeamLogo={setTeamLogo} setTeamId={setTeamId}/>
        </div>
    )
}

export default Header;