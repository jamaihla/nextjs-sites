import Image from 'next/image'

export default function LogoHeader() {
    return (
        <Image
            src="/pennyjuice/logo.svg"
            className="lg-w-48 2xl:w-64"
            alt="Penny Juice"
            width={256}
            height={56}
            quality={100}
        />
    )
}