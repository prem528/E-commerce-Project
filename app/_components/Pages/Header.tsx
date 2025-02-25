'use client';

import Link from 'next/link';
import { ShoppingCart, Search, Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-20">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-lg font-semibold">
                Home
              </Link>
              <Link href="/shop" className="text-lg">
                Shop
              </Link>
              <Link href="/categories" className="text-lg">
                Categories
              </Link>
              <Link href="/about" className="text-lg">
                About
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex w-full items-center justify-between md:gap-10">
          <div className="flex items-center gap-2">
            <Link href="/" className="hidden md:block">
              <h1 className="text-xl font-bold">logo</h1>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/shop" className="text-sm font-medium">
                Shop
              </Link>
              <Link href="/categories" className="text-sm font-medium">
                Categories
              </Link>
              <Link href="/about" className="text-sm font-medium">
                About
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}