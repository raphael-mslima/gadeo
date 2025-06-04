export async function saveReflection(text) {
  // placeholder POST to backend
  return fetch('http://localhost:3000/api/reflections', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  }).then(res => res.json());
}
