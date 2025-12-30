import { useEffect, useState } from 'react';
export default function useFetch(url){
  const [data, setData] = useState(null);
  useEffect(()=>{ if(!url) return; fetch(url).then(r=>r.json()).then(setData).catch(()=>setData(null)); },[url]);
  return data;
}
