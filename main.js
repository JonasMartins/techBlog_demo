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
            "TechBlog é um projeto de portifólio, o seu código fonte se encontra em: <a href='https://github.com/JonasMartins/project_b'>https://github.com/JonasMartins/project_b</a>, " +
            "o seu objetivo é criar uma aplicação baseada em um blog/rede social, que utiliza <b>React JS</b> como front-end " +
            "e <b>Node JS</b> como backend, ambos escritos em <b>Typescript</b> e foi usado <b>PostgreSQL</b> como SGBD. " +
            "Este projeto semelhantemente a uma rede social, onde qualquer " +
            "pessoa com um e-mail válido poderia criar uma conta e interagir com outros usuários, " +
            "manter conversas entre eles, criar, reagir e comentar a posts no seu feed, melhorias como OAuth e Provedor de Email, podem ser adicionadas no futuro.",
        technologiesTitle: "Tecnologias Usadas",
        authTitle: "Autenticação",
        authContent:
            "A autenticação usada no projeto usa a biblioteca <b>express-session</b>, " +
            "que quando um usuário loga com sucesso no sistema, informando o seu e-mail " +
            "único e o password, o servidor devolve ao cliente, um <b>cookie</b> com o " +
            "id da sessão que foi sava com sucesso. Existem algumas alternativas para " +
            "armazenar essas sessões no servidor, uma opção comum é usar <b>Redis</b> " +
            "<a href='https://github.com/productioncoder/express-session-with-redis'>( exemplo )</a>. " +
            "Após o cookie ser salvo no cliente com o id da sessão e outras informações do " +
            "usuário logado, toda requisição enviada a api, é verificado se o id da sessão enviada " +
            "pela requisição está salvo na store do redis, então existe um usuário logado ," +
            "todas as rotas da aplicação realizam essa verificação.",
        fileTitle: "Upload de Arquivos",
        fileContent:
            "Permite a criação de posts com anexação de multiplas imagens, originalmente " +
            "as imagens eram hospedadas na <b>Microsoft Azure</b>, porem no período de desenvolvimento " +
            "por questões de facilidade, os arquivos blob passaram a ser armazenados no disco local do servidor, " +
            "no futuro quando o projeto for colocado em produção, as imagens voltaram a ser armazenadas na núvem, " +
            "cada usuário também pode alterar sua imagem de perfil.",
        notiTitle: "Sistema de Notificações",
        notiContent:
            "Inicialmente algumas iterações do usuário com o sistema podem gerar notificações, " +
            "atualmente, as iterações que causam notificações são, reação a um post, comentar em um post, " +
            "replicar a um comentário de post, onde o afetado recebe uma nova notificação. No exemplo abaixo " +
            "um usuário reage e comenta um post, isso gera uma notificação para o autor do post, isso é feito " +
            "usando <b>GraphQL Subscriptions</b>, que utiliza o protocolo <b>Web Socket</b>.",
        chatTitle: "Conversas em tempo real",
        chatContent:
            "Uma extensão do sistema de notificações que simula uma conversa em tempo real " +
            "no exemplo abaixo é simulada uma conversa, onde o usuário que recebe mensagens " +
            "e recebe a notificação no momento em que a mensagem chega.",
        connTitle: "Conexões",
        connContent:
            "Conexões entre usuários, que também geram notificações, quando um usuário " +
            "tem uma conexão, ele pode conversar com ela e receber as suas postagens no seu feed, " +
            "no exemplo abaixo é mostrado uma requisição de conexão e a confimação do convite pelo outro usuário.",
    },
};
