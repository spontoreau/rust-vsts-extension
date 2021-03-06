import { getInput } from "azure-pipelines-task-lib";
import { createInputCommand, executeCommand } from "./common/command";
import { launch } from "./common/launch";
import { getVerboseOption } from "./common/options";

const command = createInputCommand(
  "rustc",
  getInput("rustcInput"),
  `${getInput("rustcOptions")} ${getVerboseOption()}`
);

launch(async () => await executeCommand(command));
