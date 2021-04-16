
document.querySelectorAll(".question").forEach((question)=>    
    question.addEventListener("click", () => {
        ans = question.nextElementSibling
        arrow = question.firstElementChild
        if(question.classList.contains("active")){
            question.classList.toggle("active")
            ans.classList.toggle("faq-aOpen")
            arrow.classList.toggle("rotate")              
        }
        else{
            document.querySelectorAll(".question").forEach(question => question.classList.remove("active"))
            document.querySelectorAll(".faq-a").forEach(faqa => faqa.classList.remove("faq-aOpen"))
            document.querySelectorAll(".arrow").forEach(arr => arr.classList.remove("rotate"))
            question.classList.add("active")
            ans.classList.toggle("faq-aOpen")
            arrow.classList.toggle("rotate")            
        }
    }))