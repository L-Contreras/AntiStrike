import TeamBanInfo from "../TeamBanInfo/TeamBanInfo";
import './TeamInfo.css';
import ancientImg from "../../images/ancient.webp";
import mirageImg from "../../images/mirage.webp";
import infernoImg from "../../images/inferno.jpeg";
import nukeImg from "../../images/nuke.webp";
import trainImg from "../../images/train.webp";
import anubisImg from "../../images/anubis.webp";
import dust2Img from "../../images/dust2.webp";
import missingImg from "../../images/missing.webp";

function TeamInfo({ teamData, teamName, teamLogo, teamId }) {

    const mapImages = {
        "de_anubis": anubisImg,
        "de_mirage": mirageImg,
        "de_inferno": infernoImg,
        "de_ancient": ancientImg,
        "de_train": trainImg,
        "de_nuke": nukeImg,
        "de_dust2": dust2Img,
        "missing": missingImg
    }

    return (
        <div className="background">
            <div className='teaminfoContainer'>
                <section className="teaminfo">
                    <h2>{teamName}</h2>
                    {teamLogo ? (
                        <img src={teamLogo} alt={`${teamName} logo`} className='team-logo' />
                    ) : (
                        <p>No logo available</p>
                    )}
                </section>
                <section className='teamleagueinfo'>
                    <h2>Team info</h2>
                    <TeamBanInfo teamData={teamData} teamId={teamId}/>
                </section>
            </div>

            <section className="matches-container">
                {(teamData || []).map((match, index) => {
                    const faction1 = match.teams_info.faction1.name;
                    const faction2 = match.teams_info.faction2.name;
                    const opponent = faction1 === teamName ? faction2 : faction1;

                    return (
                        <div key={index} className="match-box">
                            <section className='matchvsinfo'>
                                <section className="match-schedule-time">
                                    <h2>#{index + 1} - {match.voting?.map?.pick?.[0] || "Unknown"} vs {opponent} </h2>
                                    <p>{new Date(match.schedule).toLocaleString()}</p>
                                </section>   
                                <section className="match-map-info">
                                    <section className="resultWL">
                                        <h2>Server Location</h2>
                                        <p>{match.voting?.location?.pick[0]}</p>
                                        <button><a href={`https://www.faceit.com/en/cs2/room/${match.match_id}`} target="_blank" rel="noopener noreferrer">Match Page</a></button>
                                    </section>
                                    <section className="map-image">
                                        {mapImages[match?.voting?.map?.pick?.[0]] ? (
                                            <img 
                                            src={mapImages[match.voting.map.pick[0]]}
                                            className="map-thumbnail"
                                            alt="map name"
                                            />
                                        ) : (
                                            <img 
                                            src={mapImages["missing"]}
                                            className="map-thumbnail"
                                            alt="default when missing"
                                            />
                                        )}
                                    </section>
                                </section>
                            </section>

                            {/* Looping through the last ticket's entities (maps) only */}
                            <section className="map-bans">
                                <h4>Match bans</h4>
                                <div className="ban-grid">
                                    {(match.match_bans?.tickets || [])
                                        .filter(ticket => ticket.entity_type === "map") // Filter to get the map tickets only
                                        .flatMap(ticket => ticket.entities.map((ban, banIndex) => {
                                            return (
                                                <p className="ban-item" key={banIndex}>
                                                    {banIndex + 1}. {ban.guid} - {ban.status} by {ban.selected_by === 'faction1' ? faction1 : faction2}
                                                </p>
                                            );
                                        }))
                                    }
                                </div>
                            </section>
                        </div>
                    );
                }) || []}
            </section>
        </div>
    )
}

export default TeamInfo;

