import React from "react";
import Menu from "../../components/Menu"
import BannerMain from "../../components/BannerMain"
import Carousel from "../../components/Carousel"
import Footer from "../../components/Footer"
import di from "../../data/dados_iniciais.json"

function Home() {
  return (
    <div style={{background:"#141414"}}>
      <Menu />
      <BannerMain videoTitle={di.categorias[0].videos[0].titulo}
      url={di.categorias[0].videos[0].url}
      videoDescription="Sla Teste"/>
      <Carousel ignoreFirstVideo category={di.categorias[0]}/>
      <Carousel category={di.categorias[1]}/>
      <Carousel category={di.categorias[2]}/>
      <Carousel category={di.categorias[3]}/>
      <Carousel category={di.categorias[4]}/>
      <Carousel category={di.categorias[5]}/> 
      <Footer />
    </div>
  )
}

export default Home;
