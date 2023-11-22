export default function UserProfile({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-min py-2">
      <h1> Profile</h1>
      <hr />
      <p className="text-4xl">
        {" "}
        Profile ID:{" "}
        <span className="rounded p-2 bg-orange-500 text-white">
          {" "}
          {params.id}
        </span>
      </p>
    </div>
  );
}
