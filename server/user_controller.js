const axios=require('axios');



module.exports = {

    auth: (req,res)=>{
        console.log('1')
        axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`,{
            client_id:process.env.REACT_APP_AUTH0_CLIENT_ID,
            client_secret:process.env.AUTH0_CLIENT_SECRET,
            code:req.query.code,
            grant_type: 'authorization_code',
            redirect_uri :`http://${req.headers.host}/auth/callback`,
        }).then(accessTokenResponse =>{
            console.log('2')
            return axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo/?access_token=${accessTokenResponse.data.access_token}`)
        }).then(userInfoResponse=>{
            const userData ={
                name:userInfoResponse.data.name,
                picture: userInfoResponse.data.picture,
                email: userInfoResponse.data.email,

            };
            console.log(userData)
            req.session.user = userData;
            res.redirect('/profile');

        }).catch(error =>{
            res.status(500).send("error occured");
            console.log("Error occured", error);
        })

    },

    profile:(req,res)=>{
    res.json({user: req.session.user})

    },


    logout : (req,res)=>{
        const name = req.session.user.name;
        req.session.destroy();
        res.json({message: 'you have successfully logged out, ${name}'});

    },


}