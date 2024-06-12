"use client";

import { useContext, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { GroupContext } from "@/app/layout";
import Link from "next/link";

export default function GroupList() {
  const { group: data } = useContext(GroupContext);

  return (
    <div className="flex flex-col gap-6">
      {data?.map(({ id, name, description, createAt }) => (
        <Group
          key={id}
          id={id}
          name={name}
          description={description}
          createAt={createAt}
        />
      ))}
    </div>
  );
}

function Group({ id, name, description, createAt }) {
  const { dispatch } = useContext(GroupContext);

  return (
    <Card>
      <CardHeader className="">
        <CardTitle>{name}</CardTitle>
        <Badge className="w-fit px-4 ">{createAt?.slice(0, 10)}</Badge>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <div className="flex gap-2 justify-between w-full">
          <Link href={`post?${id}`}>
            <Button className="w-40">Go to Posts</Button>
          </Link>
          <div className="space-x-4">
            <EditGroupBTN id={id} name={name} description={description} />
            <Button
              className="w-28"
              onClick={() => dispatch({ type: "deleteGroup", payload: { id } })}
            >
              Delete
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

function EditGroupBTN({ id, name, description }) {
  const { dispatch } = useContext(GroupContext);
  const [newName, setNewName] = useState(name);
  const [newDescription, setNewDescription] = useState(description);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-28">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form className="w-fill flex flex-col gap-8">
          <div className="space-y-3">
            <Label className="text-lg" htmlFor="">
              Group Name
            </Label>
            <Input
              type="text"
              value={newName}
              className="text-base"
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
          <div className="space-y-3">
            <Label className="text-lg" htmlFor="">
              Description
            </Label>
            <Textarea
              rows={8}
              value={newDescription}
              className="text-base"
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </div>
          <Button
            className="w-fit px-8 py-4 text-lg"
            onClick={() =>
              dispatch({
                type: "editGroup",
                payload: { id, name: newName, description: newDescription },
              })
            }
          >
            submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
