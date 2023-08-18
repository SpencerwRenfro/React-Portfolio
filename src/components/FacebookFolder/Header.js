import '../../CSS/header.css'
import facebookAVatar from './images/facebookAvatar.jpg';
import fbClose from './images/fbClose.svg';
import DotsImg from './images/fbDots.svg';
import likes from '../../../src/components/FacebookFolder/images/Reactions/like.png'
export default function Header(props) {



    return (
        <div>
            {props.commentOne === undefined ?
                <div className="post-header bg-zinc-900">
                    <div className="user-profile-image">
                        <img className="user-profile-image" src={facebookAVatar} alt="facebook profile img" />
                    </div>
                    <div className="user-info">
                        <span className="post-header">Spencer Renfro</span>
                        <span>{props.time ? props.time : ''}</span>
                    </div>
                    <img className="icon" alt="three dots" src={DotsImg} />
                    <img className="icon" alt="close button" src={fbClose} />
                </div>

                :

                <div>
                    <div className="user-info flex ">
                        <img className="user-profile-image" src={facebookAVatar} alt="facebook profile img" />
                        <div className="rounded-lg bg-zinc-100 text-zinc-900 px-2">
                            <span className="font-semibold  text-zinc-900">Spencer Renfro</span>
                            <div>{props.commentOne}</div>
                            <div className='pt-5 pb-2'>{props.commentTwo}</div>
                        </div>
                    </div>
                    <div className='flex ml-8 mt-2 gap-4 text-zinc-100'>
                        <p className='cursor-pointer'>Like</p>
                        <p className='grow cursor-pointer'>Reply</p>
                        <span>7</span><img className='w-6' src={likes} alt="reactions" />
                    </div>
                </div>
            }
        </div>
    );
}
