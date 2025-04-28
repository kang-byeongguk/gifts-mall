import styles from '@/styles/CardList.module.scss'

export default function CardList(){
    return (
        <div className="row">
            <div className="col-6 col-md-3">
                <Card/>
            </div>
            <div className="col-6 col-md-3">
                <Card/>
            </div>
            <div className="col-6 col-md-3">
                <Card/>
            </div>
            <div className="col-6 col-md-3">
                <Card/>
            </div>
            <div className="col-6 col-md-3">
                <Card/>
            </div>
            <div className="col-6 col-md-3">
                <Card/>
            </div>
            <div className="col-6 col-md-3">
                <Card/>
            </div>
        </div>
    )
}
 function Card(){
    return(
        <div className={styles.cardContainer}>
            <img src="./03.jpg" alt="샘플" />
            <h3>상품명</h3>
            <p>상품가격</p>
        </div>
    )
}