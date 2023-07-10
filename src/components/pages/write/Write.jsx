import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <img src={require('./pexels-marlene-leppänen-1493004.jpg')} alt="" className="writePostImg"/>
      <form className="writeForm" action="">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" className="chooseFileButton" />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Write your blog here..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
