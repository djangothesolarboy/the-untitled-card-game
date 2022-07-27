state_splash=
{
	current:0,
	elapsed:0,
	alpha:0,
	img:undefined,
	snd:undefined,
	screen_index:0,
	screens:screens,

	init:()=>
	{
		if(state_splash.screen_index>=state_splash.screens.length)
		{
			// state_set("menu");
			state_splash.screen_index=0;
			// return;
		}
		state_splash.current=time.current;
		state_splash.elapsed=0;
		state_splash.alpha=0;
		let screen=state_splash.screens[state_splash.screen_index];
		if(state_splash.snd) state_splash.snd.pause();
		state_splash.snd=new Audio(screen.snd);
		state_splash.snd.currentTime=0;
		state_splash.snd.play();
		state_splash.img=new Image();
		state_splash.img.src=screen.img;
	},

	deinit:()=>
	{

	},

	update:()=>
	{
		let screen=state_splash.screens[state_splash.screen_index];
		/* Call deinit after X seconds to transition to menu. */
		let elapsed=time.current-state_splash.current;
		let alpha=elapsed/screen.duration;
		
		if(alpha>0.5)
		{
			state_splash.alpha=-(((elapsed-screen.duration)/screen.duration)*2);
		}
		else
		{
			state_splash.alpha=(alpha*2);
		}
		
		if(elapsed>=screen.duration)
		{
			state_splash.screen_index++;
			state_set("splash");
		}
	},
	
	draw:()=>
	{
		gfx.context.globalAlpha=state_splash.alpha;
		let screen=state_splash.screens[state_splash.screen_index];		

		let sw=gfx.context.canvas.width;
		let sh=gfx.context.canvas.height;
		let lw=state_splash.img.width/2;
		let lh=state_splash.img.height/2;
		let lx=(sw/2)-(lw/2);
		let ly=(sh/2)-(lh/2);

		gfx.context.drawImage(state_splash.img,lx,ly,lw,lh);

		let txtw=gfx.context.measureText(screen.text).width;
		gfx.context.textAlign="left";
		gfx.context.fillStyle="#fff";
		gfx.context.font="1rem roboto bold";

		x=(sw/2)-(txtw);
		y=sh-32;

		gfx.context.fillText(screen.text,x,y);
	},
};