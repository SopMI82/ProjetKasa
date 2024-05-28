const Drawer = (props) => {
  return (
    <div className="detail">
      <title>{props.title}</title>
      <i className="arrow"></i>
      <p>{props.content}</p>
    </div>
  );
};

export default Drawer;
