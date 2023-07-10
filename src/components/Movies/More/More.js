import "./More.css";

function More({ handleShowMore }) {
  return (
    <section className="more section2">
      <button
        className="more__button hover-button"
        onClick={handleShowMore}
        type="button"
      >
        Ещё
      </button>
    </section>
  );
}

export default More;
