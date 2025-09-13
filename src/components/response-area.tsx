import Typewriter from "./Typewriter";

export default function ResponseArea({
  responseData,
}: {
  responseData: string;
}) {
  return (
    <div className="text-white justify-end">
      <Typewriter text={responseData || ""} speed={10} />
      {/* <h4>{responseData}</h4> */}
    </div>
  );
}
