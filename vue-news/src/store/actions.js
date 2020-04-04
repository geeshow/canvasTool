import { fetchList,
    fetchUserInfo, fetchItemInfo } from '../api/index.js';

export default {
    // FETCH_USER({ commit }, name) {
    //     return fetchUserInfo(name)
    //     .then(( { data } ) => {
    //         commit("SET_USER", data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    // },
    async FETCH_USER(context, name) {
        const response = await fetchUserInfo(name);
        context.commit("SET_USER", response.data);
        return response;
    },
    // FETCH_ITEM({ commit }, id) {
    //     return fetchItemInfo(id)
    //         .then(( { data } ) => {
    //             console.log(data);
    //             commit("SET_ITEM", data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // },
    async FETCH_ITEM(context, id) {
        try {
            const response = await fetchItemInfo(id);
            context.commit("SET_ITEM", response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    // FETCH_LIST({ commit }, pageName) {
    //     return fetchList(pageName)
    //         .then(response => {
    //             commit('SET_LIST', response.data);
    //             return response;
    //         })
    //         .catch(error => console.log(error));
    // },
    async FETCH_LIST(context, pageName) {
        const response = await fetchList(pageName);
        context.commit('SET_LIST', response.data);
        return response;
    }
}