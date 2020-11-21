const WEATHER =  gql`
    query getWeather($zip: String) {
      weather(zip: $zip) {
        city
        temperature
        conditions
        zip

      }
    }
  `;


