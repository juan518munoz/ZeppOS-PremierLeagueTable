import { MessageBuilder } from "../shared/message";
const messageBuilder = new MessageBuilder();

const getLeagueTable = async (ctx) => {
  try {
    const res = await fetch({
      url: "https://pl.apir7.repl.co/table",
      method: "GET",
    });
    if (res.status === 404) {
      throw "data not found";
    }
    console.log(res);
    const { body } = res;
    const bodyStringy = JSON.stringify(body);

    const table = bodyStringy
      .split(",")
      .slice(1)
      .map((row) => {
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

    console.log(table);
    ctx.response({
      data: {
        success: true,
        table: table,
      },
    });
  } catch (error) {
    console.log(error);
    const message = { error };
    ctx.response({
      data: { success: false, message },
    });
  }
};

const getLeagueFixture = async (ctx) => {
  try {
    const res = await fetch({
      url: "https://pl.apir7.repl.co/fixtures",
      method: "GET",
    });
    if (res.status === 404) {
      throw "data not found";
    }
    const { body } = res;
    let bodyStringy = JSON.stringify(body);
    bodyStringy = bodyStringy.split(String.fromCharCode(92)).join("").slice(1);

    const games = bodyStringy.split(",");
    const gamesArr = games.map((game) => {
      const gameArr = game.split("  ");
      if (gameArr.length === 3) {
        return {
          homeTeam: gameArr[0].slice(1),
          homeScore: "",
          awayTeam: gameArr[1].slice(1),
          awayScore: "",
          date: "Today",
          status: gameArr[2],
        };
      } else if (gameArr.length === 4) {
        return {
          homeTeam: gameArr[0].slice(1),
          homeScore: "",
          awayTeam: gameArr[1].slice(1),
          awayScore: "",
          date: gameArr[2].slice(1),
          status: gameArr[3].slice(0, -1),
        };
      } else if (gameArr.length === 5) {
        return {
          homeTeam: gameArr[0].slice(1),
          homeScore: gameArr[1],
          awayTeam: gameArr[2],
          awayScore: gameArr[3],
          date: "Today",
          status: gameArr[4].slice(0, -1),
        };
      } else if (gameArr.length === 6) {
        return {
          homeTeam: gameArr[0].slice(1),
          homeScore: gameArr[1],
          awayTeam: gameArr[2],
          awayScore: gameArr[3],
          date: gameArr[4],
          status: gameArr[5].slice(0, -1),
        };
      }
      return {
        homeTeam: gameArr[0].slice(1),
        homeScore: gameArr[1],
        awayTeam: gameArr[2],
        awayScore: gameArr[3],
        date: gameArr[4],
        status: gameArr[5],
      };
    });
    const fixture = gamesArr; 

    ctx.response({
      data: {
        success: true,
        fixture: fixture,
      },
    });
  } catch (error) {
    console.log(error);
    ctx.response({
      data: { success: false, error },
    });
  }
};

AppSideService({
  onInit() {
    messageBuilder.listen(() => {});

    messageBuilder.on("request", (ctx) => {
      const jsonRpc = messageBuilder.buf2Json(ctx.request.payload);
      if (jsonRpc.method === "GET_TABLE") {
        return getLeagueTable(ctx);
      } else return getLeagueFixture(ctx);
    });
  },

  onRun() {},

  onDestroy() {},
});
