import * as THREE from 'three'

import Sizes from './Utils/Sizes.js'

import Time from './Utils/Time.js'

import Camera from  './Utils/Camera.js'

let instance = null


export default class Experience
{
	constructor(canvas)
	{

		if(instance)
		{
			return instance
		}

		instance = this


		window.experience = this



		this.canvas = canvas


	    this.sizes = new Sizes()
	    this.time = new Time()
	    this.scene = new THREE.Scene() 
	    this.camera = new Camera()
	    


	  

	    //Sizes resize event
	    this.sizes.on('resize' , () =>
	    {
	    	this.resize

	    })

        //Time tick event
	    this.time.on('tick', () =>

	    {
	    	this.update()
	    })
}
	resize()
	{
	}

    update()
    {

    }

 
}
	
