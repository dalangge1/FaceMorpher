<script> 
    import ChooseModelButton from "./ChooseModelButton.svelte";
    export let modelName; 
    export let id; 
    export let buttonText;
    export let description; 
    let video_path; 

    function update() {
        fetch(`https://serve-video-api.herokuapp.com/${id}`).then(response => response.text()).then((response) => {
            console.log("this is response : " + response); 
            video_path = response; 
        }) 
    }

    update(); 
</script>

<div class="divvy"> 
    <div style="display: flex; flex-direction: column;"> 
        <h2 id ="modelName"> {modelName} </h2>
        
        <ChooseModelButton id={id} text={buttonText} onClickFunction={update}></ChooseModelButton> 
        <!-- have a video here, maybe actually describe how the model works as -->

        <video id="video-elem" src={video_path} controls> </video>

    </div>
</div>

<style> 
    *{
    margin-top: 0; 
    }

    #modelName {
        font-size: 1.5rem;
    }

    #video-elem {
        width: 35rem; 
    }
</style>