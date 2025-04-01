import React, { useState } from 'react';
import './Search.css';
import faceitData from '../../data/faceitData.json';


function SearchBar( { setTeamData, setTeamName, setTeamLogo, setTeamId }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSeason, setSelectedSeason] = useState('');
    const [selectedDivision, setSelectedDivision] = useState('');

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSeasonChange = (e) => setSelectedSeason(e.target.value);
    const handleDivisionChange = (e) => setSelectedDivision(e.target.value);



    const handleSubmit = async (event) => {
        event.preventDefault();
        await getTeamBans(searchQuery.toLowerCase());
        setSearchQuery('');
    };

    async function getTeamBans(teamToFind) {
        const updatedMatches = [];
        let foundTeam = '';
        let teamLogo = '';
        let teamId = '';

        // will put functinon to call api
        const matches = faceitData[selectedSeason]?.[selectedDivision] || [];
        if (!matches || matches.length === 0) {
            console.log('No matches found');
            return;
        }

        for (const match of matches) {
            if (teamToFind === match.name.toLowerCase()) {
                foundTeam = match.name;
                teamLogo = match.avatar_url;
                teamId = match.team_id;
                updatedMatches.push(...match.matches);
            }

        }
        
        updatedMatches.sort((a, b) => a.schedule - b.schedule);
        setTeamName(foundTeam);
        setTeamLogo(teamLogo);
        setTeamData(updatedMatches);
        setTeamId(teamId);
    }

    return (
        <form onSubmit={handleSubmit} className="search-container">
            <select className="selectbox" value={selectedSeason} onChange={handleSeasonChange}>
                <option value="">Select Season</option>
                <option value="season52">Season 52</option>
                <option value="season53">Season 53</option>
            </select>

            <select className="selectbox" value={selectedDivision} onChange={handleDivisionChange}>
                <option value="">Select Division</option>
                <option value="Main">Main</option>
                <option value="Advance">Advance</option>
                <option value="ECL">ECL</option>
            </select>

            <input
            type="text"
            placeholder="Search Team Name"
            required
            value={searchQuery}
            onChange={handleInputChange}
            className="searchbar"
            />
            <button type='submit'>Search</button>
        </form>
    )
}

export default SearchBar;