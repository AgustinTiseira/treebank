import React, { useState } from 'react';

import SendMoney from '../../screens/SendMoney';
import ChargeMoney from '../../screens/ChargeMoneyScreen';
import MainScreen from '../../screens/MainScreen';

const Main = () => {
    const [screen, setScreen] = useState("main")

    const changeScreen = (data) => {
        setScreen(data)
    }
    return(
        <>
            {
                screen === "main" && <MainScreen
                    changeScreen={changeScreen}
                />
            }
            {
                screen === "charge" && <ChargeMoney
                    changeScreen={changeScreen}
                />
            }
            {
                screen === "send" && <SendMoney
                    changeScreen={changeScreen}
                />
            }
        </>
    )
}

export default Main;