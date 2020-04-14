console.log('process',process.env)

let Host = {}
if(process.env.NODE_ENV == "development"){
	Host = {
		baseUrl:"http://192.168.0.15"
	}
}

export default Host