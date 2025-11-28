export interface Review {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: 'Nedim Samic',
    position: 'CO Founder',
    company: 'Stealth Startup',
    content: "As a co-founder, I provided Joe Destefano with the mockups for one of our sub-products at our Stealth Startup. While the final product closely follows the original mockups, Joe added some cool customizations that enhanced the design and functionality. He delivered an amazing result that exceeded expectations. This sub-product is just one of many we are currently developing, and Joe's contributions have been invaluable. I can't wait to see how the next sub-product turns out. I definitely recommend him.",
    rating: 5
  },
  {
    id: 2,
    name: 'Joseph Kileen',
    position: 'Founder',
    company: 'Striv Lifestyle',
    content: "I hired Joe to create my website, Striv Lifestyle. He completed the majority of the site, but since it isn't needed at the moment, I asked him to postpone finishing it for now. I will have him complete and update it if necessary in the future. Meanwhile, Joe began working on a nutrition app powered by AI as a sub-product of the site, and it's coming out amazing. Joe consistently goes above and beyond and has made the design for both projects exactly how I wanted. I highly recommend Joe for his dedication and excellent work.",
    rating: 5
  },
  {
    id: 3,
    name: 'Jubril Akolade',
    position: 'Tutor',
    company: 'Career Foundry',
    content: "I have had the pleasure of mentoring Joe at Career Foundry and have consistently been impressed by his dedication and the quality of his work. He always submitted excellent projects, often going above and beyond the requirements. There were times when Joe ran into issues and had to take initiative by figuring out alternative solutions on his own—just like a real developer. Based on his strong performance and commitment, I am happy to provide a referral for Joe.",
    rating: 5
  }
];
