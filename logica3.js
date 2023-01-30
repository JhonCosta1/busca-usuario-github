let btn = document.querySelector('#btn');
let div = document.querySelector('#app');

btn.onclick = function(){

    //Limpar div
    div.innerHTML = '';

    //Criar o span
    let spanNome = document.createElement('span');

    //Criar o txtNome
    let txtNome = '';

    //Recuperar o input
    let github_user = document.querySelector('input[name=github_user');
    let user = github_user.value;

    //Limpar input
    github_user.value = '';



    axios.get(`https://api.github.com/users/${user}`)
    .then(function(response){
        if(response.data.name != null){
            txtNome = document.createTextNode(response.data.name);

            let img = document.createElement('img');
            img.setAttribute('src', response.data.avatar_url);
            img.setAttribute('alt', response.data.name);
            img.setAttribute('width', '100px');
            img.setAttribute('height', '100px');

            div.appendChild(img);
        }else{
            txtNome = document.createTextNode('O usuário não possui nome.');

        }
        //adiciona o conteúdo na div
        spanNome.appendChild(txtNome);
        div.appendChild(spanNome);

       
    })
    .catch(function(error){
        txtNome = document.createTextNode('Não foi possível realizar a requisição.');

        //adicionar o conteúdo a div
        spanNome.appendChild(txtNome);
        div.appendChild(spanNome);

    });
}

