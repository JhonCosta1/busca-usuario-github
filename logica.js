let btn = document.querySelector('#btn');
let input = document.querySelector('input[name=github_user]');
let div = document.querySelector('#app');


btn.onclick = function(){
    //Limpar o conteúdo da div
    div.innerHTML = '';

    //Instanciando objeto AJAX

    let ajax = new XMLHttpRequest();

    //Abrir uma conexão / ajax.readyState -> 0 antes da conexão ser aberta
    ajax.open('GET', `https://api.github.com/users/${input.value}`);


    //Enviar a requisição / ajax.readyState -> 1 após abrir a conexão
    ajax.send(null);

    //Criar elemento span
    ajax.onreadystatechange = function(){

        //Criar elemento span
        let spanNone = document.createElement('span');

        //Criar a variável none
        let txtNome = '';

        /*  
            ajax.readyState -> 0 antes da conexão ser aberta
            ajax.readyState -> 1 após abrir a conexão
            ajax.readyState -> 2 headers(cabeçalhos) foram recebidos
            ajax.readyState -> 3 carregando corpo da requisição /corpo dos dados
            ajax.readyState -> 4 O conteudo está pronto pra uso
        */
        if(ajax.readyState === 4){

            if(ajax.status = 200){

                //transforma JSON para array
                usuario = JSON.parse(ajax.responseText);


                // se usuário possui nome
                if(usuario['name'] !== null){
                    txtNome = document.createTextNode(usuario['name']);

                    let img = document.createElement('img');
                    img.setAttribute('src', usuario['avatar_url']);
                    img.setAttribute('alt', usuario['name']);
                    img.setAttribute('width', '45px');
                    img.setAttribute('height', '45px');

                    div.appendChild(img);

                }else{
                    txtNome = document.createTextNode(`Não encontrei o usuário ${input.value}`);
                
                }
                //Adicionar o texto ao span e a span a div
                spanNone.appendChild(txtNome);
                div.appendChild(spanNone);

            }
        }
    }

    
}