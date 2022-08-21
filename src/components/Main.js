

function Main() {
    return (
        <div className="row">
        <div className="col-12">
            <div className="text">
                <ul className="row button-list">
                    <li className="col-6"><a href="/create" type=" button" className="btn btn-primary">Створити замітку</a></li>
                    <li className="col-6"><a href="/note" type=" button" className="btn btn-primary">Переглянути замітку</a></li>
                </ul>
            </div>
            
            <div className="text">
                <p><b>ShareYourNotes</b> – сервіс для обміну замітками. Створіть замітку, відправте посилання
                на замітку і інший користувач зможе її переглянути. Після перегляду замітка буде видалена.</p>
                <p>Як створити замітку? </p>
                <ul>
                    <li>Перейдіть за посиланням</li>
                    <li>Введіть текст та натисніть "Створити замітку"</li>
                    <li>Відправте сгенеровану адресу другу</li>
                </ul>
                <p>Як переглянути замітку? Перейдіть за отриманим посиланням, або введіть адресу вручну тут.</p>
            </div>
        </div>
    </div>
    );
}

export default Main;