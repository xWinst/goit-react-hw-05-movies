import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'ba6eefe67f978283c5f8594635575ba8';

class Delivery {
    #query = '';
    page = 1;

    set query(newQuery) {
        this.signal = null;
        this.page = 1;
        this.#query = newQuery;
    }

    get query() {
        return this.#query;
    }

    async search() {
        return await this.#fetch('search/movie');
    }

    async getTrend() {
        return await this.#fetch('trending/movie/day');
    }

    async getMovie(id) {
        return await this.#fetch(`movie/${id}`);
    }

    async getCredits(id) {
        return await this.#fetch(`movie/${id}/credits`);
    }

    async getReviews(id) {
        return await this.#fetch(`movie/${id}/reviews`);
    }

    async #fetch(typeRequest) {
        const response = await axios.get(typeRequest, {
            params: {
                api_key: API_KEY,
                query: this.#query,
                page: this.page,
            },
            signal: this.signal,
        });
        return response.data;
    }
}

export default new Delivery();
