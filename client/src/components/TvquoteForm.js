import { useState } from "react";
import axios from "axios";
const TvquoteForm = (props) => {
  // not destructoring form fields so I can names  in useState
  const { id, addTvquote, updateTvquotes } = props;
  const [text, setText] = useState(props.text ? props.text : "");
  const [username, setUsername] = useState(
    props.username ? props.username : ""
  );
  const [source, setSource] = useState(props.source ? props.source : "");
  const [stars, setStars] = useState(props.stars ? props.stars : "");
  const getFormName = () => {
    return id ? "EditFORM" : "NEW Form";
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let tvquote = { text, username, source, stars };
    console.log(tvquote);
    if (id) {
      let res = await axios.put(`/api/tvquotes/${id}`, tvquote);
      console.log(res); // works need to update UI
      updateTvquotes(res.data);
    } else {
      let res = await axios.post("/api/tvquotes", tvquote);
      console.log(res); // works need to update UI
      addTvquote(res.data);
    }
  };
  return (
    <>
      <h1>{getFormName()}</h1>
      <form onSubmit={handleSubmit}>
        <p>text</p>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <p>username</p>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <p>text</p>
        <input value={source} onChange={(e) => setSource(e.target.value)} />
        <p>stars</p>
        <input value={stars} onChange={(e) => setStars(e.target.value)} />
        <br />
        <button type={"submit"}>{id ? "add" : "update"}</button>
      </form>
    </>
  );
};
export default TvquoteForm;
