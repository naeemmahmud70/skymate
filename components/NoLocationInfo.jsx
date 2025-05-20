import Link from "next/link";
import Card from "./Card";

const NoLocationInfo = () => {
  return (
    <Card>
      No Location found
      <Link href="/">Back</Link>
    </Card>
  );
};

export default NoLocationInfo;
