const http = require('http');
const { URL } = require('url');

module.exports = async (url) => {
    let u;
    try {
        u = new URL(url);
    } catch (error) {
        if (error.code === 'ERR_INVALID_URL') {
            throw new Error('URL was invalid, make sure you provide a protocol (http/https).')
        } else {
            throw error
        }
    }
    const host = u.host;
    const path = u.pathname;
    const protocol = u.protocol;
    if (protocol !== 'http:' && protocol !== 'https:') {
        throw new Error('Module only supports http/https.');
    }
    const options = {
        followAllRedirects: true,
        methods: 'HEAD',
        host,
        port: 80,
        path 
    };
    return new Promise((resolve, reject) => {
        const req = http.request(options, res => {
            resolve({ statusCode: res.statusCode, statusMessage: res.statusMessage, host, protocol, path, live: true });
        })
        req.on('error', err => {
            reject({ live: false });
        })
        req.end();
    })
}