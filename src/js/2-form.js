const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const formData = {
    email: "",
    message: "",
  };
  
  form.addEventListener("input", (event) => {
    formData.email = emailInput.value.trim();
    formData.message = messageInput.value.trim();
    
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const savedData = localStorage.getItem("feedback-form-state");
  
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      emailInput.value = parsedData.email || "";
      messageInput.value = parsedData.message || "";
      
      formData.email = parsedData.email || "";
      formData.message = parsedData.message || "";
    }
  });
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    if (!formData.email || !formData.message) {
      alert("Fill please all fields");
      return;
    }
  
    console.log("Form submitted:", formData);
  
    localStorage.removeItem("feedback-form-state");
    form.reset();
    
    formData.email = "";
    formData.message = "";
  });
  