const images = [
  {
    src: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/9219d365-6779-40ac-81ab-c56c10e55a84/gallery-1-e409423a-1783535935620.webp',
    alt: 'Traditional Ethiopian coffee ceremony with a Jebena',
  },
  {
    src: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/9219d365-6779-40ac-81ab-c56c10e55a84/gallery-2-0640a6d2-1783535935638.webp',
    alt: 'Interior of a cozy, modern cafe with Ethiopian cultural decor',
  },
  {
    src: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/9219d365-6779-40ac-81ab-c56c10e55a84/gallery-3-209e4f66-1783535935893.webp',
    alt: 'A barista preparing a pour-over coffee',
  },
  {
    src: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/9219d365-6779-40ac-81ab-c56c10e55a84/gallery-4-107e4c2a-1783535934736.webp',
    alt: 'A cup of macchiato with latte art',
  },
  {
    src: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/9219d365-6779-40ac-81ab-c56c10e55a84/gallery-5-6492c0d1-1783535934960.webp',
    alt: 'Fresh pastries on display',
  },
  {
    src: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/9219d365-6779-40ac-81ab-c56c10e55a84/gallery-6-9776f990-1783535935656.webp',
    alt: 'Friends enjoying coffee in the cafe',
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 lg:py-32 bg-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">Gallery</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            A glimpse into the Abyssinia Brew experience.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
