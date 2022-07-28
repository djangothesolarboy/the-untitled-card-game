let add_event=document.addEventListener;
let remove_event=document.removeEventListener;

state_wait=
{
	text:"Click to continue",

	onclick:()=>
	{
		remove_event("click",state_wait.onclick);
		state_set("splash");
	},

	init:()=>
	{
		add_event("click",state_wait.onclick);
	},

	deinit:()=>
	{

	},

	update:()=>
	{

	},
	
	draw:()=>
	{
		let sw=gfx.context.canvas.width;
		let sh=gfx.context.canvas.height;

		let txtw=gfx.context.measureText(state_wait.text).width;
		gfx.context.textAlign="center";
		gfx.context.fillStyle="#fff";
		gfx.context.font="32px roboto bold";

		x=(sw/2);
		y=(sh/2)-(32);

		gfx.context.fillText(state_wait.text,x,y);
	},
};

