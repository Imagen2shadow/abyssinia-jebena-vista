const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">Our Story</h2>
          <div className="mt-6 space-y-6 text-lg text-foreground/80">
            <p>
              Our journey begins in the heart of Ethiopia, the birthplace of coffee. At Abyssinia Brew, we are more than just a coffee shop; we are custodians of a rich heritage that dates back centuries. We honor the ancient traditions of coffee cultivation and preparation that have been passed down through generations.
            </p>
            <p>
              We are committed to preserving the authenticity of the Ethiopian coffee ceremony, a social ritual that celebrates hospitality and community. Our beans are sourced directly from local farmers in the renowned coffee-growing regions of Ethiopia, ensuring fair-trade practices and supporting the communities that are the backbone of this industry.
            </p>
            <p>
              From the careful selection of green beans to the traditional roasting and brewing in a 'Jebena', every step is a testament to our dedication to quality and tradition. We invite you to be part of our story and experience the true soul of Ethiopian coffee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
