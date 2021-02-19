import Image from 'next/image'

export default function LogoHeader() {
    return (
        <div className="lg:w-48 2xl:w-64">
        <Image
            src="/pennyjuice/logo.svg"
            alt="Penny Juice"
            width={256}
            height={56}
            quality={100}
        />
        </div>
    )
}