const tg = window.Telegram.WebApp;
export function useTelegram(){
    const onClose = ()=>{
        tg.close()
    }

    const onToggleTelegram = () => {
        if(tg.MainButton.isVisible){
            tg.MainButton.hide()
        }else{
            tg.MainButton.show()
        }
    }

    const user = tg.initDataUnsafe?.user
    const queryId = tg.initDataUnsafe?.query_id

    return {
        tg,user,queryId,onClose,onToggleTelegram
    }
}