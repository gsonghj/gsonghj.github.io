export interface Profile {
  href: string
  openInNewTab: boolean
  label: string
  ariaLabel: string
  icon: string
}

export const profile: Profile[] = [
  {
    href: "https://github.com/gsonghj",
    openInNewTab: true,
    label: "깃허브",
    ariaLabel: "깃허브 바로가기",
    icon: "radix-icons:github-logo",
  },
  // {
  //   href: "https://linkedin.com/in/hyunjeong-song",
  //   openInNewTab: true,
  //   label: "링크드인",
  //   icon: "radix-icons:linkedin-logo",
  // },
  {
    href: "mailto:gsonghj@gmail.com",
    openInNewTab: false,
    label: "이메일",
    ariaLabel: "이메일 보내기",
    icon: "radix-icons:envelope-closed",
  },
  {
    href: "/송현정_프론트엔드_신입_이력서.pdf",
    openInNewTab: true,
    label: "이력서",
    ariaLabel: "이력서 열기",
    icon: "radix-icons:file-text",
  },
]
