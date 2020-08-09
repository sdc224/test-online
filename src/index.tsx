import "core-js/stable";
import React from "react";
import ReactDOM from "react-dom";
// import { AppContainer as ReactHotAppContainer } from "react-hot-loader";
import Root from "@containers/Root";
import { configureStore, history } from "@store/configureStore";

const store = configureStore();

// const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;
const AppContainer = React.Fragment;

ReactDOM.render(
	<AppContainer>
		<Root store={store} history={history} />
	</AppContainer>,
	document.getElementById("root")
);
