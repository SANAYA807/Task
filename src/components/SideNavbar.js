import React from 'react'

const SideNavbar = ({ sideNavArr }) => {
    return (
        <aside className="sideBar">
            {sideNavArr?.map((item) => (
                <a key={item.label} className={item.isActive ? "active" : ''} href={item.href}>
                    {item.label}
                </a>
            ))}
        </aside>
    )
}

export default SideNavbar