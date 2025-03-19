import { useState, useEffect } from "react";
import s from "./hobbies.module.css";
import { useLocalStorage } from "@uidotdev/usehooks";
import { hobbies } from "../../assets/userData.json";

const ImgCarousel = ({article, en}) => {

    const {imgList, type} = article;
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imgList.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [imgList.length]);

    return (
        <article className={s.imgContainer+" "+(imgList.length > 1 ? s.imgCarousel : "")}>
            <img src={hobbies.ARTICLES_IMGS_DIR+imgList[currentIndex]} alt="img"/>
            <div className={s.type}>
                <span>{en? type.en : type.es}</span>
            </div>
        </article>
    );
};

export default function Hobbies() {

    let [isTranslatedToEnglish] = useLocalStorage("translatedToEnglish", true);
    let [isArticlesVisible, setArticlesVisible] = useState(false);

    return(
        <div className={s.hobbies+" "+(isArticlesVisible? s.scrollable : "")}>
            {isArticlesVisible ? (
            <>
                <h3>{isTranslatedToEnglish? "My Hobbies" : "Mis Pasatiempos"}</h3>
                <div className={s.hobbiesSlider}>
                    <article>
                        {isTranslatedToEnglish? 
                        <>
                            <span>Taekwon-Do ITF</span>
                            <span>Scout (S.Ca.Di)</span>
                            <span>Mangas</span>
                            <span>Comics</span>
                            <span>Videogames</span>
                            <span>Anime</span>
                            <span>Films</span>
                            <span>Music</span>
                        </> : <>
                            <span>Taekwon-Do ITF</span>
                            <span>Scout (S.Ca.Di)</span>
                            <span>Mangas</span>
                            <span>Comics</span>
                            <span>Videojuegos</span>
                            <span>Anime</span>
                            <span>Películas</span>
                            <span>Música</span>
                        </>}
                    </article>
                    {hobbies.articles.map((article, articleKey) => (
                        <ImgCarousel article={article} key={articleKey} en={isTranslatedToEnglish}/>
                    ))}
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