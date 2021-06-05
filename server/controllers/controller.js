const urlDB =  require('../models/url');
const { nanoid } =  require('nanoid');

function controller(){
    return {
        home : (req,res) => {
            res.render('home' ,{url : ''});
        },
        short : (req,res) => {
            const {url} = req.body ;
            if(!url){
                return res.redirect('/' );
            }
            const slug = nanoid(10);
            const URL = new urlDB({
                url,
                slug,
            });

            URL.save().then(result => {
                return res.render('url' , {url : `http://localhost:3000/${slug}` });
            }).catch(err => {
                console.log(err);
                return res.send({err});
            })
        },

        redirect : async (req,res) => {
            // console.log(req.params);
            let slug = req.params.id ;
            const data =await urlDB.findOne({slug});
            if(data){
                return res.redirect(data.url);
            }
            else{
                return res.send({message : 'You entered wrong url'});
            }
        }
    }
}

module.exports = controller ;