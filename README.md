<svg fill="none" viewBox="0 0 81 24" width="100%" height="50px"><g fill="#0051EB"><path d="M23.67 16.815l1.131-1.85c1.076.614 2.3.924 3.541.897 1.132 0 1.924-.471 1.924-1.222s-.871-1.121-2.105-1.469l-1.007-.291c-2.081-.55-3.496-1.334-3.496-3.262.011-2.421 1.935-4.013 4.854-4.013a8.17 8.17 0 014.639 1.2L31.85 8.8a6.44 6.44 0 00-3.134-.785c-1.132 0-1.89.403-1.89 1.12 0 .718.77 1.066 1.845 1.335l1.03.291c2.104.55 3.767 1.491 3.767 3.644 0 2.152-2.048 3.844-5.182 3.844a7.082 7.082 0 01-4.617-1.434zM45.981 10.347v7.667h-2.986l-.068-1.738a4.397 4.397 0 01-1.618 1.462 4.446 4.446 0 01-2.127.511c-2.558 0-4.277-1.524-4.277-3.788 0-2.265 2.104-3.89 5.26-3.89.913.005 1.822.095 2.716.269v-.224c0-1.626-1.131-2.601-2.964-2.601a4.371 4.371 0 00-2.897.953l-1.346-1.794a7.55 7.55 0 015.058-1.57c3.122 0 5.25 1.862 5.25 4.743zm-3.11 2.578a12.413 12.413 0 00-2.332-.247c-1.46 0-2.398.673-2.398 1.715 0 1.043.667 1.66 1.923 1.66a2.94 2.94 0 002.079-.97 2.885 2.885 0 00.727-2.158zM59.457 10.347v7.667h-3.111V10.84a2.56 2.56 0 00-.839-1.955 2.607 2.607 0 00-2.035-.668 2.636 2.636 0 00-2.04.667 2.589 2.589 0 00-.846 1.956v7.174H47.52V5.818h2.987v1.536a5.02 5.02 0 011.816-1.337c.7-.303 1.46-.444 2.224-.412a4.622 4.622 0 011.904.263c.608.22 1.163.565 1.627 1.014.464.448.827.988 1.065 1.586.237.597.344 1.237.314 1.879zM71.925 10.347v7.667H68.94l-.068-1.738a4.397 4.397 0 01-1.618 1.462 4.446 4.446 0 01-2.127.511c-2.569 0-4.277-1.524-4.277-3.788 0-2.265 2.104-3.89 5.26-3.89.913.005 1.822.095 2.716.269v-.224c0-1.626-1.131-2.601-2.975-2.601a4.326 4.326 0 00-2.874.953l-1.347-1.794a7.526 7.526 0 015.024-1.57c3.157 0 5.272 1.862 5.272 4.743zm-3.1 2.578a12.558 12.558 0 00-2.33-.247c-1.471 0-2.4.673-2.4 1.715 0 1.043.657 1.66 1.913 1.66a2.942 2.942 0 002.086-.966 2.885 2.885 0 00.731-2.162zM81 5.605l-.215 2.813c-2.557 0-4.243 1.222-4.243 3.06v6.536H73.43V5.818h2.999v1.625a5.565 5.565 0 012.068-1.448A5.614 5.614 0 0181 5.605zM16.971 9.382a3.796 3.796 0 00-1.98-.897 1.012 1.012 0 01-.817-.67.989.989 0 01.24-1.023 3.978 3.978 0 00.294-5.448 3.945 3.945 0 00-1.277-.973 3.978 3.978 0 00-4.504.75L1.233 8.764a4 4 0 00-.328 5.403 3.89 3.89 0 002.387 1.346 1.01 1.01 0 01.81.673.989.989 0 01-.244 1.02 4 4 0 00-.283 5.46 4.014 4.014 0 005.793.19l7.807-7.747a3.903 3.903 0 00-.204-5.728z"></path></g></svg> 
# Desafio 1

Construa um sistema de gerenciamento de conte??dos.
O sistema deve ser composto por:
-   Uma API Rest.
-   Uma interface web que consume essa API.

A API para gerenciamento de conte??dos tem apenas uma entidade: a entidade `Conteudo`.
-   A API deve responder JSON.
-   Os conte??dos podem ser do tipo aula ou do tipo resumo.
-   Cada conte??do tem um nome, um tipo e um campo que nos diz quanto tempo em m??dia demora-se para consumir aquele material.

A API deve ser capas de listar os conte??dos, al??m de poder adicionar, remover e editar um conte??do.
Construa os endpoints usando os verbos HTTP.

A interface Web deve ser uma SPA em React.
Nessa interface vamos poder visualizar os conte??dos, al??m de poder executar as opera????es de gerenciamento nos mesmos.

## **Aten????o**
N??o se preocupe com a beleza da sua interface, n??o ?? esse o intuito do exerc??cio!

## Requisitos
-   Voc?? deve usar **Javascript/Typescript** neste desafio.
-   Voc?? deve usar **MySql** para salvar os dados nesse desafio.
-   Forkar esse desafio e criar o seu projeto (ou workspace) usando a sua vers??o desse reposit??rio, t??o logo acabe o desafio, submeta um _pull request_.
    -   Caso voc?? tenha algum motivo para n??o submeter um _pull request_, crie um reposit??rio privado no Github e fa??a todo desafio na branch **master**. 
    -   Nos d?? acesso e nos avise por email.
-   O c??digo precisa rodar em macOS ou Ubuntu (oferecemos um setup b??sico com container Docker).

## Crit??rio de avalia????o

-   **Organiza????o do c??digo**: Separa????o de m??dulos e componentes, view e model, back-end e front-end
-   **Clareza**: O README explica de forma resumida qual ?? o problema e como pode rodar a aplica????o?
-   **Assertividade**: A aplica????o est?? fazendo o que ?? esperado? Se tem algo faltando, o README explica o porqu???
-   **Legibilidade do c??digo** 
-   **Tratamento de erros** 
-   **Seguran??a**: Existe alguma vulnerabilidade clara?
-   **Qualidade dos testes** (N??o esperamos cobertura completa)
-   **Hist??rico de commits** (estrutura e qualidade)
-   **UX**: A interface ?? de f??cil uso e auto-explicativa? A API ?? intuitiva?
-   **Escolhas t??cnicas**: A escolha das bibliotecas, banco de dados, arquitetura, etc, ?? a melhor escolha para a aplica????o?

## Nesse reposit??rio
Nesse repo j?? oferecemos um setup b??sico com docker. 
-   Na subpasta Api temos uma api b??sica utilizando express. Essa api roda na porta 8080.
-   Na subpasta web temos uma SPA b??sica utilizando react, criado com create-react-app. Essa SPA roda na porta 3000.
-   Al??m disso, temos um banco mysql j?? configurado. Para se concetar nesse banco, voc?? pode utilizar o usu??rio `root` com senha `_hard_password_` na porta `3306` conectando no schema `sanar`.

Voc?? pode rodar todos os container com o comando 

<pre>docker-compose-up --build</pre>

## D??vidas

Quaisquer d??vidas que voc?? venha a ter, consulte as issues para ver se algu??m j?? n??o a fez e caso voc?? n??o ache sua resposta, abra voc?? mesmo uma nova issue!

Boa sorte! ;)
