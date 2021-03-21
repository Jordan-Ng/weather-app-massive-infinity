import React from 'react'
import {Card, CardBody} from 'reactstrap';
import styles from './Weathercard.module.css'
import {useHistory} from 'react-router-dom'

  const Weathercard = ({props : {image, imageAlt, maxTemp, minTemp, date, dt}}) => {
      let history = useHistory()
      return(
          <>
            <Card className={styles.cardMargin} onClick={() => history.push('/summary/' + dt)}>
                <CardBody className={styles.weather}>
                    <img src={image} alt={imageAlt}/>
                </CardBody>
                <CardBody className={styles.temp}>
                    <div className={styles.tempDivIndicator}>High </div>
                    <div className={styles.tempDivValue}>{maxTemp} °C</div>
                </CardBody>
                <CardBody className={styles.temp}>
                    <div className={styles.tempDivIndicator}>Low </div>
                    <div className={styles.tempDivValue}>{minTemp} °C</div>
                </CardBody>
                <CardBody className={styles.date}>{date}</CardBody>
            </Card>
          </>
      )
  } 

  export default Weathercard