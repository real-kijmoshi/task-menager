import style from "../../styles/Task.module.css"

export default function Task(props) {
  const { name, description } = props.task;
  return (
    <div key={props.id} className={style.task}>
      <h1>
        {name}
      </h1>
      <p>
        {description}
      </p>
    </div>
  );
}
