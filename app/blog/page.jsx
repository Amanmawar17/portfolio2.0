import Card from "../components/Card";
import { blog } from "../data/data";
import Modal from "../components/Modal";
import { ModalProvider } from "../hooks/useModalOpen";

export default function Blog() {
  return (
    <ModalProvider>
      <section className="py-8 min-h-[82vh]" id="project">
        <div className="flex justify-center flex-col items-center px-8">
          <h1 className="text-5xl text-primary font-semibold py-2">
            Blogs
          </h1>

          <section className="my-10 px-10">
            {blog.map((item) => (
              <Card key={item.id} data={item} />
            ))}
            <Modal />
          </section>
        </div>
      </section>
    </ModalProvider>
  );
}
