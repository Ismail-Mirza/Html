const tab_bn=document.querySelector("#__tab_bn");
const tab_eng=document.querySelector("#__tab_eng");
const content_bn  = document.querySelector("#tab__content_bangla");
const content_en = document.querySelector("#tab__content_english")
tab_bn.addEventListener("click",()=>{
      tab_bn.classList.add("active");
      tab_eng.classList.remove("active");
      //as bangla btn
      //show bangla content
      content_bn.classList.remove("hide");
      //hide english contents
      content_en.classList.add("hide")
});

tab_eng.addEventListener("click",()=>{
  tab_eng.classList.add("active");
  tab_bn.classList.remove("active");
  //show bangla content
  content_bn.classList.add("hide");
  //hide english contents
  content_en.classList.remove("hide")
});
