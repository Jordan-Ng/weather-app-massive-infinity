import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Weathercard from './Weathercard'
import styles from './Summary.module.css'
import {ReturnProps} from '../helper.js'


const Summary = ({weekForecast}) => {
    const importedData = weekForecast
    
    return(
    <div className={styles.background}>
      <Container>
        <Row>
            <Col xs='6' className={styles.today}>
                {importedData !== undefined ? importedData.length > 0 ? <Weathercard props={ReturnProps(importedData[0])} key='0'/> : '' : ''}
            </Col>

            <Col xs='1'></Col>

            <Col xs='5' className={styles.side}>
                {
                    importedData !== undefined ? importedData.length > 0 ? importedData.map((day, index) => {
                        if (index === 0) {
                            return ''
                        }

                        let props = ReturnProps(day)

                        return(
                            <Weathercard props={props} key={index}/>
                        )
                    }) : '' : ''
                }
            </Col>
        </Row>
      </Container>
    
    </div>
    )
}

export default Summary