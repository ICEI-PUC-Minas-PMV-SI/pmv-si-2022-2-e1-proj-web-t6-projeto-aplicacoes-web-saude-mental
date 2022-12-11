# Programação de Funcionalidades

A descrição das funcionalidades desenvolvidas para atender os requisitos funcionais está apresentada abaixo.

## Requisitos funcionais

### RF-001 - Permitir que o usuário consulte informação sem cadastro

Para atender esse requisito, o usuário terá acesso ao site sem precisar se identificar. Essa medida serve para proteger os dados pessoais do usuário e deixa-lo mais confortável para acessar a página. 

### RF-002 - Permitir que o usuário encontre profissionais aptos 

Ao acessar a página “Profissionais”, o usuário terá a opção de baixar uma lista em arquivo PDF, que terá uma relação de todos os profissionais cadastrado na equipe multiprofissional no site. Esses dados servem para direcionar e facilitar a busca do profissional desejado. Essa medida serve para contemplar o requisito acima. 

### RF-003 - Permitir que o usuário possa deixar notas sobre algum assunto 

Para atender à solicitação do requisito RF-003 foi desenvolvido a página de “Relatos do usuário”, será um espaço reservado para que possa deixar depoimentos, dúvidas sobre algum tema, uma história de vida que queira compartilhar com os demais visitantes. 

## Requisitos Não Funcionais 

### RNF-001 - As informações dos pacientes devem ser protegidas utilizando a lei LGPD 

Os formulários criados possuem método POST de envio de informações, possibilitando o sigilo das mesmas.

### RNF-002 - As informações devem ser claras e objetivas 

O site contará com a página “Transtornos” que terá textos informativos de temas abordados dentro com campo Saúde mental. Esses textos terá uma linguagem clara e objetiva para envolver os leitores e estimulando a divulgação do tema. Dessa forma, cumprindo o requisito exigido. 

### RNF-003 - O sistema deve ser o mais leve possivel para rodar em dispositivos de baixo custo 

Para atingir um maior público alvo que tenha interesse em se informar em Saúde Mental, utilizamos páginas simples, com imagens em .png e .sgv para que o site funcione satisfatoriamente em todos os dispositivos.

### RNF-004 - O sistema deve ser responsivo para rodar no Navegador e em Dispositivos Móveis

Foram criadas versões para desktop e dispositivos moveis, alterando os componentes conforme necessário.

### RNF-005 - Deve processar requisições do usuário em no máximo 3s 

Assim como no requisito não funcional número 3, utilizamos páginas simples, com imagens em .png e .sgv para que o site funcione satisfatoriamente em todos os dispositivos.

# Funcionalidades implementadas em Javascript

Como o nosso site é um site primordialmente expositivo, focamos em três partes principais para o desenvolvimento das funcionalidades em Javascript.

A primeira delas foi o fluxo de cadastro e login, onde implementamos a correta obtenção dos dados e posterior uso dos mesmos para a entrada de pessoas em nosso site. 

A segunda foi o formulário de depoimentos, onde utilizamos ferramentas de formulários também. 

Já a terceira foram as interações animadas, proporcionando uma experiência visualmente agradavel para nossos usuários.

# Imagens do site implementado em versões desktop e mobile

![127 0 0 1_5500_index html (1)](https://user-images.githubusercontent.com/110241105/205983002-e4c25ccb-6542-4c25-ae25-fa3d5c38993d.png)

![127 0 0 1_5500_index html(iPhone 12 Pro)](https://user-images.githubusercontent.com/110241105/205982909-67e8877c-5659-4b25-b2d3-e1ab28712cc6.png)




