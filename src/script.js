const log = (code) => {
    console.log(code)
}

// defined
const img = document.querySelector('img')
const search_boy = document.querySelector('.search_boy')
const search_girl = document.querySelector('.search_girl')
const option = document.querySelector('.option')
const girl = document.querySelector('.girl')
const boy = document.querySelector('.boy')

class FianceFounder {
    constructor(gender) {
        this.gender = gender
        this.pageNumber = Math.floor(Math.random() * 100)
        this.imgNumber = Math.floor(Math.random() * 9)
    }

    async grabData() {
        const key = process.env.API_KEY
        const src = 'https://api.unsplash.com'
        const topic = `/search/photos?page=${this.pageNumber}&query=${this.gender}`
        const url = src + topic + '&client_id=' + key
        const response = await fetch(url)
        const data = await response.json()
        this.data = data
        return this.showImg()
    }

    showImg() {
        let image = this.data.results[this.imgNumber].urls.regular
        img.src = image
    }
}

try {
    girl_gen = new FianceFounder('girl')
    search_girl.addEventListener('click', () => {
        if (girl_gen.imgNumber != 9) {
            girl_gen.imgNumber += 1
            girl_gen.showImg()
        } else {
            location.reload(true);
        }
    })
    girl_gen.grabData()
} catch {
    log('Boy Mode')
}

try {
    boy_gen = new FianceFounder('man-boy')
    search_boy.addEventListener('click', () => {
        if (boy_gen.imgNumber != 9) {
            boy_gen.imgNumber += 1
            boy_gen.showImg()
        } else {
            location.reload(true);
        }
    })
    boy_gen.grabData()
} catch {
    log('Girl Mode')
}