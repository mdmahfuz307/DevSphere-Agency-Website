import { useEffect, useRef } from 'react';
export default function useDebounce(fn, delay){
  const ref = useRef();
  useEffect(()=>{ clearTimeout(ref.current); ref.current = setTimeout(fn, delay); return ()=> clearTimeout(ref.current); },[fn, delay]);
}
