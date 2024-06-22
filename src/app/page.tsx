import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import image4 from '@/images/photos/Profile.png'
import { getAllArticles } from '@/lib/articles'


function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

const ProfilePicture = () => (
  <Image
    src={image4}
    alt=""
    sizes="(min-width: 1024px) 32rem, 20rem"
    className={`-rotate-3 rounded-2xl bg-zinc-100 object-cover h-full dark:bg-zinc-800`}
  />
)


export default async function Home() {
  return (
    <>
      <Container id='home' className="items-center">
        <div className='flex flex-col-reverse md:flex-row items-center'>
          <div className="md:w-1/2 max-w-xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Software Engineer | Delivering Impactful Solutions
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              Hello! I'm Wilfred Yeku, a Software Engineer based in Dubai. I specialize in helping companies build web applications that drive business growth and efficiency. By leveraging my expertise in modern technologies, I create solutions that are not only robust and scalable but also tailored to meet your unique business needs.
            </p>
            <a href="#contact" className="cta">Get in Touch</a>
            <div className="mt-6 flex gap-6">
              <SocialLink href="https://x.com/yekuwilfred" aria-label="Follow on X" icon={XIcon} />
              <SocialLink href="https://www.instagram.com/steve_gate/" aria-label="Follow on Instagram" icon={InstagramIcon} />
              <SocialLink href="https://github.com/chetat" aria-label="Follow on GitHub" icon={GitHubIcon} />
              <SocialLink href="https://www.linkedin.com/in/yeku-wilfred-chetat/" aria-label="Follow on LinkedIn" icon={LinkedInIcon} />
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="mb-6 mt-10 max-w-xs px-2.5 lg:max-w-none">
              <ProfilePicture />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
