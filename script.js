const imagesDiv = document.getElementById("images")
console.log(imagesDiv)

const rnd = Math.random()>0.5
const arr = [rnd,!rnd]

const again = document.createElement("button")
again.innerText = 'play again'
again.onclick = function() {
location.reload()

}

let id = ( Math.random() *6 +1) *10000
id = Math.floor(id)

const fakeimages = "https://thispersondoesnotexist.com/"     
const realimages = `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg` 

resultDiv = document.getElementById("result")

for (const x of arr)
{
const img1 = document.createElement("img")
img1.src = (x ? realimages : fakeimages)    
imagesDiv.append(img1)
    
img1.onclick = function()
    {
    console.log("basem 16/5/2009");

    }
img1.onclick = function() {
resultDiv.innerHTML = x ? 'Correct': 'NotCorrect'
imagesDiv.style.pointerEvents = "none";
resultDiv.append(again
)
};


}










































































































