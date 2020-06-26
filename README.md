# Proxyscrape

📦 A simple proxyscrape.com wrapper to access the Proxyscrape API.

*NOTE: This library should only be used for production if you provide a paid serialkey in the request options, as only free proxies are scraped without it (in which case development/testing purposes are recommended).*

```javascript
const proxyscrape = require('proxyscrape');
const ProxyscrapeAPI = new proxyscrape();

ProxyscrapeAPI.getProxies({
    proxytype: 'http'
}).then(proxylist => {
    console.log(proxylist);
}).catch(err => {
    console.log(err);
})
```

## Todolist

- [ ] Add tests
- [ ] Allow scraping of multiple proxytypes (eg. HTTP & SOCKS4) in the same request

## Installation

```bash
$ npm install proxyscrape
```

## Quickstart

Full description of all options are available at the official [Proxyscrape.com API documentation](https://proxyscrape.com/api-documentation).

### ProxyscrapeAPI.getProxies()

This method is a wrapper for the "getproxies" Proxyscrape.com API request. The method accepts an options object and returns an array of scraped proxies. The following options are accepted for this method:

- proxytype
- timeout
- ssl
- anonymity
- country
- limit
- serialkey
- age
- status
- averagetimeout
- port

```javascript
const proxyscrape = require('proxyscrape');
const ProxyscrapeAPI = new proxyscrape();

ProxyscrapeAPI.getProxies({
    proxytype: 'socks4',
    timeout: 2500
}).then(proxylist => {
    console.log(proxylist);
}).catch(err => {
    console.log(err);
})
```

### ProxyscrapeAPI.amountProxies()

This method is a wrapper for the "amountproxies" Proxyscrape.com API request. The method accepts an options object and returns the number of available proxies. The following options are accepted for this method:

- proxytype
- timeout
- ssl
- anonymity
- country
- serialkey
- age
- status
- averagetimeout
- port

```javascript
const proxyscrape = require('proxyscrape');
const ProxyscrapeAPI = new proxyscrape();

ProxyscrapeAPI.amountProxies({
    proxytype: 'socks4',
    timeout: 2500
}).then(amount => {
    console.log(amount);
}).catch(err => {
    console.log(err);
})
```

### ProxyscrapeAPI.lastUpdated()

This method is a wrapper for the "lastupdated" Proxyscrape.com API request. The method accepts an options object and returns a string with the last updated time (eg. "Around 29 seconds ago"). The following options are accepted for this method:

- proxytype

```javascript
const proxyscrape = require('proxyscrape');
const ProxyscrapeAPI = new proxyscrape();

ProxyscrapeAPI.lastUpdated({
    proxytype: 'socks4'
}).then(lastupdated => {
    console.log(lastupdated);
}).catch(err => {
    console.log(err);
})
```

### ProxyscrapeAPI.keyStatus()

This method is a wrapper for the "keystatus" Proxyscrape.com API request. The method accepts an options object and returns a string with the status of the provided serial key (eg. valid, alive or expired). The following options are accepted for this method:

- serialkey

```javascript
const proxyscrape = require('proxyscrape');
const ProxyscrapeAPI = new proxyscrape();

ProxyscrapeAPI.keyStatus({
    serialkey: 'SERIAL-KEY-HERE'
}).then(status => {
    console.log(status);
}).catch(err => {
    console.log(err);
})
```

### ProxyscrapeAPI.remaining()

This method is a wrapper for the "remaining" Proxyscrape.com API request. The method accepts an options object and returns a string with the days until expiry of the provided serial key (eg. Key will expire in x days). The following options are accepted for this method:

- serialkey

```javascript
const proxyscrape = require('proxyscrape');
const ProxyscrapeAPI = new proxyscrape();

ProxyscrapeAPI.remaining({
    serialkey: 'SERIAL-KEY-HERE'
}).then(remaining => {
    console.log(remaining);
}).catch(err => {
    console.log(err);
})
```

## License

Copyright (c) 2020 Martin Sit. See LICENSE for details.
