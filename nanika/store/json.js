import jsonData from '~/static/json/article.json'

export const state = () => ({
    data: jsonData,
})

export const getters = {
    getAll (state) {
        return state.json
    }
}