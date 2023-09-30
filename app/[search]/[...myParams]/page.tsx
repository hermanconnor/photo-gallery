import { Metadata } from "next";
import Gallery from "@/components/Gallery";

interface Props {
  params: {
    myParams: (string | undefined)[];
  };
}

export async function generateMetadata({
  params: { myParams },
}: Props): Promise<Metadata> {
  const topic = myParams?.[0] ?? "curated";
  const page = myParams?.[1] ?? "1";

  return {
    title: `Results for ${topic} - Page ${page}`,
  };
}

const SearchPage = ({ params: { myParams } }: Props) => {
  const topic = myParams?.[0] ?? "curated";
  const page = myParams?.[1] ?? "1";

  return <Gallery topic={topic} page={page} />;
};

export default SearchPage;
