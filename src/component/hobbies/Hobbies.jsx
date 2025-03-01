import { useState } from "react";
import s from "./hobbies.module.css";

export default function Hobbies() {

    let [articlesVisible, setArticlesVisible] = useState(false);

    return(
        <div className={s.hobbies}>
            <button onClick={() => setArticlesVisible(!articlesVisible)}>
                About My Hobbies
            </button>
            {articlesVisible && (
                <div className={s.hobbiesSlider}>
                    <article>
                        <p>
                            I really enjoy programming, reading mangas & comics, 
                            playing videogames, watching anime & films and listening to music.
                        </p>
                        <p>
                            Here are some of my favourite things.
                        </p>
                    </article>
                    <img src="/Portfolio_v1/img/Berserk-Cover.jpg" alt="" />
                    <img src="/Portfolio_v1/img/OnePiece-Cover.jpg" alt="" />
                    <img src="/Portfolio_v1/img/Invincible-Cover.jpg" alt="" />
                    <img src="/Portfolio_v1/img/Blasphemous1-Cover.avif" alt="" />
                    <img src="/Portfolio_v1/img/HotlineMiami1-Cover.webp" alt="" />
                    <img src="/Portfolio_v1/img/djangoUnchained-Cover.webp" alt="" />
                    <img src="/Portfolio_v1/img/EternalSunshineoftheSpotlessMind-Cover.jpg" alt="" />
                </div>
            )}
        </div>
    );
}