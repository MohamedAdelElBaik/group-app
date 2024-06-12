import CreatePost from "@/components/CreatePost";
import PostsList from "@/components/PostsList";
import { Button } from "@/components/ui/button";

import Link from "next/link";

function page() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between">
        <div className="space-y-3">
          <h1 className="text-2xl font-bold">Group posts</h1>
          <p className="max-w-[900px] font-light">
            Here you can see or add posts in the group
          </p>
        </div>
        <Link href="/">
          <Button>Go Back</Button>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-16">
        <PostsList />
        <CreatePost />
      </div>
    </div>
  );
}

export default page;
