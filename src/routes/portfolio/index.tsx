import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export interface FichaProyectoProps {
    titulo: string, año: number, descripcion: string, tags: string[], link?: string, img: string, hoverImg?: string
}

export const FichaProyecto = component$<FichaProyectoProps>((props) => {

    const className = "py-4 flex flex-wrap w-10/12 sm:w-1/2 md:w-[30%] h-auto lg:h-96 rounded-2xl shadow-lg hover:shadow-indigo-600 outline outline-offset-2 outline-blue-500"
    const background = "linear-gradient(to bottom,black,rgba(0,0,0,0)),url('" + String(props.img) + "')";
    return (
        <div class={className} key={props.titulo + "-project"} style={{ background: background, backgroundSize: 'cover', backgroundPosition: 'center' }} >
            <div class="text-2xl w-full h-14 px-4 text-center">
                {props.titulo}<i class="text-sm ml-2">({props.año})</i>
            </div >

            <div class="px-4 flex flex-wrap gap-2 items-end">
                <div class="bg-black bg-opacity-50 rounded-2xl p-3">{props.descripcion}</div>
                <div class="basis-full h-fit flex flex-wrap gap-2">{props.tags.map(element => <span class="badge" key="">{element}</span>)}</div>
                {props.link &&
                    <a href={props.link} target='_blank' class="btn">Ver proyecto</a>}
            </div>
        </div >
    );
});

export default component$(() => {
    return (
        <section class="max-w-screen-xl m-auto mt-4">
            <div class="bg-indigo-900 p-4 rounded-2xl text-center m-auto" role="banner">
                <p class="font-bold">Bienvenid@ a mi portafolio</p>
                <p class="text-sm">Aquí podrás ver algunos de los proyectos en los que he participado.</p>
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
                    tags={["Unity", "Programación", "Música", "Diseño", "Arte"]}
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

            </section>
        </section>
    )
});

export const head: DocumentHead = {
    title: "Jaime Arancibia | Portafolio",
    meta: [
        {
            name: "description",
            content: "Perfil del desarrollador de videojuegos Jaime Arancibia.",
        },
    ],
};
