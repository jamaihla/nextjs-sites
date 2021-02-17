import Image from 'next/image'

export default function LogoFooter() {
    return (
        <Image
            src="/pennyjuice/logo.svg"
            className="lg:w-4/6 mb-6"
            alt="Penny Juice"
            width={295}
            height={65}
            quality={100}
        />
    )
}