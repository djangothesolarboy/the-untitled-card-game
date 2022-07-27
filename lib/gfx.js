gfx={};
gfx.context=undefined;

gfx_init=()=>
{
	let canvas=document.getElementById("canvas");
	gfx.context=canvas.getContext("2d");
	game_event_fire("on_gfx_init",gfx.context);
}

gfx_fadein=(dur,inteval,fn)=>
{

}

gfx_fadeout=(dur,interval,fn)=>
{

}

/* Ensure that the canvas' width matches the browser width. */
gfx_resize=()=>
{
	gfx.context.canvas.width=window.innerWidth;
	gfx.context.canvas.height=window.innerHeight;
	game_event_fire("on_window_resize",gfx.context);
}

/* Ensures the previous frame is cleared before attempting to draw to it. */
gfx_clear=()=>
{
	gfx.context.fillStyle="#000";
	gfx.context.fillRect(0,0,gfx.context.canvas.width,gfx.context.canvas.height);
	game_event_fire("on_window_clear",gfx.context);
}

/* For Animations / Rendering */
gfx_draw=()=>
{
	gfx_resize();
	gfx_clear();
	state.current.draw();
	game_event_fire("on_state_draw",gfx.context);
}