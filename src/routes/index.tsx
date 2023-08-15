import { Slot, component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { BsGeoAltFill, BsCalendar, BsBook, BsPersonCircle, BsStars } from "@qwikest/icons/bootstrap";

export interface DatoProps {
  titulo: any, contenido?: any
}

export const Dato = component$<DatoProps>((props) => {
  return (
    <div class="mt-6">
      <h4><b>{props.titulo}</b></h4>
      <hr class="border-black border-2" />
      <div class="mt-2">
        {props.contenido}
      </div>
    </div>
  );
});

export interface TrabajoProps {
  titulo: string, subtitulo: string, desde: string, hasta: string, lugar: string, contenido?: any
}

export const BloqueDato = component$<TrabajoProps>((props) => {
  return (
    <div class="bg-slate-200 p-3 shadow-md rounded-lg mb-2">
      <h5>{props.titulo}</h5>
      <b class="text-indigo-700 text-lg">{props.subtitulo}</b>
      <i class="flex gap-1 text-slate-500"><BsCalendar />{props.desde} - {props.hasta} | <BsGeoAltFill />{props.lugar || "Remoto"}</i>
      <div class="mt-2">{props.contenido}</div>
    </div>
  );
});

export interface BloqueConIconoProps {
  titulo: string, contenido: string
}

export const BloqueConIcono = component$<BloqueConIconoProps>((props) => {
  return (
    <div class="flex bg-slate-200 p-3 shadow-md rounded-lg mb-2">
      <div class="w-1/6 m-auto pl-2">
        <Slot />
      </div>
      <div class="w-5/6">
        <b class="text-2xl text-indigo-700">{props.titulo}</b>
        <div class="mt-2">{props.contenido}</div>
      </div>
    </div>
  );
});

export default component$(() => {
  return (
    <section class="md:flex gap-10 p-2 md:p-6  text-slate-950 max-w-screen-xl m-auto">
      <div class="w-fit md:w-3/5">
        <Dato titulo="Sobre mi" contenido="Apasionado por la creatividad en videojuegos y música.
        Mi camino fusiona ambos mundos, explorando la síntesis perfecta. Mi habilidad para aprender rápidamente y
        comunicarme entre departamentos aporta perspectivas únicas al desarrollo. Creé videojuegos de distintas escalas y
        establecí mi empresa de software interactivo. Emocionado por seguir innovando y aportando a esta industria que amo."/>


        <Dato titulo="Experiencia profesional" />

        <BloqueDato titulo="Programador" desde="07/2023" hasta="08/2022" subtitulo="MauleTec" lugar="Talca, CL"
          contenido="Desarrollo de distintos proyectos interactivos en Unity 3D, como la mejora de un museo interactivo sobre la Región del Maule, una experiencia abierta
            en una laguna en un entorno virtual y una aplicación orientada a la detección temprana de neurodivergencias en niños y niñas." />
        <BloqueDato titulo="Programador, Músico y COO" desde="06/2020" hasta="Actualidad (Inactivo)" subtitulo="Sorgard Team" lugar="Talca, CL"
          contenido="En mi posición como C.O.O, me encargo de asegurar que todas las operaciones de la empresa estén funcionando correctamente
          y también diseño y pongo en marcha estrategias para el crecimiento del negocio. Como productor ejecutivo, me encargo de dirigir y
          coordinar tanto al equipo como al proyecto en sí, planificando, programando y monitoreando el avance de las tareas, asegurándome de que
          el proyecto esté avanzando en la dirección correcta. Con mi experiencia en la industria de los videojuegos, también me encargo parcialmente de
          las relaciones públicas de la empresa, construyendo redes y presentando nuestros prototipos a clientes e inversores.
          También realicé múltiples trabajos escribiendo y produciendo música y SFX para algunos de los proyectos realizados." />
        <BloqueDato titulo="Programador Freelance" desde="04/2021" hasta="08/2021" subtitulo="InvadeLab" lugar="Remoto"
          contenido="Labores de desarrollo de software interactivo para plataforma web y móviles. Entre los proyectos realizados, se encuentran páginas web
            interactivas para marcas, un videojuego móvil para una tienda de retail y un juego web." />
        <BloqueDato titulo="Programador Practicante" desde="01/2018" hasta="03/2018" subtitulo="Niebla Games" lugar="Valparaíso, CL"
          contenido="Desarrollo experimental de versión para web (port) de videojuego Hexland Heroes." />


        <Dato titulo="Educación" />

        <BloqueDato titulo="Ingeniería en Desarrollo de Videojuegos y Realidad Virtual" desde="2016" hasta="2020" subtitulo="Universidad de Talca" lugar="Talca, CL" />
        <BloqueDato titulo="Grau en Disseny i Desenvolupament de Videojocs" desde="2019" hasta="2020" subtitulo="Universitat de Girona" lugar="Girona, ES" />
      </div>
      <div class="w-fit md:w-2/5">
        <Dato titulo="Habilidades" />
        <div class="flex flex-wrap gap-2 [&>*]:badge">
          <p>Unity3D</p>
          <p>C#</p>
          <p>AdobeSuite</p>
          <p>MohoPro</p>
          <p>FLStudio</p>
          <p>Godot</p>
          <p>UnrealEngine</p>
          <p>Python</p>
          <p>Javascript</p>
          <p>React</p>
          <p>Qwik</p>
        </div>
        <Dato titulo="Fortalezas" />
        <BloqueConIcono titulo="Aprendizaje constante" contenido="Puedo adaptarme a nuevas técnicas y tecnologías.">
          <BsBook class="text-5xl text-center" />
        </BloqueConIcono>
        <BloqueConIcono titulo="Orden" contenido="Procuro documentar mi trabajo y facilitar la lectura para otros desarrolladores.">
          <BsStars class="text-5xl text-center" />
        </BloqueConIcono>
        <BloqueConIcono titulo="Orientado al usuario" contenido="Pongo al usuario final como prioridad, detectando posibles problemas de UX.">
          <BsPersonCircle class="text-5xl text-center" />
        </BloqueConIcono>
        <Dato titulo="Idiomas" />
        <div class="[&>*]:mb-4 mt-4">
          <p><span class="badge">Español</span>Nativo</p>
          <p><span class="badge">Inglés</span>Profesional</p>
          <p><span class="badge">Catalán</span>Conversacional</p>
        </div>

        <Dato titulo="Música" />
        <iframe width="100%" height="450" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/845950868&color=%235c88c0&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/arantismusic" title="Arantis" target="_blank" style="color: #cccccc; text-decoration: none;">Arantis</a> · <a href="https://soundcloud.com/arantismusic/sets/videogame-music" title="Music for Videogames / Música para Videojuegos" target="_blank" style="color: #cccccc; text-decoration: none;">Music for Videogames / Música para Videojuegos</a></div>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: "Jaime Arancibia | Game Developer & Musician",
  meta: [
    {
      name: "description",
      content: "Perfil del desarrollador de videojuegos Jaime Arancibia.",
    },
  ],
};
