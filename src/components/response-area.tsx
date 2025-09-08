export default function ResponseArea({
  responseData,
}: {
  responseData: string;
}) {
  console.log(responseData, "response");
  return (
    <div className="text-white justify-end">
      <h4>{responseData}</h4>
    </div>
  );
}
