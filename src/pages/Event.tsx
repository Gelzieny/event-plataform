import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className="flex-1">
            <img
              className="h-[60vh] w-15 ml-96 px-8 mb-5 mt-24"
              src="https://cdn.pixabay.com/photo/2013/04/01/10/59/warning-98813_1280.png"
              alt=""
            />
            <h1 className="w-full py-79 font-normal flex items-center text-5xl ml-96 text-sm">
              Click em uma aula para acessar
            </h1>
          </div>
        )}
        <Sidebar />
      </main>
    </div>
  );
}
