import image from "../assets/news.jpg";
export const NewsItem = ({ title, description, src, URL }) => {
  return (
    <div className="col">
      <div
        className="card bg-dark text-light"
        style={{
          MaxWidth: "370px",
          height: "425px",
          overflow: "hidden",
          border: " 10px solid black",
        }}
      >
        <img
          style={{
            height: "150px",
            width: "100%",
            //maxWidth: "300px",
            //backgroundSize: "contain",
            //backgroundPosition: "center",
          }}
          src={src ? src : image}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 50)}</h5>
          <p className="card-text">
            {description
              ? description.slice(0, 90)
              : "News in current event. It is information about something that has just happened."}
          </p>
          <a href={URL} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
