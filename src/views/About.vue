<template>
  <b-container fluid class="p-5">
    <b-row align-v="center">
      <b-col class="d-none d-md-block d-lg-block">
        <b-img :src="require('../assets/ventana.jpg')" fluid alt="profile"> </b-img>
      </b-col>
      <b-col class="px-5 about-me">
        <h2 class="mb-4">Nacido en el departamento de San José, viviendo en Montevideo desde el año 2009, y sacando fotos desde el 2016. En aquel entonces creí era necesario incursionar en alguna actividad relacionada con la creatividad, por lo que me hice de un nuevo pasatiempo, la fotografía.</h2>

        <p>Disfruto cada caminata con la cámara sin importar si vuelvo con algo presentable o no. Lo más importante es salir. Después, si encuentro algo interesante que mostrar o no es otra historia. Y buscarle la vuelta para mostrarlo de forma interesante es lo divertido.</p>
        
        <p>Actualmente estoy usando una Fuji x100T, una sony a7II con lente Zuiko 50mm 1.8 (mi preferido),
           y cada tanto consigo algun rollo para la Praktica MTL3 que le robé a mi viejo.</p>
      </b-col>
    </b-row>
    <b-row class="d-md-none d-lg-none"> 
      <b-img :src="require('../assets/ventana.jpg')" fluid alt="profile"> </b-img>
    </b-row>
  </b-container>
</template>
