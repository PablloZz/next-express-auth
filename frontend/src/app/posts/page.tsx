"use client";

import { getPosts } from "@/packages/posts";
import { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      const posts = await getPosts();

      if (posts) setPosts(posts.posts);
    }

    fetchPosts();
  }, []);

  return <div>{posts}</div>;
}
