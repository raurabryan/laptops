
const IP="192.168.100.24";
const PORT= 3001;
const URL="http://"+IP+":"+PORT+"/";

export const getAllLaptops=(fnRefreshList)=>{
    fetch(
        URL+"laptops"
    ).then(
        (response)=>{return response.json()}
    ).then(
        (body)=>{
            fnRefreshList(body);
        }
    )

}


export const saveLaptopsRest=(laptop,fnShowMessage)=>{

    const config ={
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            marca:laptop.marca,
            procesador:laptop.procesador,
            memoria:laptop.memoria
        })
    }
    fetch(
        URL+"laptops",config
    ).then((response)=>{return response.json()})
    .then((body)=>{
        fnShowMessage();
        console.log(body);
    });
}