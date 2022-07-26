asserted=false;

assert=(cond,msg)=>
{
	if(!cond)
	{
		console.log(msg);
		/* This flag halts the whole engine  */
		asserted=true;
	}
}