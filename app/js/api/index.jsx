import axios from 'axios'

export function getProductions(){
    return axios({
        requestId: 'productions',
        method: 'get',
        url: 'http://localhost:3000/productions',
        cancelPreviousReqeust: true
    })
}

export function getCompanies(){
    return axios({
        requestId: 'companies',
        method: 'get',
        url: 'http://localhost:3000/companies',
        cancelPreviousReqeust: true
    })
}

export function postSession(data) {    
    return axios({
        requestId: 'session',
        method: 'post',
        url: 'http://localhost:3000/sessions',
        data
    })
}