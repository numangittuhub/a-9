export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 tracking-wide text-green-200">
          GreenNest
        </h2>
        <p className="text-sm sm:text-base text-green-100 max-w-md mx-auto leading-relaxed">
          Nurturing nature, one leaf at a time.
        </p>
        <div className="mt-6 border-t border-green-700 pt-4">
          <p className="text-xs sm:text-sm text-green-300">
            © {new Date().getFullYear()} GreenNest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
