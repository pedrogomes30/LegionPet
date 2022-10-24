# Legion Pet 



Esta aplicação tem por objetivo disponibilizar funções necessárias para que diminua a negligencia nos tutores e facilitando
a informação necessária ao cuidado e o acesso a serviços necessários aos seus animais

** projeto em etapa de rascunho, ainda serão implementados os diagramas necessários e postados aqui**

link do projeto: https://1drv.ms/u/s!AlFdlceD9r69luFS2N2s3iIyA6SAfQ?e=VBEioj

Android e IOS e Web para gerenciamento.
desenvolvido com Flutter em linguagem Dart.
banco de dados Firebase.

será realizado um App para os usuários Tutor, Motorista veterinárias/pet shop e veterinários, sendo inteligente para se ajustar de acordo com perfil necessário.

administrador utilizará de plataforma WEB;(necessário brainstorm de ideias nesta etapa)

teremos neste projeto os seguintes atores com suas funções :

tutor animal;
 - podera manter um animal (inicialmente cães, gatos, e roedores);
 - gerenciar formas de pagamento (inicialmente somente em cartão);
 - cadastrar as vacinas realizadas no animal e disponibilizar de um calendário de próximas vacinas.
 - permitir a transferencia de tutoria do animal;(neste caso o animal recebe uma forma de CPF para que seja unico em todo o sistema).
 - permitir a visualização de historico veterinário do animal e consultar receitas/ tratamentos;
 - permitir buscas por uma veterinária/petshop;
 - permitir agendar um serviço na veterinária/petshop, inclusive se houver a necessidade de transporte deste animal, neste caso,
 é possivel a viagem sem a presença do tutor;
 - permitir solicitar uma viagem para o animal independente do destino, este tipo de viagem não é possivel viagem sem o tutor;
 - avaliar, motoristas, veterinárias/petshop e veterinários;
 - nivel de tutor, permite pontuar o quão comprometido o tutor é com seu animal, de acordo com viagens realizadas e historico veterinário;
 - permite exibir um painel de noticias, onde pode-se visualizar produtos, serviços e artigos da plataforma.
 
  -- Futura atualização:
 - manter modelo do animal cadastrado 3D ou 2D;
 - permitir compartilhar as fotos do animal em uma rede com outros tutores;
 - promover concursos como melhores fotos, melhor responsável.
 
veterinária/petshop;
 - propor de um mural da veterinária/petshop, onde é possivel visualizar produtos serviços e avaliação.
 - permitir agendamento de serviços;
 - fornecer o cadastro do seu animal, tutor e historico veterinário.
 - poderá acessar o historico veterinário daquele animal;
 - pagando uma taxa mensal (necessário braistorm de como será feito), poderá enviar promoções à tela inicial do tutor;
 - permite visualizar o historico de produtos/serviços e o quanto a receber;
 - permite sinalizar que o a viagem agendada foi realizada com sucesso;
 
  -- Futura atualização:
 - permite a venda de produtos através do app com taxa de 2,5%; 
 
veterinário;
 - poderá acessar o historico veterinário daquele animal;
 - podera cadastrar novos artigos e poderá receber por view's (inicialmente só será permitido cadastro de artigo);
 - poderá preencher a receita médica para o animal;
 - unico que poderá editar o historico médico do animal;
 - permite visualizar o historico de artigos e o quanto a receber;
 
motorista;
 - permite a alteração de disponibilidade de viagem, e no ato desta mudança poderá selecionar entre porte pequeno e médio, porte grande é necessário veículo adaptado e aprovado;
 - é necessário que o motorista tenha a casa de transporte de acordo;
 - permitir a avaliação do motorista a realizar a viagem;
 - poderá cadastrar até 3 veículos, e selecionar na hora da disponibilidade;
 - será cobrado o valor de acordo com o PORTE X DISTANCIA X TEMPO -5% de taxa de viagem;
 - permite visualizar o historico de viagens e o quanto a receber;
 
administrador.(WEB)
 - acessa todos os dados de viagens realizadas a fim de pontuar os dados coletados de origem, destino, espécie, raça e porte.
 - acessa todas as vendas realizadas na plataforma;
 - avalia e aprova os novos motoristas cadastrados na plataforma;
 - avalia e aprova os novas veterinárias/pet shop na plataforma;
 - avalia e aprova os novos veterinários na plataforma;
 - aprova um artigo do veterinário, após uma avaliação de sua autenticidade a ideia e que o profissional publique um artigo de sua pesquisa.



