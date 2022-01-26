#! /usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
const figlet = require('figlet')
const createHandler = require('../lib/create')

program
  .command('create <app-name>')
  .description('create a new project')
  .option('-f, --force', 'overwrite target directory if it exist')
  .action((name, options) => {
    console.log('>>>cli.js', name, options)
    createHandler(name, options)
  })

program
  .on('--help', () => {
    // 使用 figlet 绘制 Logo
    console.log('\r\n' + figlet.textSync(`yutang`, {
      font: 'Ghost',
      horizontalLayout: 'default',
      verticalLayout: 'default',
      width: 80,
      whitespaceBreak: true
    }));
    console.log(`\r\nRun ${chalk.cyan(`zr <command> --help`)} for detailed usage of given command\r\n`)
  })

program
  .version(`v${require('../package.json').version}`)
  .usage('<command> [option]')

program.parse()