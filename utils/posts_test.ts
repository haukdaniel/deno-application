import { loadPost } from "./posts.ts";
import { assert, assertEquals } from "$std/testing/asserts.ts";

Deno.test('loadPost', async () => { 
  const post = await loadPost('hello');
  assert(post);
  assertEquals(post.id, 'hello');
});

Deno.test('load post non existant', async () => {
  const post = await loadPost('this-post-does-not-exist');
  assertEquals(post,null);
})