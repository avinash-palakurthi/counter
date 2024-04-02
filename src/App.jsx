import Counter from "./components/Counter";

const App = () => {
	return (
		<div className=" capitalize h-screen   bg-gray-950 text-gray-500   ">
			<h1 className="text-3xl py-4 font-semibold text-center text-gray-400">
				counter
			</h1>
			{/* main emlements */}
			<div>
				<Counter />
			</div>
		</div>
	);
};

export default App;
