const data = [
  "  ________________ PL W D L GD PTS",
  "1  Arsenal  18  15  2  1  28 47",
  "2  Manchester City  18  12  3  3  28 39",
  "3  Newcastle United  19  10  8  1  22 38",
  "4  Manchester United  18  12  2  4  8 38",
  "5  Tottenham  19  10  3  6  10 33",
  "6  Fulham  20  9  4  7  3 31",
  "7  Brighton  18  9  3  6  10 30",
  "8  Brentford  19  7  8  4  4 29",
  "9  Liverpool  18  8  4  6  9 28",
  "10  Chelsea  19  8  4  7  1 28",
  "11  Aston Villa  19  7  4  8  -5 25",
  "12  Crystal Palace  18  6  4  8  -9 22",
  "13  Nottingham Forest  19  5  5  9  -19 20",
  "14  Leeds  18  4  5  9  -7 17",
  "15  Leicester  19  5  2  12  -7 17",
  "16  Wolves  19  4  5  10  -15 17",
  "17  Bournemouth  19  4  4  11  -23 16",
  "18  West Ham  19  4  3  12  -10 15",
  "19  Everton  19  3  6  10  -11 15",
  "20  Southampton  19  4  3  12  -17 15",
];

export const dataListDebug = () => {
  return data.slice(1).map((row) => {
    const match = row.match(
      /(\d+) +(.+?) +(\d+) +(\d+) +(\d+) +(\d+) +([+-]?\d+) +(\d+)/
    );
    const [
      ,
      rank,
      team,
      matchesPlayed,
      wins,
      draws,
      losses,
      goalDifference,
      points,
    ] = match;
    return {
      rank,
      team,
      matchesPlayed,
      wins,
      draws,
      losses,
      goalDifference,
      points,
    };
  });
};