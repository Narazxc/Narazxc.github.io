function ContactForm() {
  return (
    <form className="mb-10 flex flex-col gap-4 rounded-lg bg-pink-200 p-5">
      <h2 className="text-center text-3xl font-bold uppercase">Email Me</h2>
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
        <div className="flex flex-1 items-center justify-between">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            placeholder="First name"
            className="w-[76%]"
          />
        </div>
        <div className="flex flex-1 items-center justify-between">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            placeholder="Last name"
            className="w-[76%]"
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <label htmlFor="email">Email</label>
        <input id="email" type="text" placeholder="Email" className="w-[83%]" />
      </div>

      <div className="flex items-center justify-between gap-4">
        <label htmlFor="subject" className="">
          Message Subject
        </label>
        <input
          id="subject"
          type="text"
          placeholder="Message Subject"
          className="w-[83%]"
        />
      </div>
      <div className="items-top flex justify-between gap-4">
        <label htmlFor="message" className="">
          Message
        </label>
        <textarea
          id="message"
          className="h-32    w-[83%]"
          placeholder="Write your message here"
        ></textarea>
      </div>
    </form>
  );
}

export default ContactForm;
