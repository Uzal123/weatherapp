
import './App.css';
import WeatherCard from './components/WeatherCard';



function App() {
    
  return (
    <>
      <div>
        <WeatherCard />
      </div>
    </>
  );
}

export default App;

// export async function getStaticProps() {
//     try {
//         const res = await fetch(
//             `https://api.tomorrow.io/v4/timelines?location=-73.98529171943665,40.75872069597532&fields=temperature&timesteps=1h&units=metric&apikey=2B4qpsm1KDwpRY653c60l16D0lcLehYN`
//         );
//         const result = res.json;
//         console.log(result);

//     } catch (error) {
//         console.log(error)
//     }
// }


