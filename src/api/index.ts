export default async function getRepositories(user: string) {
  const data = await fetch(`https://api.github.com/users/${user}/repos`).then(
    (res) => res.json()
  );

  return data;
}
