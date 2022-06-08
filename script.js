
        const jokes=document.querySelector('#joke');
        const jokebtn=document.querySelector('#jokebtn')

        const generatejokes=()=>{
            const setHeader={
                heades:{
                    Accept:"application/json"
                }
            }
            jokes.classList.remove("fade");
            fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single',setHeader)
            .then((res)=>res.json())
            .then((data)=>{
                jokes.innerHTML=data.joke;
                jokes.classList.add("fade");
            }).catch((error)=>{
                console.log(error);
            })
        }
    jokebtn.addEventListener('click',generatejokes);
    generatejokes();

        
        
