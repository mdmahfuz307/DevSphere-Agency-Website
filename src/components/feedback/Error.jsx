export default function Error({ message }){
  return <div className="text-red-500">{message || 'Something went wrong'}</div>
}
