const log = (code) => {
    console.log(code)
}

// defined
const img = document.querySelector('img')
const btn = document.querySelector('button')

class girlGenerator {
    constructor(self) {
        this.pageNumber = Math.floor(Math.random() * 100)
        this.imgNumber = Math.floor(Math.random() * 9)
    }

    async grabData(pageNumber) {
        const key = 'PwsdNlmu1WgaOUQ2HO6iDsnAETjibM3k8T6SMNcnjuw'
        const secret = 'HSGztDfwizmDr6Hmaj8u9vzZUMgXJihEkqPXcBbJnYM'
        const src = 'https://api.unsplash.com'
        const topic = `/search/photos?page=${this.pageNumber}&query=hot girl`
        const url = src + topic + '&client_id=' + key
        const response = await fetch(url)
        const data = await response.json()
        this.data = data
        return this.showImg()
    }

    showImg() {
        let image = this.data.results[this.imgNumber].urls.regular
        log(image)
        log(this.pageNumber)
        log(this.imgNumber)
        img.src = image
    }

}

girl1 = new(girlGenerator)
girl1.grabData()

btn.addEventListener('click', () => {
    if (girl1.imgNumber != 10) {
        girl1.imgNumber += 1
        girl1.showImg()
    } else {
        location.reload();
    }
})