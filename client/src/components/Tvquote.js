import TvquoteForm from "./TvquoteForm";

const Tvquote = (props) => {
  const { id, text, username, stars, source, deleteTvquote } = props;

  return (
    <>
      <h1>{text}</h1>
      <p>
        User: {username} stars:{stars} source:{source}
      </p>
      <p onClick={() => deleteTvquote(id)}>delete</p>
      <TvquoteForm {...props} />
      <hr />
    </>
  );
};

export default Tvquote;
