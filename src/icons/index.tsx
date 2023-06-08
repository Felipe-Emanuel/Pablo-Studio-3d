import { AiFillCaretDown, AiOutlineLeft, AiOutlineRight, AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { BsShareFill, BsLink45Deg } from "react-icons/bs"

interface IconsProps {
  isOpen?: boolean
}

export const ArrowDownIcon = () => <AiFillCaretDown className="w-8 h-8 text-white" />
export const LeftArrowIcon = () => <AiOutlineLeft className="w-4 h-4 " />
export const RightArrowIcon = () => <AiOutlineRight className="w-4 h-4 text-black" />
export const ShareIcon = ({isOpen}: IconsProps) => <BsShareFill className={`w-8 h-8 transition-all ${isOpen ? 'text-dark' : 'text-white'}`} />
export const OutlineHeart = () => <AiOutlineHeart className="w-8 h-8 text-white OutlineHeart" />
export const FillHeart = () => <AiFillHeart className="w-8 h-8 text-white FillHeart" />
export const LinkIcon = () => <BsLink45Deg className="w-4 h-4 text-dark" />
