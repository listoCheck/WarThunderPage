import logo from '../images/wt_logo_800.png';
import '../css/theme.css'
import React, {useEffect, useRef, useState} from "react";
import {T80} from "./T80";
import t80p from "../images/t80prev.jpg";
import su39p from "../images/su39prev.jpg";
import ka50p from "../images/ka50prev.jpg";

export function Select() {
    const [show, setShow] = useState(false);
    const [text, setText] = useState("");
    const [vehicle, setVehicle] = useState("")
    const [changePage, setChangePage] = useState(false)
    const [photo, setPhoto] = useState("")
    const t80 = "Т-80БВМ — современный российский основной боевой танк, является глубокой модернизацией танка Т-80БВ, поступившего на вооружение в 1985 году. Модификация Т-80БВМ разработана Омским заводом транспортного машиностроения, в ходе модернизации боевая машина была оснащена динамической защитой третьего поколения «Реликт», современным прицелом «Сосна-У» с тепловизионным каналом, стабилизатором вооружения и прибором ночного видения для механика-водителя. Установленный на Т-80БВ 1100-сильный газотурбинный двигатель заменили на более современный ГТД-1250 мощностью 1250 л.с. Произведена доработка автомата заряжания для возможности использования снарядов 3БМ59 «Свинец-1» и 3БМ60 «Свинец-2». Модификация Т-80БВМ с 2019 года находится на вооружении Сухопутных и Береговых войск ВМФ Российской федерации."
    const ka50 = "Ка-50 (изделие «800», или, по кодификации НАТО: Hokum A) — советский/российский ударный вертолёт. Идея чисто ударного вертолёта заинтересовала советских инженеров после опыта боевого применения американских вертолётов во Вьетнаме и других конфликтах. В 1976 году в конструкторском бюро Ухтомского вертолётного завода имени Камова началась работа над новым вертолётом. При проектировании исследовались различные компоновки и конфигурации для будущего вертолёта, однако выбор был остановлен на традиционной для ОКБ «Камова» соосной схеме.";
    const su39 = "В 1986 году начались работы по созданию новой, всепогодной версии Су-25Т с новым БРЭО и расширенной номенклатурой вооружений. Данная модификация получила обозначение Су-25ТМ. Создать прототипы удалось только к началу 1990-х годов, когда два самолёта Су-25Т были модифицированы в Т8ТМ-1 и Т8ТМ-2. Первый полёт состоялся уже 4 февраля 1991 года. Уже планировалось начать производство новой машины на заводе в Тбилиси, но распад СССР и независимость Грузии поставили крест на планах постройки Су-25Т и ТМ. Работы возобновились лишь в 1993-м на заводе в Улан-Удэ, который выпустил один штурмовик Т8ТМ-3, готовый к 1995 году. Он получил обозначение Су-39, но его серийное производство так и не начиналось из-за финансовых проблем. В том же году была разработана СУО-39П для установки на самолёт и построен ещё один прототип, Т8ТМ-4, который был готов к 1998 году. Но производство новых самолётов на этом прекратилось, и всего было построено 4 штурмовика. Два из них приняли участие во Второй чеченской войне, после чего они были или списаны, или оказались в нелётном состоянии.";
    function buttonClicked(str) {
        setShow(true);
        if (str === "T80") {
            setText(t80);
            setPhoto(t80p);
            setVehicle("T80")
        } else if (str === "Ka-50") {
            setText(ka50);
            setPhoto(ka50p);
            setVehicle("KA50")
        } else if (str === "Su-39") {
            setText(su39);
            setPhoto(su39p);
            setVehicle("SU39")
        }
    }

    function closeInfoWindow() {
        setShow(false)
    }

    function goNext() {
        setChangePage(true);
    }

    function handleReturn() {
        setChangePage(false);
    }

    function getVehicle(){
        if (vehicle === "T80") {
            return <T80 onReturn={handleReturn}/>
        } else if (vehicle === "KA50") {
            return <T80 onReturn={handleReturn}/>
        } else if (vehicle === "SU39") {
            return <T80 onReturn={handleReturn}/>
        }
    }

    return (
        <div>
            {changePage ? (
                getVehicle()
            ) : (

                <div className="selecter">
                    <header>
                        <img src={logo} className="App-logo" alt="logo"/>
                    </header>
                    <div className="content">
                        <div>
                            <button type="radio" id="ka50" onClick={() => buttonClicked("Ka-50")}></button>
                            <button type="radio" id="t80" onClick={() => buttonClicked("T80")}></button>
                            <button type="radio" id="su39" onClick={() => buttonClicked("Su-39")}></button>
                        </div>
                    </div>
                    {show && (
                        <div className="info-overlay">
                            <div className="info-content">
                                <img src={photo} id="prevPhoto"></img>
                                <h2>{text}</h2>
                                <div>
                                    <button id="go-next" onClick={goNext}></button>
                                </div>
                                <div>
                                    <button className="close-btn" onClick={closeInfoWindow}>Закрыть</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}