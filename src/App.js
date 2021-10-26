import io from 'socket.io-client'
const App = () => {

  const socket = io('http://54bf-2001-4430-4124-e266-496e-b0f6-48ac-782.ngrok.io?Authorization=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3bHNkbiIsImF1ZCI6IkxPQ0FMIiwiaXNzIjoiQWRtaW4iLCJleHAiOjE2MzUyNTQ5Mjh9.AvN_SOd8mpDxaZtp4MIIyItLWc7tliyVX-FR9N_f2Qd5eNl5u_pK0hKZlxMeoD57VA-LiR8Jg49e9990_E45bQ', { transports: ["websocket"]})
  socket.on("connect", () => { console.log("connection server"); });
  socket.on("disconnect", () => {console.log("disconnect")});

  return (
    <>
      <input></input>
      <button>버튼</button>
    </>
  );
}

export default App;
