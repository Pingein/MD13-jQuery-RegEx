
const validator = (type:string, input:string) => {
    let regex:RegExp
    switch (type) {
        case 'name':
            regex = /(\w ?\.?){2,50}/
            break
        case 'email':
            regex = /\w+[\.\-]?\w*@\w+\.?\w+\.\w{2,}/
            break
        case 'phonenumber':
            regex = /2[\d]{7}/
            break
        case 'password':
            regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-zA-Z])?([a-zA-Z0-9!@#$%^&*]+){8,}/
            break
        default:
            break
    }
    if (!input.match(regex)) {
        return false
    }
    if (input === input.match(regex)[0]) {
        return true
    }
    return false
}



export { validator }