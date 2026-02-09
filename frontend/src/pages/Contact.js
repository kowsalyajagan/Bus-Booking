export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Feel free to reach us anytime!</p>

      <form style={{ marginTop: "20px" }}>
        <div>
          <label>Name:</label> <br />
          <input type="text" placeholder="Enter your name" />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Message:</label> <br />
          <textarea placeholder="Your message"></textarea>
        </div>

        <button style={{ marginTop: "10px" }}>Submit</button>
      </form>
    </div>
  );
}
