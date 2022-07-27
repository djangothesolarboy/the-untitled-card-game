state_wait=
{
	text:"Click to continue",

	onclick:()=>
	{
		document.removeEventListener("click",state_wait.onclick);
		state_set("splash");
	},

	init:()=>
	{
		document.addEventListener("click",state_wait.onclick);
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
		gfx.context.textAlign="left";
		gfx.context.fillStyle="#fff";
		gfx.context.font="32px roboto bold";

		x=(sw/2)-(txtw);
		y=(sh/2)-(32);

		gfx.context.fillText(state_wait.text,x,y);
	},
};

