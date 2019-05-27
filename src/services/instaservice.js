export default class InstaService {
    constructor () {
        this._apiBase = 'http://localhost:3000/'
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`); // async - асинхронность await - ожидаемый результат 

        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url}, received ${res.status}`)
        } // Создание ошибки (если нет ответа от сервера)

        return res.json();
    }

    getAllPosts = async () => {
        const res = await this.getResource('posts/');
        return res;
    }
}