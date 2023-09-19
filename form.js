document.addEventListener("DOMContentLoaded", function () { 
    const form = document.getElementById("feedbackform");
    const fullname = document.getElementById("name");
    const email = document.getElementById("email");
    const Comment = document.getElementById("comment");

   
  
    function validateFullname() {
      const fullnameRegex = /^[a-zA-Z\s]+$/;
      return fullnameRegex.test(fullname.value);
    }

    function validateEmail() {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email.value);
    }
  
    function validateComment() {
        const CommentRegex = /^[a-zA-Z\s]+$/;
        return CommentRegex.test(Comment.value);
      }
    
  
    function enableSubmitButton() {
      if (
        validateFullname() &&
        validateEmail() &&
        validateComment()
      ) {
        submitButton.disabled = false;
      } else {
        submitButton.disabled = true;
      }
    }
  
    function updateValidationStatus(element, isValid, errorMessage) {
      const errorElement = element.nextElementSibling;
      errorElement.innerHTML = isValid ? "" : errorMessage;
      errorElement.style.color = "red";
    }
  
    fullname.addEventListener("input", () => {
      updateValidationStatus(fullname, validateFullname(), "Please enter a valid name.");
      enableSubmitButton();
    });
  
    email.addEventListener("input", () => {
      updateValidationStatus(email, validateEmail(), "Invalid email address.");
      enableSubmitButton();
    });
  
    Comment.addEventListener("input", () => {
      updateValidationStatus(Comment,validateComment(),"comment must be atleast 20 characters.");
      enableSubmitButton();
    });
  
   
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();     
        const userDetailsString =
          `User Details:\n\n` +
          `Full Name: ${fullname.value}\n` +
          `Email: ${email.value}\n` +
          `Comment: ${Comment.value}\n` 
          
  
        alert(userDetailsString);
      
    });
  
  });