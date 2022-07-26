state_splash=
{
	max_time:10000,
	current:0,
	elapsed:0,

	init:()=>
	{
		state_splash.current=time.current;
		console.log("Splash Init",state_splash.current);
	},

	deinit:()=>
	{
		console.log("Splash Deinit",state_splash.current);
	},

	update:()=>
	{
		/* Call deinit after X seconds to transition to menu. */
		let t=time.current-state_splash.current;
		if(t>=state_splash.max_time)
		{
			state_set("menu",state_menu);
		}
	},

	draw:()=>
	{
		/* Draw the company logo here. */
		/* Indicate that a key can be pressed to skip to menu. */
	},
};