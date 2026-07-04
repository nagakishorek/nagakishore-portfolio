export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 text-center text-gray-400">
      <p>
        © {new Date().getFullYear()} Naga Kishore K. All Rights Reserved.
      </p>

      <p className="mt-2 text-sm">
        Built with Next.js, React & Tailwind CSS
      </p>
    </footer>
  );
}