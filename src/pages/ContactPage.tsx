import { ContainerMain } from "../components/ContainerMain";
import { Container } from "../components/Container";
import { ContactForm } from "../components/ContactForm";
import Map from "./../components/Map";

const ContactPage = () => {
  return (
    <ContainerMain className="pb-2">
      <Container>
        <div className="grid lg:grid-cols-2 md:divide-x gap-4">
          <div className="max-w-md mx-auto lg:ml-auto lg:mr-0 lg:pr-6">
            <h1 className="text-accent">Contact me</h1>
            <p>
              I am interested in work full time as a frontend developer remotely
              or hybrid in Poznan, Poland or freelance opportunities. However,
              if you have other request or question, don’t hesitate to contact
              me using below form either.
            </p>
            <ContactForm />
          </div>
          <div className="relative lg:pl-6 flex items-center">
            <Map />
          </div>
        </div>
      </Container>
    </ContainerMain>
  );
};

export default ContactPage;
