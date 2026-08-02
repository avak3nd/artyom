type SectionHeaderProps = {
    icon: React.ElementType;
    title: string;
    description: string;
};

function SectionHeader({
    icon: Icon,
    title,
    description,
}: SectionHeaderProps) {
    return (
        <div className="border-b border-[#ededee] pb-8 mb-10">
            <div className="flex h-13.5 w-13.5 items-center justify-center rounded-xl border border-[#ededee] bg-[#f6f6f6] mb-8">
                <Icon size="base" color="#77777d" />
            </div>

            <h2 className="text-[21px] font-medium">{title}</h2>

            <p className="text-[#77777d] text-[14px] mt-3 font-medium max-w-100">
                {description}
            </p>
        </div>
    );
}

export default SectionHeader;