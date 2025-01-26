"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import { useAuth } from "@/context/auth-context";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { useMeli } from "@/context/meli-context";

const callsToAction = [
  { name: "Solicita acceso", href: "#", icon: PlayCircleIcon },
  { name: "Contactanos", href: "#", icon: PhoneIcon },
];

export default function PanelNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const { meliAuth } = useMeli();
  const { logout, user } = useAuth();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-30 w-full transition-bg duration-300 ${
        scrolling ? "bg-white" : "bg-transparent"
      } lg:border-b-2 lg:border-gray-200`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <h3 className="text-gray-900 text-xl font-semibold">Libreo</h3>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Abrir menu principal</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:grid lg:grid-cols-2 lg:gap-x-12">
          {meliAuth ? (
            <Link
              href="/panel/mercadolibre"
              className="text-xl font-light text-gray-900"
            >
              Mercado Libre
            </Link>
          ) : (
            <span className="text-xl font-light text-gray-500 cursor-default">
              Mercado Libre
            </span>
          )}

          <Link
            href="/panel/sheets"
            className="text-xl font-light text-gray-900"
          >
            Google Sheets
          </Link>
        </PopoverGroup>

        <PopoverGroup className="hidden lg:grid lg:grid-cols-1 ml-10 text-gray-900 space-x-3">
          <Popover className="relative">
            <PopoverButton className="flex items-center rounded-full">
              <img
                className="object-contain h-10 w-10 rounded-full"
                src={user.picture ? user.picture : "/avatar.webp"}
                alt="Avatar"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute right-0 top-full z-10 mt-3 w-screen max-w-xs overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4 space-y-1">
                <div className="group relative flex items-center gap-x-6 rounded-xl py-2 px-4 text-md font-light hover:bg-gray-50">
                  <button className="w-full text-left" onClick={() => logout()}>
                    Cerrar sesión
                  </button>
                </div>
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <h3 className="text-gray-900 text-2xl font-semibold">Libreo</h3>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Cerrar menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {meliAuth && (
                  <Link
                    href="/panel/mercadolibre"
                    className="-mx-3 block rounded-lg px-3 py-2 text-md font-light text-gray-900 hover:bg-gray-50"
                  >
                    Mercado Libre
                  </Link>
                )}
                <Link
                  href="/panel/sheets"
                  className="-mx-3 block rounded-lg px-3 py-2 text-md font-light text-gray-900 hover:bg-gray-50"
                >
                  Google Sheets
                </Link>
              </div>
              <div className="py-6">
                <>
                  <button
                    onClick={() => logout()}
                    className="-mx-3 block rounded-lg px-3 py-2.5 w-full text-start text-md font-light text-gray-900 hover:bg-gray-50"
                  >
                    Cerrar sesión
                  </button>
                </>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
