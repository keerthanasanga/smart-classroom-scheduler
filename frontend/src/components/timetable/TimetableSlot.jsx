export default function TimetableSlot({ time, subject }) {
  return <div className="border p-2">{time}: {subject}</div>;
}
