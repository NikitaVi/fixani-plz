const _api = {
    key: '?api_key=8a04a9518865c4fe7f298409a0c201cb',
    base: "https://api.themoviedb.org/3/movie/"
  }
  
  class MovieapiService {
    async getResource(url) {
        const res = await fetch(url);
      
        return await res.json();
    }
  
    getPopularMovies() {
      return this.getResource(`${_api.base}popular${_api.key}`)
    }

    // getMovies() {
    //   return this.getResource(`${_api.base}popular${_api.key}`)
    // }
  };

  export default MovieapiService;