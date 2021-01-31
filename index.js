class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-']+/g, '')
  }
  static titleize(string){
    let arr = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let finalArr = []
    string.split(' ').forEach(word => {
      if (arr.includes(word)){
        finalArr.push(word)
      } else {
        finalArr.push(this.capitalize(word))
      }
    })
    return this.capitalize(finalArr.join(' '))
  }
}