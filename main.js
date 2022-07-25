let context; /* Holds a reference to the 2d rendering context. (Lets us draw to the screen / canvas.) */
let delta_time=1000/30; /* Amount of time that must pass before the next update is called. */
let cur_time=0; /* Just a timestamp of the current time */
let frame_time=0; /* The difference between the current and last frame of rendering */
let acc_time=0; /* The sum of the frame times. We use this to determine when to run the next update. */
let elapsed_time=0; /* The total time passed in ms since the engine has started. */
let game_state=0; /* Hold the current state of the game. */

/* Setup / Initialize game / engine vars. */
onload=()=>
{
	let canvas=document.getElementById("canvas");
	context=canvas.getContext("2d");
	/* Starts the game loop! */
	game_run();
}

/* Main game loop, calls recursively */
game_run=(new_time=0)=>
{
	/* Get the time difference in ms between the current and previous frame */
	frame_time=new_time-cur_time;
	/* Sums the differences in frame times, so we determine whether physics should update or not. */
	acc_time+=frame_time;
	/* Keeps track of time stamp. */
	cur_time=new_time;
	/* While there is still accumulated frame time left, run physics / simulations */
	while(acc_time>=delta_time)
	{
		/* Subtract delta time from accumulated time, until its not longer greater than delta. */
		acc_time-=delta_time;
		/* Continously sums the time passed since engine start. */
		elapsed_time+=delta_time;
		/* Main physics call. */
		phys_update();
	}
	/* Main render call */
	window_draw();
	/* Runs game_run again recursively. */
	requestAnimationFrame(game_run);
}

/* For Physics / Simulations */
phys_update=()=>
{
}

window_resize=()=>
{
	context.canvas.width=window.innerWidth;
	context.canvas.height=window.innerHeight;
}

/* For Animations / Rendering */
window_draw=()=>
{
	window_resize();
}