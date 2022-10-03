import { useState } from "react";
import { emailRegEx, phoneRegEx } from "../../helpers/regex";
import styles from "./form.module.scss";

const Form = ({ onClose }) => {
  const defaultFormData = {
    name: "",
    email: "",
    phone: "",
    emailError: null,
    phoneError: null,
  };

  const [formData, setFormData] = useState(defaultFormData);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // submit the form

      // set the state to it's default state

      // close the modal

      setFormData(defaultFormData);
    }
  };

  const validate = () => {
    let emailError = null;
    let phoneError = null;

    if (!formData.email || emailRegEx.test(formData.email) === false) {
      emailError = "Invalid Email Address";
    }
    if (!formData.phone || phoneRegEx.test(formData.phone) === false) {
      phoneError = "Invalid Phone Number";
    }

    if (emailError || phoneError) {
      setFormData((prev) => ({ ...prev, emailError, phoneError }));
      return false;
    }
    return true;
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <p className={styles.form_label}>Name</p>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className={styles.input_fields}
          onChange={handleChange}
          value={formData.name}
        />
        <br />
        <p className={styles.form_label}>E-mail</p>

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          required
          className={styles.input_fields}
          onChange={handleChange}
          value={formData.email}
        />
        <br />
        {formData.emailError && (
          <p className={styles.error_message}>{formData.emailError}</p>
        )}
        <p className={styles.form_label}>Phone</p>

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          className={styles.input_fields}
          onChange={handleChange}
          value={formData.phone}
        />
        <br />
        {formData.phoneError && (
          <p className={styles.error_message}>{formData.phoneError}</p>
        )}
        <br />
        <div className={styles.button_container}>
          <button className={styles.cancel_button} onClick={onClose}>
            Cancel
          </button>
          <input type="submit" value="Add" className={styles.add_button} />
        </div>
      </form>
    </div>
  );
};

export default Form;
