import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./infobox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
  const HOT_URL =
    "https://images.unsplash.com/photo-1586521995568-39abaa0c2311?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1707536880728-ad46c1dea0f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMHdlYXRoZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";
  const RAIN_URL =
    "https://plus.unsplash.com/premium_photo-1661715304145-e686bb947289?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbnklMjB3ZWF0aGVyJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D";
  return (
    <div className="InfoBox">
      <h2>weather info</h2>

      <div className="card">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="span">
              {info.city} {
              info.humidity > 80
                ? <ThunderstormIcon/>
                : info.temp > 15
                ? <WbSunnyIcon/>
                : <AcUnitIcon/>
            }
            </Typography>
            <Typography variant="body2" color="text.secondary" component="span">
              <p>Temperature: {info.temp}&deg;C</p>
              <p>min Temp: {info.tempMin}&deg;C</p>
              <p>max Temp: {info.tempMax}&deg;C</p>
              <p>humidity: {info.humidity}</p>
              <p>
                The weather seems like {info.weather} and it feels like:
                {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
