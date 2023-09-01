import clearSky from '../../images/weather_icons/clear-day.svg'
import cloudy from '../../images/weather_icons/cloudy.svg'
import partlyCloudy from '../../images/weather_icons/partly-cloudy-day.svg'
import overcast from '../../images/weather_icons/overcast.svg'
import fog from '../../images/weather_icons/fog.svg'
import drizzle from '../../images/weather_icons/drizzle.svg'
import rain from '../../images/weather_icons/rain.svg'
import extremeRain from '../../images/weather_icons/extreme-rain.svg'
import thunderstorm from '../../images/weather_icons/thunderstorms.svg'
import thunderstormRain from '../../images/weather_icons/thunderstorms-rain.svg'
import sleet from '../../images/weather_icons/sleet.svg'
import extremeSleet from '../../images/weather_icons/extreme-sleet.svg'
import snow from '../../images/weather_icons/snow.svg'
import extremeSnow from '../../images/weather_icons/extreme-snow.svg'
import notAvailable from '../../images/weather_icons/not-available.svg'

const weatherIcon = (value: number) => {

   let icon;

   switch (value) {
      case 1:
         icon = clearSky
         break;
      case 2:
         icon = partlyCloudy
         break;
      case 3:
         icon = partlyCloudy
         break;
      case 4:
         icon = cloudy
         break;
      case 5:
         icon = overcast
         break;
      case 6:
         icon = overcast
         break;
      case 7:
         icon = fog
         break;
      case 8:
         icon = drizzle
         break;
      case 9:
         icon = rain
         break;
      case 10:
         icon = extremeRain
         break;
      case 11: 
         icon = thunderstormRain
         break;
      case 12: 
         icon = sleet
         break;
      case 13: 
         icon = sleet
         break;
      case 14: 
         icon = extremeSleet
         break;
      case 15:
         icon = snow
         break;
      case 16:
         icon = snow
         break;
      case 17:
         icon = extremeSnow
         break;
      case 18:
         icon = drizzle
         break;
      case 19: 
         icon = rain
         break;
      case 20:
         icon = extremeRain
         break;
      case 21:
         icon = thunderstorm
         break;
      case 22:
         icon = sleet
         break;
      case 23:
         icon = sleet
         break;
      case 24:
         icon = extremeSleet
         break;
      case 25:
         icon = snow
         break;
      case 26:
         icon = snow
         break;
      case 27:
         icon = extremeSnow
         break;
      default: 
         icon = notAvailable
   }
   
   return icon
}

export default weatherIcon