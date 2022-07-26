game_init=()=>
{
	state_init();
	gfx_init();
	phys_init();
	game_run();
}

/* Main game loop. Runs recursively. */
game_run=(new_time=0)=>
{
	if(asserted) return;
	/* Get the time difference in ms between the current and previous frame */
	time.frame=new_time-time.current;
	/* Sums the differences in frame times, so we determine whether physics should update or not. */
	time.accumulated+=time.frame;
	/* Keeps track of time stamp. */
	time.current=new_time;
	/* While there is still accumulated frame time left, run physics / simulations */
	while(time.accumulated>=time.delta)
	{
		/* Subtract delta time from accumulated time, until its not longer greater than delta. */
		time.accumulated-=time.delta;
		/* Main physics call. */
		phys_update();
	}
	/* Main render call */
	gfx_draw();
	/* Runs game_run again recursively. */
	requestAnimationFrame(game_run);
}

/* Everything starts here. */
onload=_=>game_init();