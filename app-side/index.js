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
    ctx.response({
      data: { status: false },
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
      }
    });
  },

  onRun() {},

  onDestroy() {},
});
