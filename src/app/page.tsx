import { Post } from "../components/common/post.component";
import { News } from "../components/misc/news.component";

export default function HomePage() {
  return (
    <div className="">
      <News />
      
      {
        ([1, 2, 3, 4, 5, 6, 7]).map((item, index) =>
          <Post key={index} />
        )
      }
    </div>
  );
}
