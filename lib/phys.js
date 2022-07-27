phys={};

phys_init=()=>
{
	game_event_fire("on_phys_init",time);
}

phys_update=()=>
{
	timer_update();
	game_event_fire("on_state_update",state.current);
	state.current.update();
}