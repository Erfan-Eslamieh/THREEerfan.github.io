import EventEmitter from './EventEmitter.js'


export default class Time extends EventEmitter
{
	constructor()

	{
		super()

		this.start = Date.now()
		this.current = this.started
		this.elapsed = 0
		this.delta = 16


        // Time resize event
		window.requestAnimationFrame(() =>

		{
			this.tick()
		})

  

	}

	tick()

	{
		const currentTime = Date.now()
		this.delta = currentTime - this.current
		this.current = currentTime
		this.elapsed = this.current - this.start 



		this.trigger('tick')






		

		window.requestAnimationFrame(() =>

		{
			this.tick()
		})

	}
}
