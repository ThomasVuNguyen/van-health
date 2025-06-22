import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Logo */}
      <header className="pt-8 pb-16">
        <div className="max-w-2xl mx-auto px-6">
          <div className="flex justify-center">
            <div className="text-2xl font-light text-gray-800 tracking-wide">studio</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 pb-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
            creating something
            <br />
            meaningful together
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto">
            we believe in the power of simple ideas executed beautifully. every project starts with understanding what
            matters most.
          </p>
        </div>

        {/* Personal Touch Section */}
        <div className="mb-20">
          <div className="aspect-[4/3] relative mb-8 rounded-lg overflow-hidden bg-gray-100">
            <Image src="/placeholder.svg?height=400&width=600" alt="Studio workspace" fill className="object-cover" />
          </div>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              this is where the magic happens — each project is a journey of discovery. we've learned that the best work
              comes from genuine collaboration and understanding.
            </p>
            <p>
              our approach is simple: listen deeply, think carefully, and create something that resonates. we're not
              interested in following trends, but in finding what's true for each story we help tell.
            </p>
            <p>if you have something meaningful you'd like to bring to life, we'd love to hear about it.</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:hello@studio.com"
              className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
            >
              start a conversation
            </a>
            <a
              href="#work"
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-full hover:border-gray-400 transition-colors duration-200 text-sm font-medium"
            >
              see our work
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-500">© 2024 studio. made with care.</p>
        </div>
      </footer>
    </div>
  )
}
