import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="flex flex-col items-center justify-center min-h-[600px] text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Your Style
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Explore our curated collection of premium fashion and accessories.
            Quality meets style in every piece.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              Shop Now
            </Button>
            <Button size="lg"  className="text-white bg-transparent border border-gray-600 hover:bg-white hover:text-black">
              View Collections
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}