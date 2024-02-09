# @anio-js-foundation/run-fn-periodically

Run a function periodically.

```js
import runFnPeriodically from "@anio-js-foundation/run-fn-periodically"

const loop = runFnPeriodically(async () => {
	console.log("hello from loop")

	await (new Promise(resolve => setTimeout(resolve, 500)))
}, 1000)

setTimeout(() => {
	loop.cancel()
}, 10)

```
