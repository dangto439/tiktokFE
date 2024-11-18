import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Image from "../../../image";


const cx = classNames.bind(styles)
function AccountItem({data}) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} 
                src={data.avatar}
                alt = {data.fullName}/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.fullName}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon= {faCheckCircle}/>}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
      );
}

export default AccountItem;