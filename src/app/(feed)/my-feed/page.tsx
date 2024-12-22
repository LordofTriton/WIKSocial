import { Post } from "../../../components/common/post.component";

export default function MyFeedPage() {
  return (
    <div className="">
      {
        ([1, 2, 3, 4, 5, 6, 7]).map((item, index) =>
          <Post key={index} />
        )
      }
    </div>
  );
}
