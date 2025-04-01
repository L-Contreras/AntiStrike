import './TeamBanInfo.css';

function TeamBanInfo({ teamId, teamData }) {
    const mapCounts = {};
    
    teamData.forEach(match => {
        const mapName = match.voting?.map?.pick[0];
        if (mapName) {
            mapCounts[mapName] = (mapCounts[mapName] || 0) + 1;
        }
    });

    const mostPlayedMap = Object.entries(mapCounts).reduce((max, entry) => {
        if (entry[1] > max[1]) {
            return entry;
        }
        return max;
    }, ["No maps played", 0]);

    const [mostPlayedMapName, mostPlayedMapCount] = mostPlayedMap;

    return (
        <div className='baninfo'>
            <button className="teampagebutton"><a href={`https://www.faceit.com/en/teams/${teamId}/leagues`} target="_blank" rel="noopener noreferrer">TeamPage</a></button>
            <h3>Most played map: {mostPlayedMapName}</h3>
            <h3>Played : {mostPlayedMapCount} times</h3>
        </div>
    )
}

export default TeamBanInfo;