import React from 'react'


export default function DashboardStatsGrid() {
	return (
		

    <div class="pt-6 flex flex-wrap gap-4 justify-center  ">

        
        <div
            class="flex flex-col gap-2 h-40 text-white rounded-xl shadow-md p-6 max-w-[240px] bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-400">
            <div class="font-semibold text-lg">Total Sales</div>
            <div class="font-semibold text-5xl tracking-tight">$54232</div>
            <span className="text-sm text-green-500 pl-2">+343</span>
        </div>

        {/* */}
        <div
            class="flex flex-col gap-2 h-40 text-white rounded-xl shadow-md p-6 max-w-[240px] bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-400">
            <div class="font-semibold text-lg">Total Customers</div>
            <div class="font-semibold text-5xl tracking-tight">12313</div>
            <span className="text-sm text-red-500 pl-2">-30</span>
        </div>

		<div
            class="flex flex-col gap-2 h-40 text-white rounded-xl shadow-md p-6 max-w-[240px] bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-400">
            <div class="font-semibold text-lg">Total Orders</div>
            <div class="font-semibold text-5xl tracking-tight">16432</div>
            <span className="text-sm text-red-500 pl-2">-43</span>
        </div>

		<div
            class="flex flex-col gap-2 h-40 text-white rounded-xl shadow-md p-6 max-w-[240px] bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-400">
            <div class="font-semibold text-lg">Total Expenses</div>
            <div class="font-semibold text-5xl tracking-tight">$3423</div>
            <span className="text-sm text-green-500 pl-2">-343</span>
        </div>

    </div>


	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}
