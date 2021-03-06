function changeLanguage(lang) {
    const contents = document.getElementsByClassName("text-content");
    var el = "";
    if (lang === "eng") {
        for (var i = 0; i < contents.length; i++) {
            el = contents[i].getAttribute("name");
            contents[i].innerHTML = content.eng[el];
        }
    } else {
        for (var i = 0; i < contents.length; i++) {
            el = contents[i].getAttribute("name");
            contents[i].innerHTML = content.pt[el];
        }
    }
}

var content = {
    eng: {
        aboutTitle: "About this Project",
        aboutContent:
            "TechBlog is a portfolio project, it's source code can be found at: <a href='https://github.com/JonasMartins/project_b'>https://github.com/JonasMartins/project_b</a>, " +
            "it's goal is simulate an application based in a blog/social network, which uses <b>React JS</b> as front end " +
            "and <b>Node JS</b> as back end, both written in <b>Typescript</b> and as SGBD was chose <b>PostgreSQL</b>. " +
            "This project is similar to a social network, where any " +
            "person with a valid email could create an account and interact with other users, " +
            "keep conversations between them, create, react and comment on posts in your feed, improvements like OAuth and Email Provider, may be added in the future.",
        technologiesTitle: "Technologies Used",
        authTitle: "Authentication",
        authContent:
            "The authentication used in the project uses the library <b>express-session</b>, " +
            "that when a user successfully enters the system, informing his unique e-mail " +
            "and the password, the server returns to the client a <b>cookie</b> with the " +
            "session id that was successfully saved. There are some alternatives for " +
            "store these sessions on the server, a common option is to use <b>Redis</b>" +
            "<a href='https://github.com/productioncoder/express-session-with-redis'>( example )</a>. " +
            "After the cookie is saved on the client with the session id and other information of the logged in user " +
            ", every request sent to the api, it is checked if the id of the sent session " +
            "by the request is saved in the redis store, so there is a user logged in, " +
            "all application routes perform this validation.",
        fileTitle: "File Upload",
        fileContent:
            "Allows the creation of posts with the attachment of multiple images, originally " +
            "the images were hosted on <b>Microsoft Azure</b>, but in the development period " +
            "for convenience, the blob files are now stored on the server's local disk, " +
            "in the future when the project is put into production, the images most likely will back to be stored in the cloud, " +
            "each user can also change their profile picture.",
        notiTitle: "Notification System",
        notiContent:
            "Initially, some user interactions with the system can generate notifications, " +
            "currently, the interactions that cause notifications are, reacting to a post, commenting on a post or " +
            "reply to a post comment, where the affected person receives a new notification. In the example below " +
            "a user reacts and comments on a post, this generates a notification to the post author, this is done " +
            "using <b>GraphQL Subscriptions</b>, which uses the <b>Web Socket</b> protocol. ",
        chatTitle: "Real Time Chats",
        chatContent:
            "A notification system extension that simulates a real-time conversation, " +
            "in the example below, a conversation is simulated, where the user who receives messages " +
            "also receive a notification on the message's arrive moment.",
        connTitle: "Connections",
        connContent:
            "Connections between users, which also generate notifications, when a user " +
            "has a connection, he can chat with her and receive her posts in his feed, " +
            "the example below shows a connection request and the confirmation of the invitation by the other user.",
    },
    pt: {
        aboutTitle: "Sobre este Projeto",
        aboutContent:
            "TechBlog ?? um projeto de portif??lio, o seu c??digo fonte se encontra em: <a href='https://github.com/JonasMartins/project_b'>https://github.com/JonasMartins/project_b</a>, " +
            "o seu objetivo ?? criar uma aplica????o baseada em um blog/rede social, que utiliza <b>React JS</b> como front-end " +
            "e <b>Node JS</b> como backend, ambos escritos em <b>Typescript</b> e foi usado <b>PostgreSQL</b> como SGBD. " +
            "Este projeto semelhantemente a uma rede social, onde qualquer " +
            "pessoa com um e-mail v??lido poderia criar uma conta e interagir com outros usu??rios, " +
            "manter conversas entre eles, criar, reagir e comentar a posts no seu feed, melhorias como OAuth e Provedor de Email, podem ser adicionadas no futuro.",
        technologiesTitle: "Tecnologias Usadas",
        authTitle: "Autentica????o",
        authContent:
            "A autentica????o usada no projeto usa a biblioteca <b>express-session</b>, " +
            "que quando um usu??rio loga com sucesso no sistema, informando o seu e-mail " +
            "??nico e o password, o servidor devolve ao cliente, um <b>cookie</b> com o " +
            "id da sess??o que foi sava com sucesso. Existem algumas alternativas para " +
            "armazenar essas sess??es no servidor, uma op????o comum ?? usar <b>Redis</b> " +
            "<a href='https://github.com/productioncoder/express-session-with-redis'>( exemplo )</a>. " +
            "Ap??s o cookie ser salvo no cliente com o id da sess??o e outras informa????es do " +
            "usu??rio logado, toda requisi????o enviada a api, ?? verificado se o id da sess??o enviada " +
            "pela requisi????o est?? salvo na store do redis, ent??o existe um usu??rio logado ," +
            "todas as rotas da aplica????o realizam essa verifica????o.",
        fileTitle: "Upload de Arquivos",
        fileContent:
            "Permite a cria????o de posts com anexa????o de multiplas imagens, originalmente " +
            "as imagens eram hospedadas na <b>Microsoft Azure</b>, porem no per??odo de desenvolvimento " +
            "por quest??es de facilidade, os arquivos blob passaram a ser armazenados no disco local do servidor, " +
            "no futuro quando o projeto for colocado em produ????o, as imagens voltaram a ser armazenadas na n??vem, " +
            "cada usu??rio tamb??m pode alterar sua imagem de perfil.",
        notiTitle: "Sistema de Notifica????es",
        notiContent:
            "Inicialmente algumas itera????es do usu??rio com o sistema podem gerar notifica????es, " +
            "atualmente, as itera????es que causam notifica????es s??o, rea????o a um post, comentar em um post, " +
            "replicar a um coment??rio de post, onde o afetado recebe uma nova notifica????o. No exemplo abaixo " +
            "um usu??rio reage e comenta um post, isso gera uma notifica????o para o autor do post, isso ?? feito " +
            "usando <b>GraphQL Subscriptions</b>, que utiliza o protocolo <b>Web Socket</b>.",
        chatTitle: "Conversas em tempo real",
        chatContent:
            "Uma extens??o do sistema de notifica????es que simula uma conversa em tempo real " +
            "no exemplo abaixo ?? simulada uma conversa, onde o usu??rio que recebe mensagens " +
            "e recebe a notifica????o no momento em que a mensagem chega.",
        connTitle: "Conex??es",
        connContent:
            "Conex??es entre usu??rios, que tamb??m geram notifica????es, quando um usu??rio " +
            "tem uma conex??o, ele pode conversar com ela e receber as suas postagens no seu feed, " +
            "no exemplo abaixo ?? mostrado uma requisi????o de conex??o e a confima????o do convite pelo outro usu??rio.",
    },
};
