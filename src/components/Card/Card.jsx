import style from './card.module.css';
import Button from '../Button/Button';
import placeholder from '../../assets/placeholder.webp';

function Card(props) {
    return (
        <div className={style.Card}>
            <img
                className={style.CardImg}
                src={props.image || placeholder}
                alt="card image"
            ></img>
            <div className={style.CardBody}>
                <div className={style.CardContentWrapper}>
                    <h5 className={style.CardTitle}>{props.title}</h5>
                    <div className={style.TagList}>
                        {props.tags.map((tag, i) => (
                            <span
                                key={i}
                                className={
                                    style[tag]
                                        ? `${style.Tag} ${style[tag]}`
                                        : `${style.Tag}`
                                }
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p>{props.content}</p>
                </div>
                <div className={style.ButtonWrapper}>
                    <Button value={'Leggi di più'} color={'Blue'}></Button>
                    <Button
                        onClick={props.callback}
                        value={'Elimina'}
                        color={'Red'}
                    ></Button>
                </div>
            </div>
        </div>
    );
}

export default Card;
