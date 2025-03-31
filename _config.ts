import lume from "lume/mod.ts";
import plugins from "./plugins.ts";

const site = lume({
  location: new URL("https://builtbycharlie.biz"),
});

site.use(plugins());

export default site;
