const Form = () => {
  return (
    <>
      <form
        action="https://formsubmit.co/dtNakhutsrishvili@gmail.com"
        method="POST"
      >
        <input type="text" name="name" required />
        <input type="email" name="email" required />
        <button type="submit">Send</button>
      </form>
    </>
  );
};
export default Form;
