"use client";

import { useContext, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { GroupContext } from "@/app/layout";

export default function GroupForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { dispatch } = useContext(GroupContext);

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({ type: "addGroup", payload: { name, description } });
    // go to main page when submit form
    window.location.href = "/";
  }
  return (
    <form className="w-[700px] flex flex-col gap-8">
      <div className="space-y-3">
        <Label className="text-lg" htmlFor="">
          Group Name
        </Label>
        <Input
          type="text"
          value={name}
          className="text-base"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="space-y-3">
        <Label className="text-lg" htmlFor="">
          Description
        </Label>
        <Textarea
          rows={8}
          value={description}
          className="text-base"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <Button className="w-fit px-8 py-4 text-lg" onClick={handleSubmit}>
        submit
      </Button>
    </form>
  );
}
