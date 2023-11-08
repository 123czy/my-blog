import React, { useEffect } from 'react';
import { HomeOutlined, BgColorsOutlined, SettingOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import { useLinkList } from './config'
import s from './index.scss'
import { NavLink, useNavigate } from 'react-router-dom';
const TopBar: React.FC = () => {
    const { navArr, secondNavArr, mobileNavArr } = useLinkList()
    useEffect(() => {
        console.log(useLinkList(), navArr, secondNavArr, mobileNavArr, "opop")
    }, [])
    return (
        <>
            <div className={s.content}>
                <div className={s.center}>
                    <div className={s.homeBtn}>
                        <HomeOutlined />
                    </div>
                    
                    <div className={s.document}>
                        <div className={s.secondaryBtn}></div>
                        {
                                secondNavArr.map((item, index) => (
                                    <NavLink className={({ isActive }) => (isActive ? s.sedActive : s.articelsSecondItem)} key={index} to={item.to}>{item.name}</NavLink>
                                ))
                            }
                        文章
                    </div>
                    {
                        navArr.map((item, index) => (
                            <NavLink key={index} className={({ isActive }) => (isActive ? s.navActive : s.navBtn)} to={item.to}>{item.name}</NavLink>
                        ))
                    }

                    <div className={s.setting}>
                        <BgColorsOutlined />
                        <SettingOutlined style={{ marginLeft: '24px' }} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopBar;