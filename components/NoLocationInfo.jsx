import Link from "next/link";
import Card from "./Card";

const NoLocationInfo = ({ location }) => {
  return (
    <Card>
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <p className="text-xl text-slate-400 ">{location} location is not available!</p>
          <Link href="/" className="bg-green-600 px-5 py-1 rounded-lg mt-3 inline-block">Back to your current place</Link>
        </div>
      </div>
    </Card>
  );
};

export default NoLocationInfo;
