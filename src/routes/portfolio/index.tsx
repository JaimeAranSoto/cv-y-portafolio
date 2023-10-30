import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export interface FichaProyectoProps {
    titulo: string, año: number, descripcion: string, tags: string[], link?: string, img: string, hoverImg?: string, linkText?: string
}

export const FichaProyecto = component$<FichaProyectoProps>((props) => {

    const className = "group bg-slate-300 flex flex-wrap w-10/12 sm:w-1/2 md:w-[30%] h-auto rounded-2xl shadow-lg transition hover:shadow-indigo-600 duration-100 outline outline-blue-500 ring-4 "
    return (
        <article class={className} key={props.titulo + "-project"} >
            <div class="transition-all w-full h-48 bg-[length:auto_100%] bg-center group-hover:bg-[length:auto_110%] duration-300" style={{ backgroundImage: `url('${props.img}')` }} >
                <div class="text-2xl w-full px-4 py-1 text-center bg-gradient-to-b from-black to-[rgba(0,0,0,0.3)] bg-opacity-80">
                    {props.titulo}<i class="text-sm ml-2">({props.año})</i>
                </div >
            </div>

            <div class="p-4 flex flex-wrap gap-2 items-start h-auto text-slate-950 ">
                <div>{props.descripcion}</div>
                <div class="basis-full h-fit flex flex-wrap gap-2">{props.tags.map(element => <span class="badge" key="">{element}</span>)}</div>
                {props.link &&
                    <a href={props.link} target='_blank' class="btn">{props.linkText || 'Ver proyecto'}</a>}
            </div>
        </article >
    );
});

export default component$(() => {
    return (
        <section class="max-w-screen-xl m-auto mt-4">
            <div class="bg-indigo-900 p-4 rounded-2xl text-center m-auto" role="banner">
                <p class="font-bold">Bienvenid@ a mi portafolio 👋</p>
                <p class="text-sm">Aquí podrás ver algunos de los proyectos de videojuegos o experiencias interactivas en las que he participado</p>
            </div>
            <section class="flex m-auto gap-10 flex-wrap my-8 justify-center">
                <FichaProyecto
                    titulo='Nova Assault'
                    año={2017}
                    descripcion='Videojuego para PC desarrollado como proyecto de Universidad,
                adjudicado a un fondo de Macrofacultad y finalista como Mejor Juego de Estudiantes por VGChile en 2019.'
                    tags={["Construct 2", "Programación", "Música", "Diseño"]}
                    link='https://cirostudios.itch.io/nova-assault'
                    img='/img/projects/nova-assault-banner.jpg'
                />
                <FichaProyecto
                    titulo='ALMA'
                    año={2019}
                    descripcion='Videojuego de plataformas 3D para PC desarrollado por un grupo de 3 estudiantes,
                presentado en Festigame 2019.'
                    tags={["Unity", "Programación", "Música", "Diseño", "Arte"]}
                    link='https://cirostudios.itch.io/nova-assault'
                    img='/img/projects/alma-landscape.jpg'
                />
                <FichaProyecto
                    titulo='Beat Box Factory'
                    año={2021}
                    descripcion='Juego web de puzle para una GameJam. El jugador debe coordinarse con el patrón rítmico para sobrevivir.'
                    tags={["Unity", "Programación", "Música", "Diseño", "Arte"]}
                    link='https://stivarts.itch.io/beat-box-factory'
                    img='/img/projects/beat-box-factory-thumbnail.png'
                />
                <FichaProyecto
                    titulo='Busted'
                    año={2021}
                    descripcion='Juego para Web/PC de puzle para una GameJam con temática "Camuflaje".'
                    tags={["Unity", "Programación", "Música", "Diseño", "Arte"]}
                    link='https://stivarts.itch.io/busted'
                    img='/img/projects/busted-banner.jpg'
                    hoverImg='/img/projects/busted-preview-gif-1.gif'
                />
                <FichaProyecto
                    titulo='Fuel Runs Out'
                    año={2021}
                    descripcion='Juego para Web de acción/puzzle para una GameJam. El jugador debe llegar a la meta antes de acabar con el combustible de un cohete.'
                    tags={["Unity", "Programación", "Música", "Diseño", "Arte"]}
                    link='https://stivarts.itch.io/fuel-runs-out'
                    img='/img/projects/fuel-runs-out-thumbnail.png'
                    hoverImg='/img/projects/fuel-runs-out-preview-1'
                />
                <FichaProyecto
                    titulo='Graffiti Run'
                    año={2016}
                    descripcion='Mi primer videojuego. Clon de Jetpack Joyride con mecánicas de Flappy Bird añadidas.'
                    tags={["Construct 2", "Programación", "Música", "Arte"]}
                    link='https://stivarts.itch.io/graffiti-run'
                    img='/img/projects/graffiti-run-landscape.png'
                />
                <FichaProyecto
                    titulo='Havoc In The Dungeon'
                    año={2020}
                    descripcion='Puzzle/Aventura para móviles con mecánicas roguelike.'
                    tags={["Unity", "Programación", "Música", "Diseño", "Arte", "Mobile"]}
                    link='https://play.google.com/store/apps/details?id=com.stivarts.havoc'
                    img='/img/projects/havoc-in-the-dungeon-thumbnail.png'
                    hoverImg='/img/projects/havoc-in-the-dungeon-preview-1.png'
                />
                <FichaProyecto
                    titulo='Mr. Toonbird'
                    año={2019}
                    descripcion='Plataformero 2D para web creado para una GameJam en dos días entre 3 desarrolladores.'
                    tags={["Unity", "Programación", "Música", "Diseño", "Arte"]}
                    link='https://watitagames.itch.io/mr-toonbird'
                    img='/img/projects/mr-toonbird-thumbnail.png'
                    hoverImg='/img/projects/mr-toonbird-preview-gif.gif'
                />
                <FichaProyecto
                    titulo='Raver Champions'
                    año={2019}
                    descripcion='Multijugador local y online para Web y PC con mecánicas de fútbol + patines.'
                    tags={["Unity", "Programación", "Música", "Diseño", "Arte", "Photon PUN"]}
                    link='https://watitagames.itch.io/raver-champions'
                    img='/img/projects/raver-champions-thumbnail.png'
                    hoverImg='/img/projects/raver-champions-preview-gif.gif'
                />
                <FichaProyecto
                    titulo='Resquack'
                    año={2020}
                    descripcion='Juego Web desarrollado para una Jam de 3 días. Lleva a los patitos al otro lado de la calle sin que los atropellen.'
                    tags={["Unity", "Programación"]}
                    link='https://sorgardteam.itch.io/resquack'
                    img='/img/projects/resquack-thumbnail.png'
                    hoverImg='/img/projects/resquack-preview-1.png'
                />
                <FichaProyecto
                    titulo='The Doge Pound: Feeding Game'
                    año={2022}
                    descripcion='Juego multijugador online de tipo Social Sim + Minijuegos. (Non-released)'
                    tags={["Unity", "Programación", "Música", "Photon Fusion"]}
                    // link='https://thedogepoundnft.com/'
                    img='https://thedogepoundnft.com/static/media/thefeedinggame-img.0e44f267.png'
                />
                <FichaProyecto
                    titulo='Museo Virtual del Maule'
                    año={2023}
                    descripcion='Experiencia interactiva con temática cultural sobre la Región del Maule.'
                    tags={["Unity", "Programación"]}
                    link='https://museovirtualdelmaule.cl/'
                    img='https://museovirtualdelmaule.cl/images/5_small.jpg'
                />
                <FichaProyecto
                    titulo='Demo Plus'
                    año={2021}
                    descripcion='Desarrollo de videojuego educativo sobre educación csívica, democracia e historia.'
                    tags={["Construct 3", "Programación"]}
                    img='/img/projects/demo-plus.png'
                    link='https://invadelab.cl/portfolio/demo-plus-ciudadania/'
                />
                <FichaProyecto
                    titulo='Ayudalia'
                    año={2021}
                    descripcion='Desarrollo de experiencia interactiva para la detección de posibles problemas de nivel atencional en niños.'
                    tags={["Construct 3", "Programación"]}
                    img='/img/projects/ayudalia.png'
                    link='https://invadelab.cl/portfolio/ayudalia/'
                />
                <FichaProyecto
                    titulo='Burger Z'
                    año={2021}
                    descripcion='Videojuego publicitario casual para Entel Perú. El jugador debe cortar las hamburguesas malas para ganar puntos.'
                    tags={["Construct 3", "Programación"]}
                    img='/img/projects/burger-z.jpg'
                    link='https://invadelab.cl/portfolio/burger-z-entel-peru/'
                />
                <FichaProyecto
                    titulo='Space Nike'
                    año={2021}
                    descripcion='Advergame para Nike en colaboración con Space Jam. Mecánica de encestar pelota en aro de basketball.'
                    tags={["Unity", "Programación", "Mobile"]}
                    img='/img/projects/space-nike.webp'
                    link='https://invadelab.cl/portfolio/juego-space-nike/'
                />
                <FichaProyecto
                    titulo='Pasapalabra Lenovo'
                    año={2021}
                    descripcion='Desarrollo de parte de videojuego estilo "Pasapalabra" que fue utilizado en un evento de la marca Lenovo. Incluye otros juegos como palabras cruzadas y Letra a Letra.'
                    tags={["Unity", "Programación"]}
                    img='https://invadelab.cl/wp-content/uploads/2022/10/img-destacada-PasapalabrasLenovo.png'
                    link='https://invadelab.cl/portfolio/pasapalabra-lenovo/'
                />
                <FichaProyecto
                    titulo='Bioinformática Virtual: Geocatching y Trivia'
                    año={2021}
                    descripcion='Aplicación con temática de Bioinformática en que el usuario debe buscar códigos QR localizados en un establecimiento y responder preguntas para coleccionar medallas.'
                    tags={["Unity", "Programación", "Realidad Aumentada", "Mobile"]}
                    img='/img/projects/bioinformatica-virtual.webp'
                    link='https://bioinformaticavirtual.utalca.cl/'
                />
                <FichaProyecto
                    titulo='Simulador Industrial'
                    año={2021}
                    descripcion='Experiencia interactiva en primera persona en el que el usuario debe recrear procesos industriales en módulos como electricidad, automotriz, minería, etc.'
                    tags={["Unreal Engine", "Programación"]}
                    img='/img/projects/sim-industrial.png'
                    link='https://youtu.be/fenRtQV7oD8'
                />
                <FichaProyecto
                    titulo='Simulador de Seguridad'
                    año={2021}
                    descripcion='Experiencia interactiva que enseña sobre la importancia de la seguridad industrial y los procesos solicitados en un ambiente recreado dentro de la aplicación.'
                    tags={["Unreal Engine", "Programación"]}
                    img='/img/projects/sim-seguridad.png'
                    link='https://youtu.be/pBiF-VTub6I'
                />
            </section>

            <div class="bg-indigo-900 p-4 rounded-2xl text-center m-auto" role="banner">
                <p class="font-bold">Otros 👀</p>
                <p class="text-sm">Actividades y proyectos de diversa índole en los que he sido partícipe</p>
            </div>

            <section class="flex m-auto gap-10 flex-wrap my-8 justify-center">
                <FichaProyecto
                    titulo='Asistencia a Gamescom 2022'
                    año={2022}
                    descripcion='Fui representando a mi empresa Sorgard Team al evento de videojuegos más importante de Europa,
                    realizando networking con diversas empresas y personalidades de la industria.'
                    tags={["Networking", "Eventos"]}
                    img='https://colbundigital.cl/wp-content/uploads/2022/08/sorgard-team-en-gamescom-850x560.jpeg'
                    link='https://colbundigital.cl/2022/08/30/empresa-talquina-de-desarrollo-de-videojuegos-se-presento-en-la-gamescom-la-feria-electronica-mas-importante-de-europa/'
                    linkText='Ver noticia'
                />

                <FichaProyecto
                    titulo='Página Web: Sorgard Team'
                    año={2022}
                    descripcion='Diseño y desarrollo de la web de Sorgard Team, separando las secciones Sorgard XR (experiencias inmersivas) y Videojuegos.'
                    tags={["Desarrollo Web", "React"]}
                    img='/img/projects/pagina-sorgard-team.png'
                    link='https://sorgardteam.com'
                    linkText='Ver sitio web'
                />
                <FichaProyecto
                    titulo='ComoSuena'
                    año={2023}
                    descripcion='Medio autogestionado sobre música emergente nacional, incluye perfiles en redes sociales y sitio web. Actualmente inactivo.'
                    tags={["Desarrollo Web", "Música", "Networking", "Social"]}
                    img='/img/projects/comosuena.png'
                    link='https://comosuena.cl/'
                    linkText='Ver sitio web'
                />
                <FichaProyecto
                    titulo='OST Composing Jam #2: Stella'
                    año={2021}
                    descripcion='Set de 4 tracks para la banda sonora de un juego ficticio. Se usó el tema "Panspermia" para implementar en el soundtrack. Fui seleccionado para
                    ser parte del álbum recopilatorio oficial'
                    tags={["Música"]}
                    img='https://img.itch.zone/aW1nLzY4NTYyODMuanBn/315x250%23c/EmdnQ6.jpg'
                    link='https://arantismusic.itch.io/stella'
                    linkText='Ver más'
                />
                <FichaProyecto
                    titulo='OST Composing Jam #6: Sea of Saviors'
                    año={2023}
                    descripcion='Banda sonora creada para un videojuego ficticio. El tema del videojuego era "Tick Tock", lo que se debía implementar en todos los temas musicales.'
                    tags={["Música"]}
                    img='https://img.itch.zone/aW1nLzEyOTk1NDkxLnBuZw==/original/k244Qj.png'
                    link='https://arantismusic.itch.io/sea-of-saviors-soundtrack'
                    linkText='Ver más'
                />
            </section>
        </section>
    )
});

export const head: DocumentHead = {
    title: "Jaime Arancibia | Portafolio",
    meta: [
        {
            name: "description",
            content: "Portafolio de videojuegos desarrollados y proyectos en los que ha participado Jaime Arancibia Soto.",
        },
        {
            property: "og:image",
            content: "/img/media/meta-preview-jaime-arancibia.png",
        }
    ],
};
