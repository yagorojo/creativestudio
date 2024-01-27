import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconMail,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="container m-auto border-t">
      <div className="flex flex-wrap justify-between px-10 py-[6rem] gap-20">
        <div className="text-3xl lg:text-6xl max-w-[700px]">
          Let&#39;s create an <span className="text-acc">experience</span> as{" "}
          <span className="text-acc">remarkable</span> as your business
        </div>
        <div>
          <div className="flex gap-10 lg:gap-14">
            <ul className="flex-col flex gap-4">
              <div className="text-sm">Main pages</div>
              <li>Home</li>
              <li>About</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
            <ul className="flex-col flex gap-4">
              <div className="text-sm">CMS Pages</div>
              <li>Projects</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
            <ul className="flex-col flex gap-4">
              <div className="text-sm">Utility</div>
              <li>Cookies</li>
              <li>Privacy Policy</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-10 m-8">
        <div>
          <IconBrandInstagram />
        </div>
        <div>
          <IconMail />
        </div>
        <div>
          <IconBrandFacebook />
        </div>
      </div>
    </footer>
  );
}
