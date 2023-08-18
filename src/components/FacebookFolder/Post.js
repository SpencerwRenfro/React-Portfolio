import Header from './Header';
import Reactions from './Reactions';
import '../../CSS/post.css';



export default function Post(props) {
    return(
        <div className="faceboook-post bg-zinc-900 ">
            <Header time={'19hr'}/>
            <div className="post"></div>
    
            <Reactions/>
        </div>
    );
}

