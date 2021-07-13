import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import imgRafael from './components/imgRafael/imgRafael.PNG';
import imgCatolica from './components/imgCatolica/catolica.jpg';
import imgCaelum from './components/imgCaelum/caelum.png';
import imgEmail from './components/imgEmail/imgEmail.PNG'
import imgEndereco from './components/imgEndereco/imgEndereco.PNG'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={imgRafael} 
          nome="Rafael Bento Dev. ;)" 
          descricao="Oi, eu sou o Rafael. Estou aprendendo a ser programador, aonde cheguei até agora jamais estive. Obrigado Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="small-container">
        <CardPequeno
          imagem={imgEmail}
          nome="E-mail: "         
          descricao="rafaelbento.ti@gmail.com"
        />
      </div>
      <div className="small-container">
        <CardPequeno
          imagem={imgEndereco}
          nome="Endereço: "         
          descricao="Brasília - DF"
        />
      </div>
 
      <div className="page-section-container">
        <h2>Experiências pessoais</h2>
        <CardGrande 
          imagem={imgCatolica} 
          nome="Universidade Católica de Brasília" 
          descricao="Formado em Análise e Desenvolvimento de Sistemas." 
        />
        
        <CardGrande 
          imagem={imgCaelum} 
          nome="Caelum"
          descricao="Curso de JAVA (Back-End) e Orientação a Objetos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
