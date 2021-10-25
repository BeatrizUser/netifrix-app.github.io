const ApiKey = "1d9273dbd96231c04fe9327fb7c9e289";
const ApiBase = "https://api.themoviedb.org/3";
const Language = "language=pt-BR"
/*
- originais netflix
- recomendados
- em alta
- ação
- comédia
- terror
- romance
- documentarios
- search multi movies (https://api.themoviedb.org/3/search/multi/?query=${valor do texto a ser pesquisado}&api_key=1d9273dbd96231c04fe9327fb7c9e289&language=Pt-BR)
*/

const basicFetch = async(endpoint)=>{
    const req = await fetch(`${ApiBase}${endpoint}`);
    const json = await req.json();
    return json;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    getHomeList: async ()=>{
        return [
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                itens: await basicFetch(`/discover/tv?with_network=213&${Language}&api_key=${ApiKey}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                itens: await basicFetch(`/trending/all/week?${Language}&api_key=${ApiKey}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                itens: await basicFetch(`/movie/top_rated?${Language}&api_key=${ApiKey}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                itens: await basicFetch(`/discover/movie?with_genres=28&${Language}&api_key=${ApiKey}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                itens: await basicFetch(`/discover/movie?with_genres=35&${Language}&api_key=${ApiKey}`)
            },
            {
                slug: 'terror',
                title: 'Terror',
                itens: await basicFetch(`/discover/movie?with_genres=27&${Language}&api_key=${ApiKey}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                itens: await basicFetch(`/discover/movie?with_genres=10749&${Language}&api_key=${ApiKey}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                itens: await basicFetch(`/discover/movie?with_genres=99&${Language}&api_key=${ApiKey}`)
            },
        ];
    },
    getMovieInfo: async (movieId, type)=>{
        let info ={};
        
        if(movieId) {
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?${Language}&api_key=${ApiKey}`);
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?${Language}&api_key=${ApiKey}`);
                break;
                default:
                    info = null;
                break;
            }
        }

        return info;
    }
}