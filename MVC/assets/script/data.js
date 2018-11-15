var _string = null
var data = {
    setString(value){
        _string = value
        
    },
    addString(value){
        _string = _string===null?value:_string+value
    },
    getString(){
        return _string
    },
    parseString(){
        return _string.split(",")
    },
    getFormat(format){
        return parseInt(this.parseString()[0]).toString(format)
    },
}
module.exports = data
