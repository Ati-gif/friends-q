import React, { useEffect, useState } from "react";
import axios from "axios";
import Tvquote from "./Tvquote";
import TvquoteForm from "./TvquoteForm";
import { Link } from "react-router-dom";

const Tvquotes = (props) => {
  const [tvquotes, setTvquotes] = useState([]);

  useEffect(() => {
    getTvquotes();
  }, []);

  const renderTvquotes = () => {
    if (tvquotes.length === 0) {
      return <p>no quotes</p>;
    }

    return tvquotes.map((tvquote) => {
      return (
        <Tvquote
          key={tvquote.id}
          {...tvquote}
          updateTvquotes={updateTvquotes}
          deleteTvquote={deleteTvquote}
        />
      );
    });
  };

  const addTvquote = (tvquote) => {
    let updatedTvquotes = [tvquote, ...tvquotes];
    setTvquotes(updatedTvquotes);
  };

  const updateTvquotes = (tvquote) => {
    let updatedTvquotes = tvquotes.map((f) =>
      f.id === tvquote.id ? tvquote : f
    );
    setTvquotes(updatedTvquotes);
  };

  // lets handle all delete here different with what with update
  // and create

  const deleteTvquote = async (id) => {
    try {
      // delete from database step
      let res = await axios.delete(`/api/tvquotes/${id}`);
      // delete from ui step
      let updatedTvquotes = tvquotes.filter((f) => f.id !== res.data.id);
      setTvquotes(updatedTvquotes);
    } catch (err) {
      console.log(err);
      alert("err occured");
    }
  };

  const getTvquotes = async () => {
    try {
      let res = await axios.get("/api/tvquotes");

      setTvquotes(res.data);
      // things we need to figure out
    } catch (err) {
      alert("err occured check console");
      console.log(err);
    }
  };
  return (
    <>
      <h1>F.r.i.e.n.d.s Quotes!</h1>
      <TvquoteForm addTvquote={addTvquote} />

      {/* <Link to='/newTvquote'>new</Link> */}
      {renderTvquotes()}
    </>
  );
};
export default Tvquotes;
