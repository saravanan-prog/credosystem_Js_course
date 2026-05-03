function setCookies(){

    const applicationName = "Javascript"
    const date = new Date()
    console.log("date====>",date)

    document.cookie = `applicationName=${applicationName}; expiry= Fri, 29 May 2026 12:00:00 UTC`


    let data = document.cookie.split(';')

    console.log("data====>",data.toString().split('='))
}

setCookies()