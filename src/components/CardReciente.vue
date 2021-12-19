<template>

    <div class="banner">
        <div class="portada">
            <img :src="data.picture_big" :alt="data.name">
        </div>
        <div class="info" >
            <h3 class="title">{{data.name}}</h3>
            <div class="datos">
                <p class="info__sm">Lo mejor de {{data.name}}</p>
                <p class="seguidores">{{data.nb_fan}} seguidores</p>
            </div>
            <p class="desc"> El artista {{data.name}} tiene {{data.nb_album}} albumns y una cantidad de {{data.nb_fan}} seguidores Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores magnam animi culpa quo inventore, quod a accusantium libero rerum eveniet perspiciatis vero molestiae maxime labore amet itaque rem reiciendis aperiam!  </p>
            <div class="botones">
                <button class="btn1">Reproducir</button>
                <button class="btn2">Seguir</button>
                <i class="uil uil-ellipsis-h"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: Object,
    }
}
</script>

<style scoped>

.banner{
    width: 100%;
    display: flex;
}
.info{
    background:  linear-gradient(0deg, rgba(230, 132, 132, 0.7), rgba(228, 124, 124, 0.7)), url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwl9zHA-MBDcI-S4ktwOt8tImDqvwYgCuNpQ&usqp=CAU);
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;

}
.portada img{
    border: 2px solid #662323;
    height: 300px; 
    width: 250px; 
}
.title{
    color: #fff;
    font-weight: bold;
    padding-left:15px;
    padding-top: 10px;
    letter-spacing: 0.7px;
}

.datos{
    display: flex;
    padding-left: 15px;
}
.info__sm{
    color: #ffffff;
    padding-right: 60px;
}
.seguidores{
    color: #662323;
    font-weight: bold;
}
.desc{
    padding-left: 15px;
    color: #fff;
}
.botones{
    padding-left: 15px;
}
.botones button{

    margin: 30px 50px 0 0;
    width: 120px;
    border-radius: 20px;
    border: 3px solid #E86060;
}
.btn1{
    background: #E86060;
    color: #fff;
}
.btn2{
    color: #E86060;
    background: #e7acac;
}
.botones i{
    color: #fff;
}

    .resultados h2{
        margin: 15px 0;
    }
    .resultado__img{
        display: grid;
        grid-template-columns: repeat(5,1fr);
        gap: 20px;
    }
    .album_name{
        font-weight: bold;
    }
    .album_artist{
        color: gray;
        font-weight: 100;
    }
    .album img{
        width: 150px;
    }

    @media screen and (max-width: 1100px) {
        .botones button{
            position: relative;
            margin-top: -20px;
            width: 120px;
            border-radius: 20px;
            border: 3px solid #E86060;
        }
        
    }
    @media screen and (max-width: 1060px) {
        .botones button{
            position: relative;
            margin-top: -50px;
            width: 80px;
            font-size: 10px;
            border-radius: 20px;
            border: 3px solid #E86060;
        }
        .desc{
            font-size: 15px;
        }
        
    }
    @media screen and (max-width: 1000px) {
        .desc{
            font-size: 10px;
        }
        
    }
    @media screen and (max-width: 800px) {
        .banner{
            display: inline;
        }
        .portada img{
        border: 2px solid #662323;
        height: 300px;
        width: 100%;
        object-fit: cover;  
}
        
    }

</style>