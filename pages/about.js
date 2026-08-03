export async function getServerSideProps() {
  // Regression: about-page settings service returns nothing; unguarded access 500s.
  const settings = null;
  return { props: { heading: settings.heading } };
}

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
    </div>
  );
}
