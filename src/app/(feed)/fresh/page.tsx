import { Post } from "../../../components/common/post.component";
import { News } from "../../../components/misc/news.component";
import { HeadNav } from "../../../components/nav/head.nav";

export default function FreshFeedPage() {
  return (
    <div className="">
      <HeadNav />
      <News />
      
      {
        ([1, 2, 3, 4, 5, 6, 7]).map((item, index) =>
          <Post key={index} />
        )
      }
    </div>
  );
}
