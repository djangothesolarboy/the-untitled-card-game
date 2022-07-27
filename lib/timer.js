timer={};
timer.simple_timers=[]; /* Fire and forget. */
timer.timers={}; /* Named Timers */

timer_create=(alias,dur,reps,fn)=>
{
	assert(timer.timers[alias]==undefined,`Timer ${alias} already exists.`);
	timer.timers[alias]=
	{
		current:time.current,
		duration:dur,
		reps:reps,
		fn:fn
	};
}

timer_simple=(dur,fn)=>
{
	timer.simple_timers.push(
	{
		current:time.current,
		duration:dur,
		fn:fn
	});
}

timer_destroy=(alias)=>
{
	assert(timer.timers[alias]!=undefined,`Timer ${alias} does not exist.`);
	timer.timers[alias]=undefined;
}

timer_update=()=>
{
	/* Unnamed Timers */
	for(let i=0;i<timer.simple_timers.length;i++)
	{
		let _timer=timer.simple_timers[i];
		if(!_timer) continue;
		let elapsed=time.current-_timer.current;
		if(elapsed>=_timer.duration)
		{
			_timer.fn();
			/* Delete the timer after it expires. */
			timer.simple_timers[i]=undefined;
		}
	}
	/* Repeating / Named Timers */
	for(let key in timer.timers)
	{
		let _timer=timer.timers[key];
		if(!_timer) continue;
		let elapsed=time.current-_timer.current;
		if(_timer.reps==0)
		{
			/* Delete the timer when its reps run out. */
			timer.timers[key]=undefined;
			continue;
		}
		if(elapsed>=_timer.duration)
		{
			_timer.current=time.current; /* Get a new timestamp. */
			if(_timer.reps!=-1) /* Account for infinite timers. */
			{
				_timer.reps--; /* Decrease reps */
			}
			_timer.fn(_timer); /* Run their code */
		}
	}
}