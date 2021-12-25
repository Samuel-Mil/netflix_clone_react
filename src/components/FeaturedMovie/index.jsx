import styles from "./style.module.css";

export function FeaturedMovie({item}) {
  console.log(item);

  const plural = item.number_of_seasons !== 1 ? 's' : '';
  const genres = [];

  for(let i in item.genres){
    genres.push(item.genres[i].name);
  }

  return (
    <section className={styles.featuredMovie} style={{
      backgroundImage: `url('https://image.tmdb.org/t/p/original${item.backdrop_path}')`
    }}>
      <div className={styles.vertical}>
        <div className={styles.horizontal}>
          <h1 className={styles.name}>{item.original_name}</h1>

          <div className={styles.info}>
            <span className={styles.points}>{item.vote_average} points</span>
            <span className={styles.year}>{item.first_air_date.slice(0,4)}</span>
            <span className={styles.seasons}>
              {item.number_of_seasons} temporada{plural}
            </span>
          </div>

          <p className={styles.description}>{item.overview.substring(0, 400)}...</p>
          <div className={styles.buttons}>
            <a href="">Assistir</a>
            <a href="">+ Minha Lista</a>
          </div>
          <p className={styles.genders}><strong>Gêneros:</strong> {genres.join(', ')}</p>
        </div>
      </div>
    </section>
  );
}
