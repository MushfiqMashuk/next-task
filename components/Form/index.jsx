import { useRef, useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    phone: null,
    emailError: null,
    phoneError: null,
  });

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(phoneRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Full Name"
          required
          ref={nameRef}
        />
        <br />
        <label htmlFor="email">E-mail</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="E-mail"
          required
          ref={emailRef}
        />
        <br />
        <p>Error message</p>
        <label htmlFor="phone">Phone</label>
        <br />
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone Number"
          required
          ref={phoneRef}
        />
        <br />
        <p>Error message</p>
        <br />
        <div>
          <button>Cancel</button>
          <input type="submit" value="Add" />
        </div>
      </form>
    </div>
  );
};

export default Form;
