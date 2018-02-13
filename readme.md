## Simply checks whether a url is live or not.

### Installation
    
``` bash
yarn add live-url
```

Or...

``` bash
npm install live-url --save
```

---
### Usage

It just takes one parameter, the url. You __must__ provide a protocol, (https / http).

#### Promises

``` javascript
const liveUrl = require('live-url');

liveUrl('https://bbc.co.uk')
    .then(res => {
        // is live
    })
    .catch(e => {
        // is not live
    })
```

#### Async/Await

``` javascript
async function (url) {
    try {
        const res = await liveUrl(url)
        // URL is live
    } catch (e) {
        // URL is not live
    }
}
```