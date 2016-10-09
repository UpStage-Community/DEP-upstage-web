const initialState = {
    screenSize: getScreenSize()
}

function getScreenSize(){
    let width = window.innerWidth
    console.log(width)
    if ( width < 768 ) {
        return "mobile"
    } else if ( width < 1024 ) {
        return "tablet"
    } else {
        return "desktop"
    }
}

export default function app(state=initialState, action) {
    switch (action.type) {
        default: 
            return state
    }
}