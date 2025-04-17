import React, { useState } from 'react';
import './Search.css';


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

        try {
            const season = selectedSeason;
            const division = selectedDivision;
            const team = searchQuery;
            const baseUrl = process.env.REACT_APP_API_BASE_URL;
            const url = `${baseUrl}/search?season=${season}&division=${division}&team=${team}`;
            const response = await fetch(url);
            const data = await response.json();

            foundTeam = data.team["team_name"];
            teamLogo = data.team["team_avatar_url"];
            teamId = data.team["team_id"];

            for (const match of data.matches) {
                updatedMatches.push(match);
            }

        } catch (error) {
            console.log(error);
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
                <option value="52">Season 52</option>
                <option value="53">Season 53</option>
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