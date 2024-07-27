import { Config } from "./libs/types";

const config: Config = {
  env: {
    api: { PATH: process.env["NEXT_PUBLIC_API_PATH"]! },
  },
};

export { config };
