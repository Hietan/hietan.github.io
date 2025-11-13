import {FaFacebook, FaInstagram, FaLinkedin, FaXTwitter} from "react-icons/fa6";

import type {LinkSns} from "@/type/data/link_sns";

const linksSns: LinkSns[] = [
  {
    href: "https://x.com/hietan622",
    ariaLabel: "X",
    icon: FaXTwitter
  },
  {
    href: "https://www.instagram.com/hietan622/",
    ariaLabel: "Instagram",
    icon: FaInstagram
  },
  {
    href: "https://www.facebook.com/profile.php?id=100011491658795&locale=ja_JP",
    ariaLabel: "Facebook",
    icon: FaFacebook
  },
  {
    href: "https://www.linkedin.com/in/kazumayamasaki/",
    ariaLabel: "LinkedIn",
    icon: FaLinkedin
  },
];

export default linksSns;
