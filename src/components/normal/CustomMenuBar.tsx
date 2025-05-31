import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"


type Props = {
  children: React.ReactNode,
  listMenuOption: {
        content: string,
        menubarShortCut?: string, 
        menubarSeparator?: boolean,
        menubarIcon?:React.ElementType,
        onClick: () => void
  }[],
  side?: "top" | "right" | "bottom" | "left",
}

export default function CustomMenuBar({children, listMenuOption, side="right"}:Props) {
  return (
    <Menubar>
    <MenubarMenu>
        <MenubarTrigger>{children}</MenubarTrigger>
        <MenubarContent side={side}>
            {listMenuOption.map((item,index) => (
                <>
                    <MenubarItem key={index} onClick={item?.onClick}>
                        {item?.content}
                        {item.menubarShortCut && <MenubarShortcut>{item.menubarShortCut}</MenubarShortcut>}
                        {item.menubarIcon && <item.menubarIcon/>}
                    </MenubarItem>
                    {item.menubarSeparator && <MenubarSeparator key={index} /> }
                </>
            ))}
        </MenubarContent>
    </MenubarMenu>
    </Menubar>

  )
}
