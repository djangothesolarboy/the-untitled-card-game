game_event_sub("on_state_init","main_state_init",_=>
{
	/* Registering Game States. */
	state_add("splash",state_splash);
	state_add("pause",state_pause);
	state_add("menu",state_menu);
	/* Sets Initial Game State. */
	state_set("splash",state_splash);
});