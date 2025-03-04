import { useState } from "react";
import s from "./hobbies.module.css";
import { hobbies } from "../../assets/userData.json";

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
                    {hobbies.articles.map((article, articleKey) => (
                    <article className={s.imgContainer} key={articleKey}>
                        <img src={hobbies.ARTICLES_IMGS_DIR+article.img} alt="" />
                        <div className={s.type}>
                            <span>{article.type}</span>
                        </div>
                    </article>))}
                </div>
            )}
        </div>
    );
}