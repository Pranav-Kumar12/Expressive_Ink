import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src={require("./pexels-marlene-leppänen-1493004.jpg")} alt="" />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>

        <span className="postTitle">Calmness of music</span>
        <hr/>
        <span className="postTime"> few minutes ago</span>
      </div>
      <p className="postContent">
        Latest study reveals about including music in life for a healthy lifestyle. Learn the methods of immersing yourself in the world of musical art.
        Music has a profound positive impact on our emotions, thoughts, and overall well-being. One of the ways music affects us positively is by enhancing our mood. Upbeat and energetic music can uplift our spirits, increase happiness, and create a sense of excitement. On the other hand, calming and soothing music can help reduce stress levels by lowering cortisol, the hormone associated with stress. It promotes relaxation and a sense of tranquility, providing a healthy escape from the pressures of everyday life.
        Moreover, music serves as a powerful medium for emotional expression. It allows us to connect with and process our feelings, offering a cathartic and healing experience. Whether it's listening to music that resonates with our emotions or creating our own music, it can help us find solace and a sense of release.

        Additionally, music can be a great source of motivation and productivity. Upbeat and rhythmic music can increase energy levels, enhance focus, and improve performance. Many find that music aids concentration during tasks that require mental or physical effort.
      </p>
    </div>
  );
}
