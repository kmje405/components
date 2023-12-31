import "./ContactForm.scss";



const MyForm = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Drop Me A Line!</h1>
      <form action="https://submit-form.com/th3tW0B3" method="POST">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default MyForm;
