export default function About() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[60vh] rounded-4xl overflow-hidden mb-20 group">
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=2000"
            alt="About Us"
            className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center p-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white italic mb-6">Our Story</h1>
              <p className="text-xl text-gray-200 font-light italic">Pragati Enterprise: Defining Modern Indian Lifestyle since 2020.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <span className="text-accent font-bold uppercase tracking-[.3em] text-xs">Quality First</span>
            <h2 className="text-4xl font-bold text-primary italic mt-4 mb-8">Crafting Comfort for Your Daily Life</h2>
            <div className="space-y-6 text-gray-500 leading-relaxed">
              <p>At Pragati Enterprise, we believe that fashion should be as comfortable as it is stylish. Founded in the heart of India's textile hub, we started with a simple mission: to provide premium quality clothing at prices that don't compromise your wallet.</p>
              <p>Every piece in our collection—from our breathable cotton t-shirts to our luxury nightdress—is designed with attention to detail, fabric quality, and the modern Indian silhouette in mind.</p>
              <p>We source only the finest fabrics and employ skilled artisans to ensure that when you wear Pragati, you feel the difference in every stitch.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&q=80&w=800" className="rounded-3xl h-64 w-full object-cover" alt="" />
            <img src="https://images.unsplash.com/photo-1594932224010-75f40c6bc666?auto=format&fit=crop&q=80&w=800" className="rounded-3xl h-64 w-full object-cover mt-12" alt="" />
          </div>
        </div>

        <div className="bg-primary rounded-4xl p-12 md:p-20 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold italic mb-8 underline decoration-accent decoration-2 underline-offset-8">Our Vision</h2>
            <p className="text-xl md:text-2xl font-light italic leading-relaxed text-gray-300">
              "To become India's most loved daily-wear brand by consistently delivering transparency, quality, and style to every household."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
