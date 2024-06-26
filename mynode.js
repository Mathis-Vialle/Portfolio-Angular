const fs = require("fs");
const path = require("path");
const successColor = "\x1b[32m%s\x1b[0m";
const checkSign = "\u{2705}";
const dotenv = require("dotenv").config({ path: "src/.env" });

const envFile = `export const environment = {
    DATASET_NAME: '${process.env.DATASET_NAME}',
    DATASET_TOKEN: '${process.env.DATASET_TOKEN}',
    PROJECT_ID: '${process.env.PROJECT_ID}',
    EMAIL_SERVICE_ID: '${process.env.EMAIL_SERVICE_ID}',
    EMAIL_TEMPLATE_ID: '${process.env.EMAIL_TEMPLATE_ID}',
    EMAIL_PUBLIC_KEY: '${process.env.EMAIL_PUBLIC_KEY}',
};
`;
const targetPath = path.join(__dirname, "./src/environments/environment.ts");
fs.writeFile(targetPath, envFile, (err) => {
  if (err) {
    console.error(err);
    throw err;
  } else {
    console.log(
      successColor,
      `${checkSign} Successfully generated environment.ts`
    );
  }
});
