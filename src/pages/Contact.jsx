import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const loadInitialFormData = () => {
    return {
      name: localStorage.getItem('contactName') || '',
      email: localStorage.getItem('contactEmail') || '',
      message: localStorage.getItem('contactMessage') || ''
    };
  };

  const [formData, setFormData] = useState(loadInitialFormData());

  useEffect(() => {
    localStorage.setItem('contactName', formData.name);
    localStorage.setItem('contactEmail', formData.email);
    localStorage.setItem('contactMessage', formData.message);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
  };

  return (
    <div className="contact">
      <h1>Контакты</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Имя:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Текст:
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </label>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default Contact;
