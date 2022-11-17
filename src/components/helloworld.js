import { apiData } from "./apiData";

function Helloworld() {
  const name = "Hello World";

  return (
    <>
      <h1>{name}</h1>
    </>
  );
}

function HelloworldObj() {
  const obj = { name: "Hello World Object" };
  return (
    <>
      <h2>{obj.name}</h2>
    </>
  );
}

function HelloworldArr() {
  let data = ["We", "are", "United"];
  return (
    <>
      {data.map((d, i) => {
        return <h3 key={i}>{d}</h3>;
      })}
    </>
  );
}

function ArrOfObj() {
  const list = [
    { name: "Hello World 1" },
    { name: "Hello World 2" },
    { name: "Hello World 3" },
  ];

  return (
    <>
      {list.map((d, i) => {
        return <h3 key={i}>{d.name}</h3>;
      })}
    </>
  );
}

function ComplexArr() {
  const complex = [
    { company: "XYZ", jobs: ["Javascript", "React"] },
    { company: "ABC", jobs: ["AngularJs", "Ionic"] },
  ];
  return (
    <>
      {complex.map((d, i) => {
        return (
          <div key={i}>
            <h3>{d.company}</h3>
            {d.jobs.map((f, j) => (
              <h6>{f}</h6>
            ))}
          </div>
        );
      })}
    </>
  );
}

function ApiResult() {
  return (
    <div>
      {apiData.map((data) => {
        return (
          <div
            style={{
              boderWidth: "1px",
              borderColor: "red",
              borderStyle: "solid",
              margin: "10px auto",
              padding: "10px",
              width: "700px",
            }}
            key={data.id}
          >
            <p>{data.title}</p>
            <small>{data.body}</small>
          </div>
        );
      })}
    </div>
  );
}

export {
  Helloworld,
  HelloworldObj,
  HelloworldArr,
  ArrOfObj,
  ComplexArr,
  ApiResult,
};
