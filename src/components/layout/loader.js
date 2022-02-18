import { Html, useProgress } from '@react-three/drei'

export default function Loader() {
  const { progress } = useProgress()
  return <Html style ={{ color:'orange',backgroundColor:'black',width:'100%',height:'100%'}} center>{progress} % loaded</Html>
}

