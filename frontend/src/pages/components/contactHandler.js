export const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    // You can replace this with actual backend/API logic
    console.log("Form Data:", { name, email, message });
    alert("Feedback submitted successfully!");
    e.target.reset();
};
  