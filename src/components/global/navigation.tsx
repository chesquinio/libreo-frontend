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

const products = [
  {
    name: "Ventas",
    description: "Accede a toda la informacion relevante",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Envios",
    description: "Controla el flujo de tus paquetes",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Publicaciones",
    description: "Editalas de una manera sencilla",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Preguntas",
    description: "Visualizalas en un solo lugar",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Analiticas",
    description: "Todas tus metricas resumidas",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Solicita acceso", href: "#", icon: PlayCircleIcon },
  { name: "Contactanos", href: "#", icon: PhoneIcon },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const { isAuth, logout, user } = useAuth();

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
          <a href="#" className="-m-1.5 p-1.5">
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
        <PopoverGroup className="hidden lg:grid lg:grid-cols-5 lg:gap-x-12">
          <Popover className="relative col-span-3">
            <PopoverButton className="flex items-center text-xl gap-x-1 font-light text-gray-900">
              Caracteristicas
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="size-5 flex-none text-gray-400"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link href="/nosotros" className="text-xl font-light text-gray-900">
            Nosotros
          </Link>

          <Link
            href="/utilizacion"
            className="text-xl font-light text-gray-900"
          >
            Utilización
          </Link>
        </PopoverGroup>

        {isAuth ? (
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
                    <Link href="/panel" className="w-full text-left">
                      Panel
                    </Link>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-xl py-2 px-4 text-md font-light hover:bg-gray-50">
                    <button
                      className="w-full text-left"
                      onClick={() => logout()}
                    >
                      Cerrar sesión
                    </button>
                  </div>
                </div>
              </PopoverPanel>
            </Popover>
          </PopoverGroup>
        ) : (
          <div className="hidden lg:flex lg:flex-1 lg:space-x-3 lg:justify-end">
            <Link
              href="/iniciar-sesion"
              className="text-xl font-light text-gray-900"
            >
              Iniciar
            </Link>
            <div className="w-6 h-6 my-auto rounded-full text-black p-0.5 bg-gray-200">
              <ArrowRightIcon />
            </div>
          </div>
        )}
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
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
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5  text-md font-light text-gray-900 hover:bg-gray-50">
                    Caracteristicas
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {products.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-light text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-md font-light text-gray-900 hover:bg-gray-50"
                >
                  Nosotros
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-md font-light text-gray-900 hover:bg-gray-50"
                >
                  Utilización
                </Link>
              </div>
              <div className="py-6">
                {isAuth ? (
                  <>
                    <Link
                      href="/panel"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-md font-light text-gray-900 hover:bg-gray-50"
                    >
                      Panel
                    </Link>
                    <button
                      onClick={() => logout()}
                      className="-mx-3 block rounded-lg px-3 py-2.5 w-full text-start text-md font-light text-gray-900 hover:bg-gray-50"
                    >
                      Cerrar sesión
                    </button>
                  </>
                ) : (
                  <Link
                    href="/iniciar-sesion"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-md font-light text-gray-900 hover:bg-gray-50"
                  >
                    Iniciar
                  </Link>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
