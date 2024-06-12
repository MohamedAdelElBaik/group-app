"use client";

import { useContext } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { PostsContext } from "@/app/layout";
import { Button } from "./ui/button";
import { Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";

export default function PostsList() {
  const { posts } = useContext(PostsContext);
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-8">All posts in the group</h2>
      <div className="space-y-4">
        {posts?.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            createAt={post.createAt}
          />
        ))}
      </div>
    </div>
  );
}

function Post({ id, title, content, createAt }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
        <div className="space-x-2 mt-8">
          <Button size="icon">
            <Pencil2Icon />
          </Button>
          <Button size="icon">
            <TrashIcon />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
