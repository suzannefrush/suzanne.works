import Header from "@/components/PageLayouts/Header";
import { getImageProps } from "next/image";
import Link from "next/link";

function getBackgroundImage(srcSet = "") {
  const imageSet = srcSet
    .split(", ")
    .map((str) => {
      const [url, dpi] = str.split(" ");
      return `url("${url}") ${dpi}`;
    })
    .join(", ");
  return `image-set(${imageSet})`;
}

export default function Home() {
  const {
    props: { srcSet },
  } = getImageProps({ alt: "", width: 1024, height: 683, quality: 100, src: "/heading/hero.webp" });
  const backgroundImage = getBackgroundImage(srcSet);

  return (
    <>
      <div className="text-white">
        <Header />
      </div>

      <div className="relative isolate px-6 pt-14 lg:px-8" style={{ backgroundImage, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="mx-auto max-w-4xl py-32">
          <div className="m-0 p-0">
            <p className="inline bg-black px-4 py-1 text-lg font-medium tracking-widest text-pretty text-gray-100 uppercase sm:text-xl/8">Hello!</p>
          </div>
          <div className="m-0 p-0">
            <h1 className="inline bg-white box-decoration-clone px-4 text-4xl leading-[1.1] font-thin tracking-wide text-balance text-gray-900 uppercase md:text-6xl dark:bg-black dark:text-white">
              I believe in the transformative power of getting things done (well)
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
