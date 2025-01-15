import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  return <p>Vivian this is routing correctly: {router.query.slug}</p>;
}
