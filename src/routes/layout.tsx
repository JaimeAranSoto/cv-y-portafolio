import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { Link, routeLoader$, useLocation } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";

// import Header from "~/components/starter/header/header";
// import Footer from "~/components/starter/footer/footer";

import styles from "./styles.css?inline";
import { LuMail, LuPhone } from "@qwikest/icons/lucide";
import { BsGeoAltFill, BsLinkedin, BsMusicNote } from "@qwikest/icons/bootstrap";
import { InCode } from "@qwikest/icons/iconoir";
import { SiItchdotio } from "@qwikest/icons/simpleicons";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  useStyles$(styles);
  const { url } = useLocation();
  return (
    <>
      <div class="bg-indigo-700 p-8">
        <div class="max-w-screen-xl m-auto">
          <h2 class="text-start">Jaime Arancibia</h2>
          <h3 class="text-lg flex items-center">Game Developer y Músico <InCode class="mx-3" /><BsMusicNote /></h3>
          <div class="md:flex gap-3 mt-4 flex flex-wrap [&>*]:flex [&>*]:gap-2 [&>*]:items-center">
            <div><LuPhone />+56 9 77908750</div>
            <div><LuMail />jaimearansoto@gmail.com</div>
            <div><BsGeoAltFill />Talca, CL</div>
            <a href="https://www.linkedin.com/in/jaimearansoto/" target="_blank"><BsLinkedin />/jaimearansoto</a>
            <a href="https://stivarts.itch.io" target="_blank"><SiItchdotio />stivarts</a>
          </div>
          <nav class="mt-4 flex gap-2">
            <Link href="/" class={url.pathname == "/" ? "btn-selected" : "btn"}>Currículum</Link>
            <Link href="/portfolio" class={url.pathname == "/portfolio/" ? "btn-selected" : "btn"} > Portafolio</Link>
          </nav>
          <img width="200" class="absolute right-20 top-3 invisible lg:visible" src="https://sorgardteam.com/img/home/controller.webp" />
        </div>
      </div >
      <main>
        <Slot />
      </main>
      {/* <Footer /> */}
    </>
  );
});
