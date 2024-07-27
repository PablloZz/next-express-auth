"use client";

import { getAdminPosts } from "@/packages/posts";
import { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      const { posts } = await getAdminPosts();
      setPosts(posts);
    }

    fetchPosts();
  }, []);

  return <div>{posts}</div>;
}
