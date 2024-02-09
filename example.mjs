import runFnPeriodically from "./dist/package.mjs"

const loop = runFnPeriodically(async () => {
	console.log("hello from loop")

	await (new Promise(resolve => setTimeout(resolve, 500)))
}, 1000)

setTimeout(() => {
	loop.cancel()
}, 10)
