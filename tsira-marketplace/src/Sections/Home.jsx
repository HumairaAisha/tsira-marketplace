

function Home() {
  return (
    <section id='home'className='scroll-mt-20'>
      <div className=' bg-tsira-bg pt-32 px-8 md:px-10'>
         <h2 className="text-4xl md:text-5xl text-primary text-center font-semibold text-tsira-primary">Tsira</h2>
         <p className="text-tsira-muted text-center my-1.5">Where Social Meets Marketplace.</p>
         <div className="space-y-2 p-4">
            <p className="max-w-4xl mx-auto text-primary text-center text-sm md:text-lg text-tsira-muted">Tsira is a modern social marketplace designed to connect buyers and 
        sellers in a seamless, engaging, and secure way. Inspired by the 
        simplicity and familiarity of social media platforms, Tsira combines the 
        experience of browsing content with the functionality of e-commerce. </p>
        <p className="max-w-2xl mx-auto text-primary text-center text-sm md:text-lg text-tsira-muted">The platform allows users to easily discover products, interact with 
        sellers, and complete transactions—all within one unified environment. </p>
         </div>
         <div>
            <h3 className="text-tsira-primary text-center text-3xl font-semibold pt-6">Our Mission</h3>
            <p className="text-tsira-muted text-center text-sm md:text-base py-2 ">To simplify online buying and selling while promoting trust, 
            transparency, and environmentally responsible practices.</p>
         </div> 
      </div>
    </section>
  )
}

export default Home