<h1 align="center">
  Squad Management Toll
</h1>

![image](https://user-images.githubusercontent.com/84051326/183400021-ab705600-ab6c-4b8f-a0a2-da3179693bc4.png)

## 🏃‍♂️Jornada

- Procurei entender como desenvolveria as telas, comecei a desenvolver a primeira tela do My teams com grid layout e logo após desenvolver a segunda tela como "modal" usando flex-box.
- Desenvolver o evento para (activeModal e closeModal) para ter acesso a tela do Create your team.
- Próximo passo procurei entender como eu iria criar o meu DB, optei em armazenar os meus dados no próprio local Storage.
- Comecei a realizar os teste da estrutura que iria enviar.![entendendo-como-implementar](C:\Users\lucas\Desktop\entendendo-como-implementar.JPG)
- Comei a ter os resultados esperados com os teste e então iniciar os envio através dos inputs.![image-20220808114838587](C:\Users\lucas\AppData\Roaming\Typora\typora-user-images\image-20220808114838587.png)
- Depois de validar os inputs os envios foram realizados.![input-enviando-ao-banco](C:\Users\lucas\Desktop\input-enviando-ao-banco.JPG)
- Então fui testando os métodos do CRUD para conseguir criar, enviar, editar e deletar qual quer item do meu DB.![metodos-criar-deletar-salvar](C:\Users\lucas\Desktop\metodos-criar-deletar-salvar.JPG)
- Como os envios através dos inputs já estava sendo feito, iniciei o consumo da API para que eu pudesse ter acesso as informações dos jogadores(obs: a API dada de exemplo possuía uma quantidade de requisição diária, como precisa fazer alguns teste a mais, optei em criar uma própria API, incluindo alguns dos principais jogadores).![image-20220808120409471](C:\Users\lucas\AppData\Roaming\Typora\typora-user-images\image-20220808120409471.png)
- Após já conseguir os resultados na tela a traves do input de pesquisa, eu iniciei o drag and drop da lista de jogadores.
- Com o evento de drag and drop eu conseguir obter o texto dos jogadores no evento de arrastar, então a partir disso eu criei um um array com as informações do jogadores e transformei este array em um array de objeto.![formatando-array](C:\Users\lucas\Desktop\formatando-array.JPG)
- Então a parti desses dados enviado ao meu DB eu conseguir obter o time que possui a maior ou menor idade, e também consumir qual jogador foi o mais escolhido ou menos escolhido.
- Para obter as obter as informações do jogador mais escolhido e o menos escolhido, eu busquei todos os id no DB e fiz uma comparação de qual id se repetia. ![new](C:\Users\lucas\Desktop\new.JPG)

## 🧪 Tecnologias

Esse projeto foi desenvolvido com a seguintes tecnologia:

- [JavaScript puro ](https://www.javascript.com/)

## ⚙️ Como executar

Para fazer o projeto rodar em sua máquina e bem simples!

Sem mais delongas, para iniciá-lo, siga os passos abaixo:

```sh
# PROJETO
$ npm run dev
```

## ☕ Contatos

você vai me encontrar em qualquer uma das redes sociais abaixo:

<a href="lucas: lucassantos.dsilv@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23EA4335?style=for-the-badge&logo=gmail&logoColor=white" target="_blank" margin-right="10px"></a>
<a href="https://www.linkedin.com/in/lucasasntos-s/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
