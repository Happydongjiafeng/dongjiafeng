import crypto from 'crypto';
function cipher(cipherStr) { //加密函数
    let encrypted = '';
    try {
        let key = crypto.randomBytes(16);
        let iv = crypto.randomBytes(16);       
        const cipher = crypto.createCipheriv('aes-128-cbc',key,iv)
        cipher.update(cipherStr,'utf-8','hex')
        encrypted = cipher.final('hex')
        return encrypted
    } catch (error) {
        return console.log(error);
    }
}
console.log(cipher('hello world'));
