import { AiFillCaretDown, AiOutlineLeft, AiOutlineRight, AiOutlineHeart, AiFillHeart, AiFillCaretUp } from "react-icons/ai"
import { BsShareFill, BsLink45Deg } from "react-icons/bs"
import { FcGoogle } from "react-icons/fc"

interface IconsProps {
  isOpen?: boolean
}

export const ArrowUpIcon = () => <AiFillCaretUp className="w-8 h-8 text-white" />
export const ArrowDownIcon = () => <AiFillCaretDown className="sm:w-8 sm:h-8 text-white" />
export const LeftArrowIcon = () => <AiOutlineLeft className="w-4 h-4 " />
export const RightArrowIcon = () => <AiOutlineRight className="w-4 h-4 text-black" />
export const ShareIcon = ({isOpen}: IconsProps) => <BsShareFill className={`w-8 h-8 transition-all ${isOpen ? 'text-dark' : 'text-white'}`} />
export const OutlineHeart = () => <AiOutlineHeart className="w-8 h-8 text-white OutlineHeart" />
export const FillHeart = () => <AiFillHeart className="w-8 h-8 text-white FillHeart" />
export const LinkIcon = () => <BsLink45Deg className="w-4 h-4 text-dark" />
export const GoogleIcon = () => <FcGoogle className="w-4 h-4" />
export const InstaIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px"><radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fd5"/><stop offset=".328" stopColor="#ff543f"/><stop offset=".348" stopColor="#fc5245"/><stop offset=".504" stopColor="#e64771"/><stop offset=".643" stopColor="#d53e91"/><stop offset=".761" stopColor="#cc39a4"/><stop offset=".841" stopColor="#c837ab"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4168c9"/><stop offset=".999" stopColor="#4168c9" stopOpacity="0"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"/><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"/><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"/></svg>
