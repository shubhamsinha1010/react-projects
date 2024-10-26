function CurrentTime() {
  const d = new Date();
  return <p>The current date is {d.toLocaleDateString()} and time is {d.toLocaleTimeString()} </p>;
}

export default CurrentTime;
