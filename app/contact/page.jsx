import ContactForm from "@/components/ContactForm";

const page = () => {
  return (
    <div className="flex flex-col pt-[95px] md:lg-[60px] w-full">
      <div className="mx-auto max-w-3xl my-0">
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <p>Please fill in the form below </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default page;
