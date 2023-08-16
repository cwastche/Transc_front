import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';



interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Play', href: '/', current: true },
    { name: 'Profile', href: '#courses-section', current: false },
    { name: 'Chat', href: '#mentors-section', current: false },
    { name: 'Ladder', href: '#testimonial-section', current: false },
    { name: 'Logout', href: '#testimonial-section', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    return (
        <Disclosure as="nav" className="bg-lightpink navbar">
            <>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="relative flex h-20 items-center justify-between">
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">

                        {/* LOGO + NAME */}

                            <div className="flex flex-wrap content-center">
                                <img
                                    src={'./assets/default_avatar.svg'}
                                    // src={'./assets/test.jpeg'}
									
									width="30"
									height="30"
                                    alt="Avatar"
                                />
								<p className="text-xl content-center ml-3">Custom name</p>
                            </div>

                        {/* LINKS */}

                            <div className="hidden sm:ml-14 md:block">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? ' text-purple' : 'hover:text-purple',
                                                'px-3 py-4 text-15px font-medium space-links'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
