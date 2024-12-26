import { createClient } from "redis"

const client = createClient()

async function main(){

    client.connect()
    while(1){
    const response = await client.brPop("submission",0)
    console.log(response)
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve('hey')
        }, 1000);
    })
    console.log("Processed User submission")
    }
}

main()

