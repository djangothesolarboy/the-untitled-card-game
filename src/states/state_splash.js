/*
	Note:

	Set state to splash again if you want multiple different promos.
	Put logos / brands in an array of strings, use an index to select the logo.
	When you run out of indices, set state to menu.
*/

state_splash=
{
	max_time:5000,
	current:0,
	elapsed:0,

	logo:undefined,
	alpha:0,
	text:"FlareWare",

	screen_index:0,
	screens:
	[
		{text:"FlareWare",img:""},
		{text:"FlareWare",img:""},
		{text:"FlareWare",img:""},
		{text:"FlareWare",img:""},
	],

	init:()=>
	{
		state_splash.current=time.current;
		state_splash.logo=new Image();
		state_splash.logo.src="./res/img/logo.jpg";
	},

	deinit:()=>
	{

	},

	update:()=>
	{
		/* Call deinit after X seconds to transition to menu. */
		let elapsed=time.current-state_splash.current;
		let alpha=elapsed/state_splash.max_time;
		
		if(alpha>0.5)
		{
			state_splash.alpha=-(((elapsed-state_splash.max_time)/state_splash.max_time)*2);
		}
		else
		{
			state_splash.alpha=(alpha*2);
		}

		if(elapsed>=state_splash.max_time)
		{
			state_set("splash");
		}
	},
	
	draw:()=>
	{
		gfx.context.globalAlpha=state_splash.alpha;

		let sw=gfx.context.canvas.width;
		let sh=gfx.context.canvas.height;
		let lw=state_splash.logo.width;
		let lh=state_splash.logo.height;
		let lx=(sw/2)-(lw/2);
		let ly=(sh/2)-(lh/2);

		gfx.context.drawImage(state_splash.logo,lx,ly);

		let txtw=gfx.context.measureText(state_splash.text).width;
		gfx.context.textAlign="left";
		gfx.context.fillStyle="#fff";
		gfx.context.font="1rem roboto";

		x=(sw/2)-(txtw);
		y=sh-32;

		gfx.context.fillText(state_splash.text,x,y);
	},
};