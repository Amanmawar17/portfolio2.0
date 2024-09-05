import { project } from "../data/data";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { ModalProvider } from "../hooks/useModalOpen";

function Project() {
  return (
    <ModalProvider>
      <section className="py-8 min-h-screen max-w-screen-2xl m-auto" id="project">
        <div className="flex justify-center flex-col items-center px-8">
          <h1 className="text-5xl text-primary font-semibold py-2">
            Projects
          </h1>
          <section className="my-10 lg:px-10">
            <div className="grid grid-cols-1 gap-14 grid-flow-row md:grid-cols-2 lg:grid-cols-3">
              {project.map((item) => (
                <Card key={item.id} data={item} />
              ))}
            </div>
            <Modal />
          </section>
        </div>
      </section>
    </ModalProvider>
  );
}

export default Project;
