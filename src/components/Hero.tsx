import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="../../../Home_video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        {/* Lighter overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-hero-text mb-6 leading-tight">
            The Best Way to Make Someone Happy...
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-hero-text/80 mb-8 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt
          </p>

          <Button
            size="lg"
            className="bg-button-primary text-button-primary-text hover:bg-button-primary-hover font-semibold text-base sm:text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
          >
            CHOOSE YOUR BOX
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-hero-text/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-hero-text/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
