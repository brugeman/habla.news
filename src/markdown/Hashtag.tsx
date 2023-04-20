import Link from "next/link";

export default function Hashtag({ tag }) {
  return <Link href={`/t/${tag}`}>{tag}</Link>;
}
