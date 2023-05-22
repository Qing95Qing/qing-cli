#! /usr/bin/env node

import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import process from "process";
import chalk from "chalk";
import ncp from "ncp";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const createProject = (answers) => {
	const templatePath = path.join(__dirname, "../template/react");
	try {
		const targetPath = path.join(process.cwd(), answers.projectName);
		if (fs.existsSync(targetPath)) {
			console.log(chalk.yellow(`当前目录已存在${answers.projectName}文件夹`));
			return;
		}
		fs.mkdirSync(targetPath, { recursive: true });

        // 复制文件
		ncp(templatePath, targetPath, (err) => {
			if (err) {
				console.log(chalk.red(err));
                return;
			}
            console.log(chalk.green(`Creating ${answers.projectName} successfully!`));
            // 更新package.json中的内容
            console.log(chalk.blue(`Starting to modify package.json`));
            const pkgPath = path.join(targetPath, "package.json");
            let pkgData = fs.readFileSync(pkgPath);
            // pkgData = JSON.parse(pkgData);
            pkgData = pkgData.toString();
            // pkgData.name = answers.projectName;
            pkgData = pkgData.replace('<%=projectName%>', answers.projectName);
            fs.writeFileSync(pkgPath, pkgData);
            console.log(chalk.green(`Modifying package.json successfully!`));

		});



	} catch (e) {
		console.error(e);
	}
};

const question = [
	{
		type: "input",
		message: "项目名称",
		default: "new-app",
		name: "projectName",
	},
];

inquirer.prompt(question).then((answers) => {
	console.log(`Hello ${answers.projectName}`);
	createProject(answers);
});
