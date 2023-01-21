import { MessageBuilder } from "../shared/message";

const messageBuilder = new MessageBuilder();

const getData = async (ctx) => {
  try {
    // Requesting network data using the fetch API
    // The sample program is for simulation only and does not request real network data, so it is commented here
    //Example of a GET method request
    const res = await fetch({
      url: "https://pl.apir7.repl.co/table",
      method: "GET",
    });
    // Example of a POST method request
    // const { body: { data = {} } = {} } = await fetch({
    //   url: 'https://xxx.com/api/xxx',
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     text: 'Hello Zepp OS'
    //   })
    // })

    // This is for the simulator
    /*ctx.response({
      data: {
        result: {
          text: res.body,
        },
      },
    });*/

    // This is for the watch
    ctx.response({
      data: {
        result: { 
          text: JSON.stringify(res.body),
        },
      },
    });
  } catch (error) {
    ctx.response({
      data: { result: "ERROR in fetching data" },
    });
  }
};

AppSideService({
  onInit() {
    messageBuilder.listen(() => {});

    messageBuilder.on("request", (ctx) => {
      const jsonRpc = messageBuilder.buf2Json(ctx.request.payload);
      if (jsonRpc.method === "GET_DATA") {
        return getData(ctx);
      }
    });
  },

  onRun() {},

  onDestroy() {},
});
