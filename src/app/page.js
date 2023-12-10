import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div className=" text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Welcome to ST, where passion for pizza meets culinary expertise! Our
            journey began with a simple dream – to create the perfect pizza
            experience for our community. We believe in using only the finest
            ingredients, crafted with love, to deliver a slice of happiness to
            every customer.
          </p>
          <p>
            At ST, we pride ourselves on innovation and authenticity. From our
            hand-tossed crusts to our signature sauces, each element is
            carefully curated to tantalize your taste buds. Our commitment to
            quality extends beyond the kitchen; it's embedded in our culture. We
            strive to create not just meals but memories, turning every dining
            moment into a celebration of flavors and togetherness.
          </p>
          <p>
            Join us on this delightful journey as we redefine the pizza
            experience. Whether you're a traditionalist or an adventurous eater,
            our diverse menu has something for everyone. Thank you for choosing
            ST, where every pizza is a masterpiece, and every customer is a
            cherished part of our story.
          </p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+911234000099"
          >
            +91 1234 00 00 99
          </a>
        </div>
      </section>
    </>
  );
}
