import React, { useEffect, useState } from 'react';

function NotificationsUtility() {

    const [openNotifications, setOpenNotifications] = useState(false);

    useEffect(() => {

        const handleClickOutSide = () => {
            setOpenNotifications(false);
        };

        document.addEventListener('click', handleClickOutSide);
        return () => document.removeEventListener('click', handleClickOutSide);

    }, []);

    return (
        <div className="notifications relative">
            {/* Notifications Toggler */}
            <button
                type="button"
                title="Notifications"
                aria-label="Notifications"
                onClick={e => {
                    e.stopPropagation();
                    setOpenNotifications(prev => !prev)
                }}
                className="notifications-toggler text-2xl"
            >
                <i className="fa-solid fa-bell fa-fw"></i>
                <span className="sr-only">Notifications Toggler</span>
            </button>
            {/* Notifications Container */}
            <div className={`notifications-container ${openNotifications ? "" : "opacity-0 pointer-events-none -translate-y-2 translate-x-2"} transition text-nowrap absolute z-50 right-0 top-full mt-2 bg-black-color-6 p-3 rounded-md border border-black-color-12`}>
                Notifications Container
            </div>
        </div>
    )
}

export default NotificationsUtility;