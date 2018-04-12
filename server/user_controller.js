const axiox = require('axios');


module exports ={

auth: (req,res){
    axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`,{
        client_id:process.env.REACT_APP_AUTH0_CLIENT_ID,
        client_secret:process.env.AUTH0_CLIENT_SECRET,
        code:req.query.code,
        grant_type: 'authorization_code',
        redirect_uri :`http://${req.headers.host}/auth/callback`,
    }).then(accessTokenResponse =>{
        return axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/uerinfo/?access_token=${accessTokenRespnose.data.access_token}`)
    }).then(userInfoResponse=>{
        const userData ={
            name:userInfoResponse.data.name,
            picture: userInfoResponse.data.picture,
            email: userInfoResponse.data.email,

        };
        req.session.user = userData;
        res.redirect('/profile');

    }).catch(error =>{
        res.status(500).send("error occured");
        console.log("Error occured", error);
    })

},

profile:(req,res) {



},


logout:(req,res){
    const name :req.session.user.name;
    req.session.destory();
    res.json({message: 'you have successfully logged out, ${name}'});

},


};