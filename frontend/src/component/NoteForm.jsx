import axios from "axios";

export default function NoteForm() {
  function handleSubmit(e, data) {
    e.preventDefault();
    console.log("note form submitted");
    console.log(data);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/note/add",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          className="p-2 m-2 border-2 border-gray-400 rounded-lg"
        />
        <input
          type="text"
          placeholder="Content"
          className="p-2 m-2 border-2 border-gray-400 rounded-lg"
        />
        <button
          type="submit"
          className="border-2 p-1 border-gray-400 rounded-lg"
        >
          <h3>+</h3>
        </button>
      </form>
    </>
  );
}
