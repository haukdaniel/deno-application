/** @jsx h */
import { h, render } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from '$fresh/server.ts'
import { loadPost, Post } from "../../utils/posts.ts";

export const handler: Handlers<Post> = {
  async GET(req, ctx) {
    const id = ctx.params.id;
    const post = await loadPost(id);
    if (!post) {
      return new Response('Post not found', { status: 404 });
    }
    return ctx.render(post);
  }
}

export default function Home(props: PageProps<Post>) {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      Hello World!
    </div>
  );
}
