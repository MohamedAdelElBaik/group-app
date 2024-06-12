"use client";

import { PostsContext } from "@/app/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useContext, useState } from "react";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { dispatch } = useContext(PostsContext);

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({ type: "add", payload: { title, content } });
    setTitle("");
    setContent("");
  }

  return (
    <div>
      <h2 className="mb-8 text-2xl font-semibold">Create Post</h2>
      <form className="w-fill flex flex-col gap-8">
        <div className="space-y-3">
          <Label className="text-lg" htmlFor="">
            Post Title
          </Label>
          <Input
            type="text"
            className="text-base"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="space-y-3">
          <Label className="text-lg" htmlFor="">
            Post Content
          </Label>
          <Textarea
            rows={8}
            className="text-base"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <Button className="w-fit px-8 py-4 text-lg" onClick={handleSubmit}>
          submit
        </Button>
      </form>
    </div>
  );
}
