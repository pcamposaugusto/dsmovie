package com.devsuperior.dsmovie.config;

public class SecurityConfig {
	

}

//A configuração de segurança é feita para liberar o acesso do backend para o frontend, já que ambos estarão hospedados em hosts diferentes - front (netlify) e back (heroku)

//Ou seja, a configuração de segurança para permitir o CORS

//CORS - Cross-Origin Resource Sharing (Compartilhamento de recursos com origens diferentes)  - https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS

//Por motivos de segurança, navegadores restringem requisições cross-origin HTTP iniciadas por scripts. Por exemplo, XMLHttpRequest e Fetch API seguem a política de mesma origem (same-origin policy). Isso significa que um aplicativo web que faz uso dessas APIs só poderá fazer solicitações para recursos de mesma origem da qual o aplicativo foi carregado, a menos que a resposta da outra origem inclua os cabeçalhos CORS corretos.
