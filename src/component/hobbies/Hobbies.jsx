import { useState } from "react";
import s from "./hobbies.module.css";
import { useLocalStorage } from "@uidotdev/usehooks";
import { hobbies } from "../../assets/userData.json";

export default function Hobbies() {

    let [isTranslatedToEnglish, setTranslatedToEnglish] = useLocalStorage("translatedToEnglish", true);
    let [articlesVisible, setArticlesVisible] = useState(false);

    return(
        <div className={s.hobbies}>
            {articlesVisible ? (
            <>
                <h3>{isTranslatedToEnglish? "My Hobbies" : "Mis Pasatiempos"}</h3>
                <div className={s.hobbiesSlider}>
                    <article>
                        {isTranslatedToEnglish? 
                        <>
                            <p>
                                I really enjoy programming, reading mangas & comics, 
                                playing videogames, watching anime & films and listening to music.
                            </p>
                            <p>
                                Here are some of my favourite things.
                            </p>
                        </> : <>
                            <p>
                                Disfruto mucho programar, leer mangas y comics, 
                                jugar videojuegos, ver anime y peliculas, y escuchar música.
                            </p>
                            <p>
                                Aquí dejo algunas de mis cosas favoritas.
                            </p>
                        </>}
                    </article>
                    {hobbies.articles.map((article, articleKey) => (
                    <article className={s.imgContainer} key={articleKey}>
                        <img src={hobbies.ARTICLES_IMGS_DIR+article.img} alt="" />
                        <div className={s.type}>
                            <span>{article.type}</span>
                        </div>
                    </article>))}
                    <button>
                        {isTranslatedToEnglish? "Show More" : "Ver Más"}
                    </button>
                </div>
            </>
            ):(
            <button className={s.expand} onClick={() => setArticlesVisible(true)}>
                {isTranslatedToEnglish? "About My Hobbies" : "Acerca de Mis Pasatiempos"}
            </button>
            )}
        </div>
    );
}