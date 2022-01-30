const url = new Request('http://localhost:8080/');

// function contact(){
//     await fetch(url+"cadastrarContato", {
//         method:"POST", 
//         headers:{
//             "Accept":"application/json",
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify({
//             nomeCompleto:"Gabriel",
//             telefone:"32662514",
//         })
//     })
// } 

function contact(){
    console.log("fodase")
    fetch("http://localhost:8080/cadastrarContato", {
    method:"POST", 
    headers:{
        "Accept":"application/json",
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin": "http://127.0.0.1:8080/index.html"
    },
    body:JSON.stringify({
        nomeCompleto:"Gabriel",
        telefone:"32662514",
    })
})
}

function createContato()
{
    var form = document.querySelector("form");
    var data = new FormData(form);
    // console.log(data.get("nome"));
    fetch("http://localhost:8080/cadastrarContato", {
        method: "POST",
        body: JSON.stringify({
                nomeCompleto: data.get("nome"), 
                telefone: data.get("telefone"),
            }),
        headers: {"Content-type": "application/json"}
        }).then(response => {
            if(!response.ok) {
                
                response.text().then(text => {
                    console.log(text)
                    throw Error(text)
                })
            }
            else {
                console.log(response.json().then(t => {
                    console.log(t);
                }));
                alert("Contato cadastrado com sucesso!");
                // location.reload();
            }    
        })
        .catch(error => {
            console.log("erro: ", error);
        })
}