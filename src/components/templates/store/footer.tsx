import FooterTop from "@/components/containers/store/footer-top";
import FooterMiddle from "@/components/containers/store/footer-middle";
import FooterBottom from "@/components/containers/store/footer-bottom";

interface FooterProps {}
export default function Footer({}: FooterProps) {
  return (
    <footer className='@container'>
      {/* Top */}
      <FooterTop />
      {/* Middle */}
      <FooterMiddle />
      {/* Bottom */}
      <FooterBottom />
    </footer>
  );
}
