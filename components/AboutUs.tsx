import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/hijab-about.png"
              alt="About Us"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-heading1-bold font-bold text-gray-900">
              About Bufanda
            </h2>
            <p className="text-gray-600">
              Welcome to <span className="font-semibold">Bufanda</span>, your
              premier destination for stylish and modest hijabs. We are passionate
              about providing high-quality hijabs that combine elegance, comfort,
              and affordability.
            </p>
            <p className="text-gray-600">
              Our mission is to empower women by offering a wide range of hijabs
              that suit every occasion, from everyday wear to special events. We
              believe that modesty and fashion can go hand in hand, and we are
              dedicated to helping you express your unique style.
            </p>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;