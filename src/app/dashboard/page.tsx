import Link from "next/link";
import styles from "@/styles/dashboard.module.css";
export default function Dashboard() {
  return (
    <Link className="btn btn-blue" type="button" href={"/"}>
      {" "}
      <div className={styles["text-color"]}>Back to Home!</div>
    </Link>
  );
}
