export let tools = [];
export let toolHandler = (x) => {};

export class Server {
  async setRequestHandler(requestSchema, handler) {
    const method = requestSchema.shape.method.value;

    if (method === 'tools/list') {
      const res = await handler();
      tools = res.tools.map((tool) => {
        tool.parameters = tool.inputSchema;
        delete tool.inputSchema;
        return tool;
      });
    }

    if (method === 'tools/call') {
      toolHandler = handler;
    }
  }

  connect(x) {}
}
