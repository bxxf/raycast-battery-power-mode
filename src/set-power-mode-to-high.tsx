import { Toast, closeMainWindow, showToast } from "@raycast/api";
import { runAppleScript } from "run-applescript";

import { exec } from "child_process";
import { promisify } from "util";

const execP = promisify(exec);

export default async function Command() {
  await closeMainWindow();
  const res = await execP("pmset -g | grep powermode | awk '{print $2}'");
  const currentMode = res.stdout.trim();

  if (currentMode === "2") {
    await showToast({ style: Toast.Style.Failure, title: 'Power mode is already set to "High"' });
    await setTimeout(() => {}, 1000);
  } else {
    await runAppleScript('do shell script "sudo /usr/bin/pmset -a lowpowermode 2"');
    await showToast({ style: Toast.Style.Success, title: 'Power mode set to "High"' });
  }
}
