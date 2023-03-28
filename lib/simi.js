const fetch = require('node-fetch')
const axios = require('axios')

const simih = async (text) => {
	try {
		const sami = await fetchJson(`https://api.simsimi.net/v2/?text=${text}&lc=id&cf=false`)
		const res = await sami.success
    console.log(`res= ${res}`)
		return res
	} catch {
		//return 'Simi ga tau apa yang anda ngomong, bahasa alien yah kak?'
	}
}


module.exports = { simih }