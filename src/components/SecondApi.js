import { users } from "./api";

function SecondApi() {
  return (
    <div>
      {users.map((e) => {
        return (
          <div key={e.id}>
            <h6>{e.name}</h6>
            <p>{e.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default SecondApi;
