import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API 함수들을 정리
function fetchList(pageName) {
    console.log('fetchList');
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

function fetchUserInfo(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchItemInfo(itemid) {
    return axios.get(`${config.baseUrl}item/${itemid}.json`);
}


export {
    fetchList,
    fetchUserInfo, fetchItemInfo
}

