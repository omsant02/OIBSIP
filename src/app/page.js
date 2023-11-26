import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div className=" text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            gihsgvish k efshhfrwovhsoushfuofhrv h rhfojhdiohfwe hdfil vwheuvhh
            rhv dhv vsdhv dh sjv sjhvsfh dvhvdfvhvciduhvidfh n df
            vdfhvbfhvdfbvfi vdivdfvfvh fvhddfhvuicvhdfvhfjkhcvnfbxv
            hdgkgsbniuxhkjbdf nbbodfhjljdfjvil xuvkm
          </p>
          <p>
            gihsgvish k efshhfrwovhsoushfuofhrv h rhfojhdiohfwe hdfil vwheuvhh
            rhv dhv vsdhv dh sjv sjhvsfh dvhvdfvhvciduhvidfh n df
            vdfhvbfhvdfbvfi vdivdfvfvh fvhddfhvuicvhdfvhfjkhcvnfbxv
            hdgkgsbniuxhkjbdf nbbodfhjljdfjvil xuvkm
          </p>
          <p>
            gihsgvish k efshhfrwovhsoushfuofhrv h rhfojhdiohfwe hdfil vwheuvhh
            rhv dhv vsdhv dh sjv sjhvsfh dvhvdfvhvciduhvidfh n df
            vdfhvbfhvdfbvfi vdivdfvfvh fvhddfhvuicvhdfvhfjkhcvnfbxv
            hdgkgsbniuxhkjbdf nbbodfhjljdfjvil xuvkm
          </p>
        </div>
      </section>
      <section className="text-center my-8">
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
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2023 All rights reserved
      </footer>
    </>
  );
}
