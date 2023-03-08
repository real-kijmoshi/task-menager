import styles from "../styles/Home.module.css";
import Task from "./components/task";

const tasks = [
  {
    name: "wyglad",
    description: "wyglad",
  },
  {
    name: "strutkturararuaraurururura",
    description: "sny task",
  },
  {
    name: "",
    description: "",
  },
];

export default function Home() {
  return (
    <div id={styles.tasks}>
      {tasks.map((task, id) => {
        return (<Task task={task} key={id}/>);
      })}
    </div>
  );
}
