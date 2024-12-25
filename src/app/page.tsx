"use client"

import { Post } from "../components/common/post.component";
import { News } from "../components/misc/news.component";
import { HeadNav } from "../components/nav/head.nav";
import { useHomePage } from "../hooks/pages/feed/homePage.hook";

export default function HomePage() {
  const {
    router,
    activeUser,
    
    feed,
    feedLoading,

    feedPage,
    setFeedPage
  } = useHomePage();

  return (
    <div className="">
      <HeadNav />
      <News />
      
      {
        feed && feed.length && feed.map((post, index) =>
          <Post data={post} key={index} />
        )
      }
    </div>
  );
}
