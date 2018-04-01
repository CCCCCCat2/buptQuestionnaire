//set cookies
export function setCookies(c_name,value,expire){
    var date = new Date();
    date.setSeconds(date.getSeconds()+expire);
    document.cookie = c_name+"="+escape(value)+";expire="+date.toGMTString()
    console.log(document.cookie);
}

//get cookies
export function getCookies(c_name) {
    if (document.cookie.length>0) {
        let c_start = document.cookie.indexOf(c_name+"=");
        if (c_start!=-1) {
            c_start = c_start+c_name.length+1;
            let c_end = document.cookie.indexOf(";",c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start,c_end));
        }
    }
    return "";
}

export function deleteCookies(c_name) {
    setCookies(c_name,"",-1);
}