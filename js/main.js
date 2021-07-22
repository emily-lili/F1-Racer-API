const raceData = async (season, round) => {
    let response = await axios.get(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    console.log(response)
    return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
}