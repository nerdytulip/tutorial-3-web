import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";

export const RegisterForm = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const setInputField = (inputField, value) => {
    setFormData({
      ...formData,
      [inputField]: value,
    });

    if (!!errors[inputField]) {
      setErrors({
        ...errors,
        [inputField]: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const { firstName, lastName, email, password, confirmPassword } = formData;

    // referenced letter only regex from : https://stackoverflow.com/questions/12778083/regex-with-space-and-letters-only
    const lettersOnlyRegex = /^[a-zA-Z\s]+$/;
    // Referenced email regex from : https://www.w3resource.com/javascript/form/email-validation.php
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // Referenced password regex from: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!lettersOnlyRegex.test(firstName))
      newErrors.firstName = "first name should contain only letters and space";
    else if (!lettersOnlyRegex.test(lastName))
      newErrors.lastName = "last name should contain only letters and space";
    else if (!emailRegex.test(email)) newErrors.email = "invalid email format";
    else if (!passwordRegex.test(password))
      newErrors.password =
        "password length must be less than 8 characters,must have at least one uppercase, one lower case, one number and one special character";
    else if (confirmPassword !== password)
      newErrors.confirmPassword =
        "confirm password and password fields do not match";

    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      //Referenced Local Storage from : https://blog.logrocket.com/using-localstorage-react-hooks/
      localStorage.setItem("firstName", formData.firstName);
      localStorage.setItem("lastName", formData.lastName);
      localStorage.setItem("email", formData.email);
      console.log("submitted the formData");
      window.location.href = "/profile";
      console.log(formData);
    }
  };
  return (
    // // Referenced Container from : https://react-bootstrap.github.io/layout/grid/
    <Container style={{ width: "30rem", height: "38rem", marginTop: "2rem" }}>
      <h2 className="text-center mb-4">Registration Form</h2>
      {/* Referenced Basic Form from : https://react-bootstrap.github.io/forms/overview/ */}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            value={formData.firstName || ""}
            onChange={(e) => setInputField("firstName", e.target.value)}
            isInvalid={!!errors.firstName}
            required
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            {errors.firstName}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            value={formData.lastName || ""}
            onChange={(e) => setInputField("lastName", e.target.value)}
            isInvalid={!!errors.lastName}
            required
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            {errors.lastName}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={formData.email || ""}
            onChange={(e) => setInputField("email", e.target.value)}
            isInvalid={!!errors.email}
            required
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={formData.password || ""}
            onChange={(e) => setInputField("password", e.target.value)}
            isInvalid={!!errors.password}
            required
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword || ""}
            onChange={(e) => setInputField("confirmPassword", e.target.value)}
            isInvalid={!!errors.confirmPassword}
            required
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            {errors.confirmPassword}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
