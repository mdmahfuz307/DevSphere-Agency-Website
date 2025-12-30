export async function httpGet(url, opts){
  const res = await fetch(url, opts);
  return res.json();
}
