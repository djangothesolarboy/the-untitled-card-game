state={};
state.current=undefined;
state.states={};

state_init=()=>
{
	game_event_fire("on_state_init");
	assert(state.current!=undefined,"You must supply an initial game state.");
}

state_add=(alias,obj)=>
{
	state.states[alias]=obj;
}

state_set=(alias)=>
{
	assert(state.states[alias]!=undefined,"Please provide a valid game state.");
	if(state.current) state.current.deinit(); /* Deinitialize old state. */
	state.current=state.states[alias]; /* Set new state. */
	state.current.init(); /* Init new state. */
}