import React from 'react'
import {useParams} from 'react-router-dom'
import {Card, CardBody, Container, Table} from 'reactstrap'
import styles from './TriHourSummary.module.css'
import env from 'react-dotenv'
import moment from 'moment'

const TriHourSummary = ({weekForecast, triHourlyForecast}) => {
    
    let {seconds} = useParams()
    let targetIndex 
    

    for (let i=0; i<weekForecast.length; i++){
        if (weekForecast[i].dt == seconds){
            targetIndex = i
            break
        }
    }
    
    

    return(
        <div className={styles.background}>
            <Container className={styles.container}>
                <Card className={styles.card}>
                <CardBody>{moment(seconds * 1000).format('DD/MM/YYYY')}</CardBody>
                
                {weekForecast !== [] ? weekForecast[targetIndex] !== undefined ? 
                <CardBody><img src={env.WEATHER_ICON_URL + weekForecast[targetIndex].weather[0].icon + '@2x.png'}/></CardBody> : '' : '' }

                    <CardBody>
                    
                    <Table className={styles.tableContainer}>
                    <thead>
                    <tr>
                        <th className={styles.table}>Time</th>
                        <th className={styles.table}>Weather</th>
                        <th className={styles.table}>Description</th>
                        <th className={styles.table}>Temperature</th>
                    </tr>
                    </thead>
                    <tbody>
                        {triHourlyForecast !== [] ? 
                        triHourlyForecast[targetIndex] !== undefined ? 
                        triHourlyForecast[targetIndex].map((data) => {
                            return(
                                <>
                                    <tr>
                                        <td>{(data.dt_txt).split(' ')[1]}</td>
                                        <td><img src={env.WEATHER_ICON_URL + data.weather[0].icon + '.png'}/></td>
                                        {/* <td>{data.weather[0].icon}</td> */}
                                        <td>{data.weather[0].description}</td>
                                        <td>{data.main.temp}  °C</td>
                                    </tr>
                                </>
                            )
                        }) 
                        : '' : ''}
                    </tbody>
                    </Table>
                    
                    </CardBody>
                </Card>
            </Container>
        </div>
    )
}

export default TriHourSummary