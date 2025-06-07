import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
  imageSrc: string;
  alt: string;
}

export default function AuthLayout({ children, imageSrc, alt }: AuthLayoutProps) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-primary-background text-neutral">
      {/* LEFT: Form */}
      <div className="flex flex-col justify-center items-center p-10 md:p-16">
        <div className="w-full max-w-md">{children}</div>
      </div>

      {/* RIGHT: Image with overlay */}
      <div className="relative hidden md:block overflow-hidden">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover brightness-[0.7] transition-all duration-500"
          priority
        />

        {/* Gradient Blend (fade edges into background) */}
        <div className="absolute inset-0 bg-gradient-to-l from-primary-background/80 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
