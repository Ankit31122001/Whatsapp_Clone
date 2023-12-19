const load=(req,res)=>{
    res.sendFile(__dirname.slice(0,-16)+'Whatsapp_frontend/index.html')
}

module.exports={load}