'use strict';

const axios = require('axios');

// Constants
const apiURL = 'https://api.proxyscrape.com';
const anonymity = ['elite', 'anonymous', 'transparent', 'all'];
const proxyTypes = ['http', 'socks4', 'socks5', 'all'];
const sslTypes = ['yes', 'no', 'all'];


class ProxyscrapeAPI {

    /**
     * Create a Proxyscrape API param string
     *
     * @param {Object} options The options to include in param string
     * @return {String} API param string
     */
    _createParamString(options = {}) {
        let paramString = '';

        if (options.proxytype !== undefined && proxyTypes.includes(options.proxytype.toLowerCase())) {
            paramString += `&proxytype=${options.proxytype}`;

        } else if (options.proxytype !== undefined && !proxyTypes.includes(options.proxytype.toLowerCase())) {
            throw new Error(`Invalid proxy type option: ${options.proxytype}`);
        }

        if (options.ssl !== undefined && sslTypes.includes(options.ssl.toLowerCase())) {
            paramString += `&ssl=${options.ssl}`;

        } else if (options.ssl !== undefined && !sslTypes.includes(options.ssl.toLowerCase())) {
            throw new Error(`Invalid ssl option: ${options.ssl}`);
        }

        if (options.anonymity !== undefined && anonymity.includes(options.anonymity.toLowerCase())) {
            paramString += `&anonymity=${options.anonymity}`;

        } else if (options.anonymity !== undefined && !anonymity.includes(options.anonymity.toLowerCase())) {
            throw new Error(`Invalid anonymity option: ${options.anonymity}`);
        }

        if (options.timeout !== undefined) {
            paramString += `&timeout=${options.timeout}`;
        }

        if (options.country !== undefined) {
            paramString += `&country=${options.country}`;
        }

        if (options.limit !== undefined) {
            paramString += `&limit=${options.limit}`;
        }

        if (options.serialkey !== undefined) {
            paramString += `&serialkey=${options.serialkey}`;
        }

        if (options.port !== undefined) {
            paramString += `&port=${options.port}`;
        }

        if (options.age !== undefined) {
            paramString += `&age=${options.age}`;
        }

        if (options.averagetimeout !== undefined) {
            paramString += `&age=${options.averagetimeout}`;
        }

        if (options.status !== undefined) {
            paramString += `&age=${options.status}`;
        }

        return paramString;
    }

    /**
     * Scrape proxylist from API
     *
     * @param {Object} options The options to include in param string
     * @return {Array} Proxylist
     */
    getProxies(options) {
        let paramString = this._createParamString(options);
        let reqURL = `${apiURL}?request=getproxies${paramString}`;

        return axios.get(reqURL)
            .then((response) => {
                return response.data.split(/\r?\n/).filter(n => n);
            })
            .catch((err) => {
                throw new Error(err.response.data);
            });

    }
    /**
     * Scrape proxy count from API
     *
     * @param {Object} options The options to include in param string
     * @return {Number} Proxy count
     */
    amountProxies(options) {
        let paramString = this._createParamString(options);
        let reqURL = `${apiURL}?request=amountproxies${paramString}`;

        return axios.get(reqURL)
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                throw new Error(err.response.data);
            });
    }
    /**
     * Scrape last updated time from API
     *
     * @param {Object} options The options to include in param string
     * @return {String} Last updated time (eg. "Around 29 seconds ago")
     */
    lastUpdated(options) {
        let paramString = this._createParamString(options);
        let reqURL = `${apiURL}?request=lastupdated${paramString}`;

        return axios.get(reqURL)
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                throw new Error(err.response.data);
            });
    }
    /**
     * Scrape status of serial key from API
     *
     * @param {Object} options The options to include in param string
     * @return {String} Status of serial key (eg. valid, alive or expired)
     */
    keyStatus(options) {
        let paramString = this._createParamString(options);
        let reqURL = `${apiURL}?request=keystatus${paramString}`;

        return axios.get(reqURL)
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                throw new Error(err.response.data);
            });
    }
    /**
     * Scrape days until expiry of serial key from API
     *
     * @param {Object} options The options to include in param string
     * @return {String} Days until expiry of serial key (eg. Key will expire in x days)
     */
    remaining(options) {
        let paramString = this._createParamString(options);
        let reqURL = `${apiURL}?request=remaining${paramString}`;

        return axios.get(reqURL)
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                throw new Error(err.response.data);
            });
    }
}

module.exports = ProxyscrapeAPI;