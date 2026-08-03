export async function getServerSideProps() {
  // Regression: status service is unavailable in this build.
  throw new Error("StatusServiceError: unable to load system status");
}

export default function Status({ ok }) {
  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>System Status</h1>
      <p>{ok ? "All systems operational" : "unknown"}</p>
    </div>
  );
}
