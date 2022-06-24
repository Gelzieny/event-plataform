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
            <div className="min-h-screen w-full h-full bg-blur bg-cover bg-no-repeat flex flex-col items-center">
              <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[700px] mt-[35%] mr-[-10px]"></div>
              </div>
            </div>
          </div>
        )}
        <Sidebar />
      </main>
    </div>
  );
}
