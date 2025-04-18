import { ChevronDown, Phone, User, ArrowRight, CodeSquare } from "lucide-react";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div className="relative">
        {/* Hero Section Image */}
        <img
          src="https://s3-alpha-sig.figma.com/img/1e40/93a4/6480b71a5402f5e331d9bdb75cc82793?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=E9QbAIW3sVw4R2Q7ok6HKk7G7rB-Eb1mWJ3Fs3lIxx-PTPHAxrGUMrcYKpjZz1tzDZ5FQXs113rr0ZBQX3gwsz710HkQ~xiyw-Rs4B74o4rZu30vaYg8rsDNrkwXGO7oZa2e6UiVRFb7dbGNgOeLj8RXTXVX5j1bIjQ~PTEtCjHqgvbjrRha80BZxrTu4kEInbdWdM3-NrkcHMZ6mXCGAl7zyftCFfSQjpUhjZwJbW~vpSAxs1YizhRXYugOi01dcZVe-PcMnq78e~3YzH4eWqSzM7dxEFsNoVouL9ZS2FjciiFQiBV6JWsx~hgweyfG9SkWE6euQmSRn8N~9yaAdg__"
          alt="hero-image"
          className="absolute inset-0 brightness-75"
        />

        {/* Navbar */}
        <Navbar />

        {/* Hero Content */}
        <div className="relative z-10 text-white flex flex-col items-center justify-center min-h-screen">
          <div className="flex gap-4 text-sm font-roboto font-medium mb-6 bg-white/10 backdrop-blur-sm px-8 py-3 rounded-full border border-white/20 shadow-lg">
            <span className="flex items-center gap-1">
              <span className="text-[#E7C873]">5</span> Beds
            </span>
            <span className="text-xl text-white/70">·</span>
            <span className="flex items-center gap-1">
              <span className="text-[#E7C873]">2</span> Baths
            </span>
            <span className="text-xl text-white/70">·</span>
            <span className="flex items-center gap-1">
              <span className="text-[#E7C873]">180</span> sqft
            </span>
          </div>

          <h1 className="text-6xl font-roboto font-bold mb-4 text-center leading-tight">
            Office Space at <br /> Northwest
          </h1>

          <div className="text-xl font-roboto tracking-wide font-medium mb-6">
            $250/month
          </div>
          <Button className="bg-[#E7C873] hover:bg-yellow-500 text-black px-6 py-3 rounded-md font-roboto font-medium flex items-center gap-2">
            View Details <ArrowRight size={16} />
          </Button>
        </div>
      </div>

      {/* Cities Section */}
      <CitiesSection />

      {/* Why Work With Us Section */}
      <WhyWorkWithUsSection />

      {/* Featured Properties Section */}
      <FeaturedPropertiesSection />

      {/* Discover Image Section */}
      <DiscoverImageSection />

      {/* Real Estate Appreciation Section */}
      <RealEstateAppreciationSection />

      {/* Whats Our Customers Say Section */}
      <WhatsOurCustomersSaySection />

      {/* Recent Article and News Section */}
      <RecentArticleAndNewsSection />

      {/* Download App Section */}
      <DownloadAppSection />

      {/* Footer Section */}
      <FooterSection />
    </>
  );
}

export default App;

const Navbar = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-between px-6 py-4  w-[95%] h-20 mx-auto">
      {/* Logo */}
      <div className=" text-2xl font-roboto text-white tracking-wide font-bold">
        JustHome
      </div>

      {/* Navigation Links */}
      <div className="flex items-center justify-center gap-10">
        <div className="text-white font-roboto text-base font-medium tracking-wide flex items-center gap-1">
          Home <ChevronDown size={16} />
        </div>

        <div className="text-white font-roboto text-base font-medium tracking-wide flex items-center gap-1">
          Lisiting <ChevronDown size={16} />
        </div>

        <div className="text-white font-roboto text-base font-medium tracking-wide flex items-center gap-1">
          Members <ChevronDown size={16} />
        </div>

        <div className="text-white font-roboto text-base font-medium tracking-wide flex items-center gap-1">
          Blog <ChevronDown size={16} />
        </div>

        <div className="text-white font-roboto text-base font-medium tracking-wide flex items-center gap-1">
          Pages <ChevronDown size={16} />
        </div>

        <div className="text-white font-roboto text-base font-medium tracking-wide">
          Contact
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center justify-center gap-2">
          <Phone size={20} className="text-white" />
          <div className="text-white font-roboto text-base font-medium tracking-wide">
            +68 685 88666
          </div>
        </div>

        <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
          <User size={20} className="text-white" />
        </div>

        <Button className="bg-transparent border-2 border-white  px-5 py-5 rounded-full  text-white font-roboto text-base font-medium tracking-wide">
          Add Property
        </Button>
      </div>
    </div>
  );
};

const CitiesSection = () => {
  const cities = [
    {
      name: "New York",
      image:
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070",
      properties: 1200,
      description: "The city that never sleeps",
    },
    {
      name: "London",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070",
      properties: 850,
      description: "Where history meets modernity",
    },
    {
      name: "Tokyo",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2071",
      properties: 950,
      description: "A perfect blend of tradition and innovation",
    },
    {
      name: "Paris",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073",
      properties: 780,
      description: "The city of love and lights",
    },
  ];

  return (
    <section className="pt-8 pb-12 px-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-roboto font-bold mb-2">
            Find Properties in These Cities
          </h2>
          <p className="text-gray-600 font-roboto text-lg">
            Discover your perfect stay in the most exciting and vibrant cities
            around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cities.map((city, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/5] relative">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-roboto font-bold mb-2">
                    {city.name}
                  </h3>
                  <p className="text-gray-200 font-roboto mb-3">
                    {city.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-[#E7C873] font-bold">
                      {city.properties}
                    </span>
                    <span className="text-gray-300">Properties</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <Button className="bg-white/90 hover:bg-white text-black px-4 py-2 rounded-full font-roboto text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyWorkWithUsSection = () => {
  const features = [
    {
      icon: "📋",
      title: "Wide Range of Properties",
      description:
        "We offer expert legal help for all related property items in Dubai.",
    },
    {
      icon: "🏠",
      title: "Buy or Rent Homes",
      description:
        "We sell your home at the best market price and very quickly as well.",
    },
    {
      icon: "🛡️",
      title: "Trusted by Thousands",
      description:
        "We offer you free consultancy to get a loan for your new home.",
    },
  ];

  return (
    <section className="pt-12 pb-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-roboto font-bold mb-1">
            Why You Should Work With Us
          </h2>
          <p className="text-gray-600 font-roboto">
            Join hands with a team that values innovation, collaboration, and
            your growth together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-10 rounded-2xl bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-5xl mb-8 p-6 rounded-full bg-[#E7C873]/10 group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#E7C873]/20">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-roboto font-bold mb-4 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-roboto leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B4B40] to-[#2A6B5D] rounded-3xl transform rotate-1"></div>
          <div className="relative bg-[#1B4B40] rounded-3xl p-16 text-white text-center transform -rotate-1 hover:rotate-0 transition-transform duration-500">
            <h3 className="text-3xl font-roboto font-bold mb-6">
              Sign in to streamline your search
            </h3>
            <p className="text-gray-200 mb-10 font-roboto text-lg max-w-2xl mx-auto">
              Save properties, create alerts and keep track of the enquiries you
              send to agents.
            </p>
            <Button className="bg-[#E7C873] hover:bg-yellow-500 text-black px-10 py-4 rounded-xl font-roboto text-lg font-medium flex items-center gap-3 mx-auto transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
              Sign in or create an account <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturedPropertiesSection = () => {
  const properties = [
    {
      id: 1,
      title: "Luxury Family Home",
      address: "1800-1818 79th St",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
      price: "$395,000",
      beds: 4,
      baths: 1,
      sqft: 400,
      badges: ["FOR SALE", "FEATURED"],
    },
    {
      id: 2,
      title: "Skyper Pool Apartment",
      address: "1020 Bloomingdale Ave",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop",
      price: "$280,000",
      beds: 4,
      baths: 2,
      sqft: 450,
      badges: ["FOR SALE"],
    },
    {
      id: 3,
      title: "North Dillard Street",
      address: "4330 Bell Shoals Rd",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      price: "$250/month",
      beds: 4,
      baths: 2,
      sqft: 400,
      badges: ["FOR RENT"],
    },
    {
      id: 4,
      title: "Eaton Garth Penthouse",
      address: "7722 18th Ave, Brooklyn",
      image:
        "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?q=80&w=2070&auto=format&fit=crop",
      price: "$180,000",
      beds: 4,
      baths: 2,
      sqft: 450,
      badges: ["FOR SALE", "FEATURED"],
    },
    {
      id: 5,
      title: "New Apartment Nice View",
      address: "42 Avenue C, Brooklyn",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
      price: "$850/month",
      beds: 4,
      baths: 1,
      sqft: 460,
      badges: ["FOR RENT", "FEATURED"],
    },
    {
      id: 6,
      title: "Diamond Manor Apartment",
      address: "7802 20th Ave, Brooklyn",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop",
      price: "$259,000",
      beds: 4,
      baths: 2,
      sqft: 500,
      badges: ["FOR SALE", "FEATURED"],
    },
  ];

  return (
    <section className="pt-14 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-roboto font-bold mb-1">
            Featured Properties
          </h2>
          <p className="text-gray-600 font-roboto">
            Discover the best properties in the market with the best prices and
            the best locations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {["All Properties", "Villa", "Apartments", "Office"].map(
            (filter, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-roboto font-medium transition-all duration-300
                ${
                  index === 0
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            )
          )}
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3]">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {property.badges.map((badge, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-md text-xs font-medium
                        ${badge === "FOR SALE" ? "bg-[#1B4B40] text-white" : ""}
                        ${badge === "FOR RENT" ? "bg-[#1B4B40] text-white" : ""}
                        ${
                          badge === "FEATURED" ? "bg-[#E7C873] text-black" : ""
                        }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-roboto font-bold mb-2">
                  {property.title}
                </h3>
                <p className="text-gray-600 mb-4 flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {property.address}
                </p>

                {/* Property Details */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    {property.beds}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    {property.baths}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                    {property.sqft} sqft
                  </span>
                </div>

                {/* Price */}
                <div className="text-xl font-bold text-[#1B4B40]">
                  {property.price}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See All Listing Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-[#E7C873] hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-roboto font-medium transition-all duration-300">
            See All Listing
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

const DiscoverImageSection = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <img
        src="https://s3-alpha-sig.figma.com/img/60ce/1ce2/d0b32b58eb6b4d9aa832e29ceb60cef1?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jJSgjdAG1AH0lt5ucFVKZ~XCzwwhwlVGwLqZVwbsBMYE6Jrm6N3OsY2C57u91X1aHpvHh60D8zXmDkSmZ1IdC-ZSKK1FbDIzhQMCrACpLRpDHOOXy1WEAyfhU5bjRGYFr15AxE7GtaAYVEI8a-~P3bNuPXJXFTmUrzFxwzoudT1d5KN4N88TDOslPHkA~klL3DZA0OI~CC87LyV77EWXeqDUY-Eg0FMvDznlhG7VYydgrvNp5qrOoOAkylP3CW-HbcIj01cdiB2nf6ZGGzOAt1cssePWNNUCjy~b5BqHjoLTre71hBk5~fqr-lgKthHPGcBlw-T6Tx9G4JgiSIoDxg__"
        alt="Discover background"
        className="absolute inset-0 w-full h-full object-cover filter brightness-40"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        <h2 className="text-5xl font-roboto font-bold mb-6 leading-tight">
          Discover a place you'll <br /> love to live
        </h2>
        <p className="text-lg font-roboto text-gray-200 mb-8 max-w-lg mx-auto">
          Pellentesque egestas egestas faucibus sem. Velit nunc egestas ut
          morbi. Leo diam diam egestas ut morbi.
        </p>
        <Button className="bg-[#E7C873] hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-roboto text-lg font-medium flex items-center gap-2 mx-auto transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
          View Properties <ArrowRight size={20} />
        </Button>
      </div>
    </section>
  );
};

const RealEstateAppreciationSection = () => {
  const stats = [
    {
      value: "$18M",
      label: "Owned From Properties Transactions",
    },
    {
      value: "15K+",
      label: "Properties For Sell",
    },
    {
      value: "26K+",
      label: "Properties For Buy",
    },
    {
      value: "890",
      label: "Daily Completed Transactions",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-roboto font-bold mb-6 leading-tight">
            We Use Real Estate to Show Our Appreciation of The World
          </h2>
          <p className="text-gray-600 mb-12 font-roboto">
            Pellentesque egestas elementum egestas faucibus sem. Velit nunc
            egestas ut morbi. Leo diam diam nibh eget fermentum massa pretium.
            Mi mauris nulla ac dictum ut mauris non.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl font-bold text-[#1B4B40]">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-roboto text-sm leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <button className="mt-12 inline-flex items-center gap-2 bg-[#E7C873] hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-roboto font-medium transition-all duration-300">
            Learn More <ArrowRight size={20} />
          </button>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src="https://s3-alpha-sig.figma.com/img/352a/d35c/1e170868f54bb0440e4c9c47c243911b?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Cgjx7KCC~rJwGCqpbCOZMcECAOdiDs2h3HROXJJ3Xr5iAfhINCKo7fRJPczOvK-O8QHUDp0pPl64cb0ULnQvX7eeeNxTMCyFA-rLQBLvbHWgQwuFxt1b4VN9~fJUN5BmLgZLYwyV8t0jW6nMkfRp105zDoG0D49oFlbq1Jpam-p4ApaETVVWMat6KtUsbEZeseWiwioj2a7cykQiImzV1eNbbg7rLxIT3a6wBRj3TKYbJKUxMkPrR8DtdOiogK742onwz6M7G5Soi9rf2wgzjIjRoJ8i~Zjz8WpG0xB3MxDSpjGQMHhpj0Cgf-FKqqTlAQSwpNDbXbjPKJQiVVINeA__"
            alt="Modern house"
            className="w-full h-full object-cover rounded-2xl shadow-2xl"
          />
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#E7C873]/20 rounded-2xl -z-10"></div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#1B4B40]/20 rounded-2xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

const WhatsOurCustomersSaySection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Cameron Williamson",
      role: "Designer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
      content:
        "Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dores.",
    },
    {
      id: 2,
      name: "Brooklyn Simmons",
      role: "Real Estate Agent",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887&auto=format&fit=crop",
      content:
        "The platform is incredibly user-friendly and efficient. The property comparison tool saved me hours of work. Highly recommend for any real estate professional.",
    },
  ];

  const companies = [
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    },
    {
      name: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    },
    {
      name: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    },
    {
      name: "Spotify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
    },
  ];

  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          {/* Left side - Stats */}
          <div className="mb-10 lg:mb-0">
            <h2 className="text-4xl font-roboto font-bold mb-4">
              What our customers are
              <br />
              saying us?
            </h2>
            <div className="flex items-center gap-8">
              <div>
                <div className="text-4xl font-roboto font-bold mb-2">10m+</div>
                <div className="text-gray-400 font-roboto">Happy People</div>
              </div>
              <div>
                <div className="text-4xl font-roboto font-bold mb-2">4.88</div>
                <div className="text-gray-400">Overall rating</div>
                <div className="flex items-center mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Testimonials */}
          <div className="w-full lg:w-1/2 relative">
            <div className="flex gap-6 overflow-hidden">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-full bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-roboto font-bold text-lg text-white">
                        {testimonial.name}
                      </h4>
                      <p className="font-roboto text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                    <div className="ml-auto">
                      <svg
                        className="w-8 h-8 text-[#E7C873]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>
                  <p className="font-roboto text-gray-400 leading-relaxed">
                    {testimonial.content}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-6 justify-end">
              <button className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Companies Section */}
        <div className="text-center">
          <p className="font-roboto text-gray-400 mb-12">
            Thousands of world's leading companies trust Space
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-24 h-12 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const RecentArticleAndNewsSection = () => {
  const articles = [
    {
      category: "Apartment",
      date: "March 15, 2024",
      title: "Housing Markets That Changed the Most This Week",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      link: "#",
    },
    {
      category: "Apartment",
      date: "March 15, 2024",
      title: "Real Unveils the Best Canadian Cities for Biking",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      link: "#",
    },
    {
      category: "Office",
      date: "March 15, 2024",
      title: "10 Walkable Cities Where You Can Live Affordably",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      link: "#",
    },
    {
      category: "Shop",
      date: "March 15, 2024",
      title: "New Apartment Nice in the Best Canadian Cities",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      link: "#",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-roboto font-bold mb-1">
            Recent Articles & News
          </h2>
          <p className="text-gray-600 font-roboto">
            Stay updated with the latest trends and insights from the real
            estate market
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category and Date */}
                <div className="flex items-center gap-4 mb-3 text-sm">
                  <span className="text-[#1B4B40] font-medium">
                    {article.category}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500">{article.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-roboto font-bold mb-4 line-clamp-2 group-hover:text-[#1B4B40] transition-colors duration-300">
                  {article.title}
                </h3>

                {/* Read More Link */}
                <a
                  href={article.link}
                  className="inline-flex items-center gap-2 text-[#1B4B40] font-medium hover:gap-3 transition-all duration-300"
                >
                  Read More
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DownloadAppSection = () => {
  return (
    <section className="py-20 px-6 bg-[#1B4B40]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white">
          <h2 className="text-4xl font-roboto font-bold mb-4">
            Download the App
          </h2>
          <p className="text-gray-300 mb-8 font-roboto text-lg">
            Take classes on the go with our just-home app. Stream or download to
            watch on the plane, the subway, or wherever you learn best.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-wrap gap-4">
            {/* App Store Button */}
            <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </button>

            {/* Google Play Button */}
            <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 12.86C20.5 13.07 20.75 13.5 20.75 13.97C20.75 14.44 20.51 14.87 20.16 15.08L17.07 16.85L14.54 14.32L16.81 12.05L20.16 12.86ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src="https://s3-alpha-sig.figma.com/img/c271/5902/735157e72b328f86ff38375591f73bf6?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SP1ekDeGS1DA~De0GwJtxEqdhNFRh35TXo5uiuQaJxNxTjRRydpefMp60szhI5VW9RLT~vvJnlsmd-vsFRD1Rmxwva0xdEUvei3Zp59dKmP5lXRurqUq42dR5812hV3XHgOlnmfMCQy3SMnEeG5LUMew~wkMwzhlFNT2eALpdA9VZkvdeYiAFEVg4LjIcCFOj4YG0-XgtW5JjzoRfubsD0FPPK-dYrzqirPJb73XfcBQXBPrIJqOBZcFoe~sEo~rtU2xfzEoUgOaeARg~Ej0RVAAwOk9ChtYxqxl0Gm0DMEjDITbsgW-MGTyUMXOqGtD9GihXifzrQT-AuQDJtBfLw__"
            alt="Download App"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#E7C873]/20 rounded-2xl -z-10"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#E7C873]/20 rounded-2xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

const FooterSection = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Logo and Description Column */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-roboto font-bold mb-6">JustHome</div>
            <p className="text-gray-400 mb-8 font-roboto">
              Join hands with a team that values innovation, collaboration, and your growth together. We're here to help you find your perfect home.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-lg font-roboto font-bold mb-6">Product</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 font-roboto hover:text-white transition-colors">Landing Page</a></li>
              <li><a href="#" className="text-gray-400 font-roboto hover:text-white transition-colors">Popup Builder</a></li>
              <li><a href="#" className="text-gray-400 font-roboto hover:text-white transition-colors">Web-design</a></li>
              <li><a href="#" className="text-gray-400 font-roboto hover:text-white transition-colors">Content</a></li>
              <li><a href="#" className="text-gray-400 font-roboto hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-roboto font-bold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 font-roboto hover:text-white transition-colors">Academy</a></li>
              <li><a href="#" className="text-gray-400 font-roboto hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 font-roboto hover:text-white transition-colors">Themes</a></li>
              <li><a href="#" className="text-gray-400 font-roboto hover:text-white transition-colors">Hosting</a></li>
              <li><a href="#" className="text-gray-400 font-roboto hover:text-white transition-colors">Developers</a></li>
              <li><a href="#" className="text-gray-400 font-roboto hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-roboto font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 font-roboto hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 font-roboto hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 font-roboto hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-400 font-roboto hover:text-white transition-colors">Teams</a></li>
              <li><a href="#" className="text-gray-400 font-roboto hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-gray-400 font-roboto text-sm">
            © 2024 All Rights Reserved
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <a href="#" className="text-gray-400 font-roboto hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 font-roboto hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="text-gray-400 font-roboto hover:text-white transition-colors">Sales and Refunds</a>
            <a href="#" className="text-gray-400 font-roboto hover:text-white transition-colors">Legal</a>
            <a href="#" className="text-gray-400 font-roboto hover:text-white transition-colors">Site Map</a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};