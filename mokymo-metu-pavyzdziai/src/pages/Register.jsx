import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const styles = {};
const ROUTES = {};
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const formErrors = {};

    if (!formData.name) {
      formErrors.name = "Field is required";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      formErrors.email = "Field is required";
    } else if (!emailPattern.test(formData.email)) {
      formErrors.email = "Invalid email address";
    }

    if (!formData.password) {
      formErrors.password = "Field is required";
    } else if (formData.password.length < 8) {
      formErrors.password = "Password must be at least 8 characters";
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      navigate(ROUTES.LOGIN);
    }
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Register</h2>
        {errors.name && <p className={styles.error}>{errors.name}</p>}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className={styles.error}>{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className={styles.input}
        />
        {errors.password && <p className={styles.error}>{errors.password}</p>}
        <button type="submit">Register</button>
        <div className={styles.link}>
          <Link to={ROUTES.LOGIN} className={styles.logIn}>
            Already have an account? Log in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
