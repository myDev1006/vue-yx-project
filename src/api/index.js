import axios from "axios"


//请求接口
//主页的数据接口
export let reqHomeData =(config)=>axios.get("https://m.you.163.com/home",config)

reqHomeData(config)