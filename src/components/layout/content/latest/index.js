import MoviesCard from '../../../utils/cards'
import './index.scss'
import ShowMore from '../../../utils/showMore';

const LatestMoviesNdTv =({ name, movies })=>{
    return(
        <section className="latest-movies">
            <h1>{name}</h1>
            <div className="latest-movies-container">
                {
                    movies.map((movie) => <MoviesCard movie={movie} />)
                }
            </div>
            <ShowMore route={'movies'} />
        </section>
    )
}

export default LatestMoviesNdTv