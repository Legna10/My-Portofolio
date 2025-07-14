import React, { useState } from 'react'
import './Certificates.css'
import cert1 from '../../assets/Certif/MTCNA.pdf'
import cert2 from '../../assets/Certif/BNSP.png'
import cert3 from '../../assets/Certif/1.pdf'
import event1 from '../../assets/Certif/hology.png'
import event2 from '../../assets/Certif/gemastik.jpg'
import event3 from '../../assets/Certif/setsail.png'
import event4 from '../../assets/Certif/bssn.jpg'
import event5 from '../../assets/Certif/compsphere.jpg'
import event6 from '../../assets/Certif/interact.jpg'
import event7 from '../../assets/Certif/techx.png'
import file from '../../assets/file.svg'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const eventCerts = [
  { src: event1 },
  { src: event2 },
  { src: event3 },
  { src: event4 },
  { src: event5 },
  { src: event6 },
  { src: event7 }
]

const Certificates = () => {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className="certificates">
      <div className="square">
        <h3 className="certif-title">Achievements & Certifications</h3>
        <div className="cert-list">
          <div className="cert-item">
            <div className="cert-info">
              <h3>MTCNA</h3>
              <p>Issued by: MicroTik</p>
              <p>2022-10-13</p>
            </div>
            <img src={file} alt="View PDF" className="file-icon" onClick={() => setSelectedPdf(cert1)} />
          </div>
          <div className="cert-item">
            <div className="cert-info">
              <h3>KKNI Level II on Computer and Network Engineering Expertise Competency</h3>
              <p>Issued by: BNSP</p>
              <p>2023-05-11</p>
            </div>
            <img src={cert2} alt="Certificate" className="clickable-cert small-cert-img" onClick={() => setSelectedImg(cert2)} />
          </div>
          <div className="cert-item">
            <div className="cert-info">
              <h3>3rd Winner, Economic Survival Exhibition Competition 2024</h3>
              <p>Issued by: Economic Survival President University</p>
              <p>2024-05-08</p>
            </div>
            <img src={file} alt="View PDF" className="file-icon" onClick={() => setSelectedPdf(cert3)} />
          </div>
        </div>
      </div>
      <div className="square">
        <h3 className="event-title">Others</h3>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '.arrow-btn.right',
            prevEl: '.arrow-btn.left',
          }}
          className="event-swiper"
        >
          {eventCerts.map((item, idx) => (
            <SwiperSlide key={idx} onClick={() => setSelectedImg(item.src)}>
              <img src={item.src} alt={`Event Cert ${idx}`} className="swiper-img" />
            </SwiperSlide>
          ))}
          <div className="arrow-btn left"><BsChevronLeft /></div>
          <div className="arrow-btn right"><BsChevronRight /></div>
        </Swiper>
        </div>
        {selectedImg && (
          <div className="modal" onClick={() => setSelectedImg(null)}>
            <img src={selectedImg} alt="Certificate enlarged" />
          </div>
        )}
      </div>
  )
}

export default Certificates
