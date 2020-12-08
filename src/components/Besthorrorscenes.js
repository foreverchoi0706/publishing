import React from 'react';
import like from '../img/like.png';
import dislike from '../img/dislike.png';
import '../styles/Besthorrorscenes.scss';

const Besthorrorscenes = () => {
    return (
        <div className="besthorrorscenes">
            <header>
                <div className="title">
                    BEST<br />HORROR<br />SCENES
                </div>
                <div className="sub-title">
                    <p>
                        An ever growing collection featuring some of the best scenes in horror.
                    </p>
                    <p>
                        “Best Horror Scenes” is a collection of scenes I feel are some of the most affecting in horror. Some may be simple black cat scares, others may be more subdued or nuanced. Many come from films that aren't necessarily “horror” but have elements or threads of horror, and all have the same general effect: unease, dread, fear, shock, disgust.
                    </p>
                </div>
                <div className="third-party-link">
                    <a href="/sass_clone/Besthorrorscenes">Watch on YouTube</a>
                    <a href="/sass_clone/Besthorrorscenes">Suggest a Scene</a>
                    <a href="/sass_clone/Besthorrorscenes">Get Episode Notices</a>
                    <a href="/sass_clone/Besthorrorscenes">Contact</a>
                    <a href="/sass_clone/Besthorrorscenes">RSS</a>
                    <a href="/sass_clone/Besthorrorscenes">@besthorrorscene</a>
                </div>
            </header>
            <article>
                <div className="movies">
                    <div className="movie-title"><span>56. THE VANISHING (1988)</span> <span>Directed by George Sluizer</span></div>
                    <iframe title="1" id="0" src="https://www.youtube.com/embed/evzts8YaE-c" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    <div className="moive-hit">Do you agree?<img src={like} alt="like"/><img src={dislike} alt="dislike"/></div>
                </div>
                <div className="movies">
                    <div className="movie-title"><span>56. THE VANISHING (1988)</span> <span>Directed by George Sluizer</span></div>
                    <iframe title="1" id="0" src="https://www.youtube.com/embed/evzts8YaE-c" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    <div className="moive-hit">Do you agree?<img src={like} alt="like"/><img src={dislike} alt="dislike"/></div>
                </div>
                <div className="movies">
                    <div className="movie-title"><span>56. THE VANISHING (1988)</span> <span>Directed by George Sluizer</span></div>
                    <iframe title="1" id="0" src="https://www.youtube.com/embed/evzts8YaE-c" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    <div className="moive-hit">Do you agree?<img src={like} alt="like"/><img src={dislike} alt="dislike"/></div>
                </div>
                <div className="movies">
                    <div className="movie-title"><span>56. THE VANISHING (1988)</span> <span>Directed by George Sluizer</span></div>
                    <iframe title="1" id="0" src="https://www.youtube.com/embed/evzts8YaE-c" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    <div className="moive-hit">Do you agree?<img src={like} alt="like"/><img src={dislike} alt="dislike"/></div>
                </div>
                <div className="movies">
                    <div className="movie-title"><span>56. THE VANISHING (1988)</span> <span>Directed by George Sluizer</span></div>
                    <iframe title="1" id="0" src="https://www.youtube.com/embed/evzts8YaE-c" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    <div className="moive-hit">Do you agree?<img src={like} alt="like"/><img src={dislike} alt="dislike"/></div>
                </div>
                <div className="movies">
                    <div className="movie-title"><span>56. THE VANISHING (1988)</span> <span>Directed by George Sluizer</span></div>
                    <iframe title="1" id="0" src="https://www.youtube.com/embed/evzts8YaE-c" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    <div className="moive-hit">Do you agree?<img src={like} alt="like"/><img src={dislike} alt="dislike"/></div>
                </div>
                
            </article>
        </div>
    );
}
export default Besthorrorscenes;