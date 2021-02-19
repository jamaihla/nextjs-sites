import Image from 'next/image'

export default function LogoFooter() {
    return (
        <div className="lg:w-4/6 mb-6">
        <Image
            src="/pennyjuice/logo-footer.svg"
            alt="Penny Juice Footer Logo"
            width={295}
            height={65}
            quality={100}
        />
        </div>
    )
}