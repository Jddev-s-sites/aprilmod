fetch("https://api.hyplix.com/users/discord/702169463595729009/avatar", {
    method: "GET"
}).then((x) => {
    x.json().then(data => {
        document.getElementById("april").setAttribute("src", data.url)
    })
})