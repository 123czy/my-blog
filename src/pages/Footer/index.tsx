import React from 'react';
import { useTitle } from 'ahooks';
import s from './index.scss';
import { source_github } from '@/utils/config'
const Footer: React.FC = () => {
    const frameArr = [
        'React',
        'React Router',
        'Redux',
        'Webpack',
        'AntD',
        'ahooks',
        'CloudBase'
      ]; 
    return (
        <>
            <footer className={s.footer}>
                    <p>
                        个人博客系统
                        <a href={source_github} target='_blank' rel='noreferrer' className={s.text}>
                            「源代码」
                        </a>
                    </p>
                    <p>
                    浙ICP备2020043821号-1
                    </p>
                    <p>
                      {
                        frameArr.map(
                            (item,index) => (
                               <span className={s.siteFrame}>{item}</span>
                            )
                        )
                      }
                    </p>
            </footer>
        </>
    )
}

export default Footer;