function HeaderItems({Icon , title}) {
    return (
        <div className="group">
            <Icon className="h-8 mb-1" />
            <p className="tracking-widest opacity-0 group-hover:opacity-100  ">{title}</p>
        </div>
    )
}

export default HeaderItems
