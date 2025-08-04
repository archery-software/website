import Link from 'next/link'
import React from 'react'

function LinkCard() {
  return (
    <Link
				href="/sight-marks"
				className="relative flex flex-col items-center justify-center w-full max-w-xs p-8 transition-all duration-200 bg-white border shadow-md border-slate-200 group rounded-2xl hover:shadow-lg hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
			>
				<div className="absolute transition-opacity duration-200 opacity-0 top-4 right-4 group-hover:opacity-100">
					<span className="inline-block px-2 py-1 text-xs font-semibold rounded-full text-slate-700 bg-slate-100">
						Click Me
					</span>
				</div>
				<div className="flex items-center justify-center mb-4 rounded-full bg-slate-100 w-14 h-14">
					<svg
						className="w-8 h-8 text-slate-500"
						fill="none"
						stroke="currentColor"
						strokeWidth={2}
						viewBox="0 0 24 24"
					>
						<rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
						<line x1="8" y1="8" x2="16" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
						<line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
						<line x1="8" y1="16" x2="12" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
					</svg>
				</div>
				<h1 className="mb-2 text-xl font-extrabold transition-colors duration-200 text-slate-900 group-hover:text-slate-600">
					Sight Marks
				</h1>
				<p className="text-sm text-center transition-colors duration-200 text-slate-500 group-hover:text-slate-700">
					Calculate your sight marks in 2 easy steps
				</p>
			</Link>
  )
}

export default LinkCard