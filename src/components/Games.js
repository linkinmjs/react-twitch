import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import api from '../Api';

const Games = () => {

    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await api.get('https://api.twitch.tv/helix/games/top');

            //asignando sizes sobre url de imagen
            let dataArray = result.data.data;
            let finalArray = dataArray.map(game => {
                let newURL = game.box_art_url
                    .replace('{width}', '300')
                    .replace('{height}', '300');
                game.box_art_url = newURL;
                return game;
            })
            //console.log(finalArray)
            setGames(finalArray);
        }
        fetchData();
    }, []);

    return ( 
        <div>
            <h1> Most Popular Games</h1>
            <div className='row'>
                {games.map(game => (
                    <div className='col-4'  key={game.id}>
                        <div className='card'>

                            <img className="card-img-top" src={game.box_art_url} alt={game.name}/>
                            <div className="card-body">
                                <h5 className="card-title">{game.name}</h5>
                                <button className="btn btn-success">
                                    <Link className="link"
                                        to={{
                                            pathname: "game/" + game.name,
                                            state: {
                                                gameID: game.id
                                            }
                                        }}>{game.name} streams{" "}
                                    </Link>
                                </button>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Games;