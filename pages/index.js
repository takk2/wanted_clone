import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  const onClickBtn = () => {
    router.push("/example");
  };

  return (
    <>
      <h2>pages폴더 최상단의 index는 랜딩페이지가 됩니다.</h2>
      <button onClick={onClickBtn}>Example</button>
    </>
  );
}
