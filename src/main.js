let context; /* Holds a reference to the 2d rendering context. (Lets us draw to the screen / canvas.) */
let delta_time=1000/30; /* Amount of time that must pass before the next update is called. */
let cur_time=0; /* Just a timestamp of the current time */
let frame_time=0; /* The difference between the current and last frame of rendering */
let acc_time=0; /* The sum of the frame times. We use this to determine when to run the next update. */
let elapsed_time=0; /* The total time passed in ms since the engine has started. */
let game_state=0; /* Hold the current state of the game. */
let game_state_fn; /*  */
let window_clear_color="#000"; 

const game_states=
[	
	[],/* Physics States */
	[],/* Render States */
];

/* Setup / Initialize game / engine vars. */
onload=()=>
{
	let canvas=document.getElementById("canvas");
	context=canvas.getContext("2d");
	/* game_register_states(); */
	/* Starts the game loop! */
	game_run();
}

/* Registers a state fn into the 2d game_states array */
game_register_state=(isrender,fn)=>game_states[(isrender*1)].push(fn);

/* TODO: Outsource this fn to the developer ( Call this in onload and expect it to exist. ) */

game_splash=()=>
{

}

game_menu_load=()=>
{

}

game_load=()=>
{

}

game_play=()=>
{

}

game_over=()=>
{

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

/* Ensure that the canvas' width matches the browser width. */
/* Called every frame. */
window_resize=()=>
{
	context.canvas.width=window.innerWidth;
	context.canvas.height=window.innerHeight;
}

/* Ensures the previous frame is cleared before attempting to draw to it. */
window_clear=()=>
{
	context.fillStyle=window_clear_color;
	context.fillRect(0,0,context.canvas.width,context.canvas.height);
}

/* For Animations / Rendering */
window_draw=()=>
{
	window_resize();
	window_clear();
	/* game_state_fn(); */
}