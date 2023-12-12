const wantscourse=(state,callbackFunc)=>{

    if (state==="Rich")
    {
        callbackFunc()
    }
    else{

        console.log(state)
    }

    }

const callbackFunc=(state)=>{

    console.log(`he is ${state}` )

}

wantscourse("Rich",callbackFunc("Rich"));