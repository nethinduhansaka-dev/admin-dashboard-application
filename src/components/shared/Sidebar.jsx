import React from 'react';
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/consts/navigation';
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames';
import { HiOutlineLogout } from 'react-icons/hi'
const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-400 hover:no-underline active:bg-neutral-400 a rounded-sm text-base'


export default function Sidebar() {
  return (
    <div className="h-screen">
      <div className="bg-violet-950 w-60 p-3 flex flex-col text-white h-full">
        <div className='flex'>
        <div  class="text-lg font-bold flex items-center gap-2 px-1 py-3">
                <img
                  src="src/assets/logo.png"
                  class="h-6 mr-2"
                  alt=" Logo"
                />
                <span class="">
                  S O L E _ M A T E
                </span>
              </div>
        </div>
        <div className="py-8 flex flex-1 flex-col gap-0.5">
				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
			</div>
			<div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-300">
				{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
				<div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					Logout
				</div>
			</div>
    </div>
 </div>
  )
}

function SidebarLink({ link }) {
	const { pathname } = useLocation()

	return (
		<Link
			to={link.path}
			className={classNames(pathname === link.path ? 'bg-neutral-400 text-white' : 'text-neutral-100', linkClass)}
		>
			<span className="text-xl">{link.icon}</span>
			{link.label}
		</Link>
	)
}
