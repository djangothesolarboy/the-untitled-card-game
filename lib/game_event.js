game_event={};

game_event_sub=(event_name,alias,fn)=>
{
	assert(!!event_name&&typeof(event_name)===`string`,`Event name must be a string.`);
	assert(!!alias&&typeof(alias)===`string`,`Alias must be a string.`);
	assert(!!fn&&typeof(fn)==`function`,`Callback must be a function.`);
	if(!game_event[event_name]) game_event[event_name]={};
	game_event[event_name][alias]=fn;
}

game_event_unsub=(event_name,alias)=>
{
	assert(!!game_event[event_name],`${event_name} is non-existant game event.`);
	assert(!!game_event[event_name][alias],`${alias} is a non-existant subscribed game event.`);
	game_event[event_name][alias]=undefined;
}

game_event_fire=(event_name,...args)=>
{
	if(!game_event[event_name])
	{
		game_event[event_name]={};
	}
	for(let key in game_event[event_name])
	{
		game_event[event_name][key](args);
	}
}