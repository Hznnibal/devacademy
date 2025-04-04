import { signUp } from "@/lib/authentication/actions";

export async function POST(request: Request) {
  const formData = await request.formData();
  const res = await signUp(formData);
  return new Response(JSON.stringify(res));
}
