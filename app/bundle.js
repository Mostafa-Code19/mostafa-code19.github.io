(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const test = require('../test')


const log = (code) => {
    console.log(code)
}

// defined
const img = document.querySelector('img')

class girlGenerator {
    constructor(self) {
    }

    async grabData() {
            const data = await test.scrapeGrils()
            return data
    }

    showImg(url) {
        img.src = url
    }

}

girl1 = new(girlGenerator)
girl1.grabData()
},{"../test":2}],2:[function(require,module,exports){
// const puppeteer = require('puppeteer')

const scrapeGrils = async () => {
    const url = 'https://jangal.com'
    const browser = await puppeteer.launch({headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage()
    await page.setDefaultNavigationTimeout(0)
    await page.goto(url)

    const response = await page.evaluate(() => {
      const itemName = document.querySelector('.footAbout > p')
      return (itemName.innerHTML).trim()
    })

    await browser.close();

    console.log(response)
    return response
}

module.exports = {
  scrapeGrils
}
},{}]},{},[1]);
