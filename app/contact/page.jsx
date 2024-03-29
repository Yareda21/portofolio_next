import ContactForm from "@/components/ContactForm";

export const metadata = {
  description: "Yared Kebede Full Stack Web Developer",
};

const page = () => {
  return (
    <div className="flex flex-col z-30 absolute mt-[95px] md:lg-[60px] w-full">
      <div className="mx-auto max-w-3xl my-0">
        <h1 className="hidden">Yared Kebede</h1>
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <p>Please fill in the form below </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default page;
