import fnMeasureExecutionTime from "@anio-js-foundation/fn-measure-execution-time"

export default function runFnPeriodically(fn, period) {
	let loop_timer, stopped = false

	const loop = async () => {
		if (stopped) return

		const {execution_time} = await fnMeasureExecutionTime(fn)

		let delay = period

		delay -= execution_time

		if (0 > delay) delay = 0

		loop_timer = setTimeout(loop, delay)
	}

	loop_timer = setTimeout(loop, 0)

	return {
		cancel() {
			if (stopped) return

			clearTimeout(loop_timer)
			stopped = true
		}
	}
}
