interface Profile {
  href: string
  openInNewTab: boolean
  label: string
  ariaLabel: string
  icon: string
}

export const github: Profile = {
  href: "https://github.com/gsonghj",
  openInNewTab: true,
  label: "깃허브",
  ariaLabel: "깃허브 바로가기",
  icon: "radix-icons:github-logo",
}

// export const linkedin: Profile = {
//   href: "https://linkedin.com/in/hyunjeong-song",
//   openInNewTab: true,
//   label: "링크드인 바로가기",
//   icon: "radix-icons:linkedin-logo",
// }

export const email: Profile = {
  href: "mailto:gsonghj@gmail.com",
  openInNewTab: false,
  label: "이메일",
  ariaLabel: "이메일 보내기",
  icon: "radix-icons:envelope-closed",
}

export const resume: Profile = {
  href: "/송현정_프론트엔드_신입_이력서.pdf",
  openInNewTab: true,
  label: "이력서",
  ariaLabel: "이력서 열기",
  icon: "radix-icons:file-text",
}

export const profile: Profile[] = [github, email, resume]
