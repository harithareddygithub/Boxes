const Box = (props) => {
  const { title, className } = props;

  return (
    <div className={`box ${className}`}>
      <p className="box-title">{title}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="container">
      <Box title="small" className="small-box" />
      <Box title="medium" className="medium-box" />
      <Box title="large" className="large-box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
