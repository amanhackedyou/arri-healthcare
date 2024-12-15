import React from 'react'
import styles from './why.module.css';
import { FaHandHoldingHeart, FaHandshakeSimple, FaHeadset } from 'react-icons/fa6';
import { FaAward, FaHome } from 'react-icons/fa';
import { HiClipboardDocumentList } from 'react-icons/hi2';
import { GiPeaceDove } from 'react-icons/gi';

const WhyChooseUs = () => {
  return (
    <section className={styles.body}>
        <h2>Why Arri Healthcare?</h2>
        <div className={styles.reasons}>
            <Reason icon={<FaHandHoldingHeart />} title="Compassionate Team" />
            <Reason icon={<FaHome />} title="Independence and Comfort" />
            <Reason icon={<FaHeadset />} title="Available 24/7" />
            <Reason icon={<FaHandshakeSimple />} title="Trusted By Families" />
            <Reason icon={<HiClipboardDocumentList />} title="Tailored Care" />
            <Reason icon={<FaAward />} title="Skilled Carers" />
        </div>
    </section>
  )
}

export default WhyChooseUs

const Reason = ({icon, title}: {icon: React.ReactNode, title: string}) => {
    return (<div className={styles.reason}>
        <span>{icon}</span>
        <h6>{title}</h6>
    </div>)
}