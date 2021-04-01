const { CommitArgs, parse_args } = require('./parse_commit_args')

async function test_context(context) {
  const args = await parse_args(context)
  console.log('------------------------')
  console.log(args)
  console.log('------------------------')
}

async function main() {
  // await test_context(require('./.local/context_from_release.json'))
  await test_context(require('./.local/example_pr_context.json'))
  // process.env.RUN_SCRIPT="console.log('lama'); args.lama=11"
  // await test_context(require('./.local/example_push_context.json'))
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
