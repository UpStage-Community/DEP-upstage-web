import axios from 'axios'
import axiosDefaults from 'axios/lib/defaults'

var debug = process.env.NODE_ENV !== 'production',
    baseURL = 'http://localhost:3000'
if (!debug) { baseURL = 'http://api.upstagecommunity.com'}
axiosDefaults.baseURL = baseURL

export function getProductions(){
    return axios({
        requestId: 'productions',
        method: 'get',
        url: '/productions',
        cancelPreviousReqeust: true
    })
}

export function getCompanies(){
    return axios({
        requestId: 'companies',
        method: 'get',
        url: '/companies',
        cancelPreviousReqeust: true
    })
}

export function postSession(data) {    
    return axios({
        requestId: 'session',
        method: 'post',
        url: '/sessions',
        data
    })
}

export function getCurrentSession() {
    const authToken = localStorage.getItem('user_token')
    return axios({
        requestId: 'session',
        method: 'get',
        url: `/sessions/${authToken}`
    })
}

export function deleteSession() {
    const authToken = localStorage.getItem('user_token')
    return axios({
        requestId: 'session',
        method: 'delete',
        url: `/sessions/${authToken}`,
    })
}