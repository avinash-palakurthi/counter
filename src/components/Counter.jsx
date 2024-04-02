import { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(10);

	const handleIncrement = () => {
		setCount(count + 1);
	};
	const handleDecrement = () => {
		// setCount(count - 1);
		{
			count <= 0 ? setCount(0) : setCount(count - 1);
		}
	};
	const handleAdd = () => {
		setCount(count + 10);
	};
	const handleReset = () => {
		setCount(0);
	};

	return (
		<div className=" flex  flex-wrap items-center justify-center w-2/3 mx-auto mt-5 bg-slate-500 bg-opacity-30 text-white rounded-2xl p-5">
			<div className="flex flex-col flex-wrap items-center justify-center">
				<h1 className=" text-7xl">{count}</h1>
				<div className="flex flex-wrap  gap-2 mx-5 my-4 ">
					{/* increment */}
					<button
						onClick={handleIncrement}
						className="p-2 bg-gray-700 px-5 rounded uppercase"
					>
						increment
					</button>
					{/* decrement */}
					<button
						onClick={handleDecrement}
						className="p-2 bg-gray-700 px-5 rounded uppercase"
					>
						decrement
					</button>
					{/* add */}
					<button
						onClick={handleAdd}
						className="p-2 bg-gray-700 px-5 rounded uppercase"
					>
						+10
					</button>

					{/* reset */}
					<button
						onClick={handleReset}
						className="p-2 bg-gray-700 px-5 rounded uppercase"
					>
						reset
					</button>
				</div>
			</div>
		</div>
	);
};

export default Counter;
