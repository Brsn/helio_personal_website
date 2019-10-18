console.log("Hello!");
var count = 0;
var socialCount = 0;
var socialIcons = document.querySelectorAll("socialMedia");
console.log(socialIcons);
removeAllSocialMedia();
removeAllSkills();
function mouseOver() {
  console.log("Hello!!!!");

  if (count === 0) {
    document.getElementById("me_one").src = "C:/Helio/Projects/Projects/ONE/media/me.JPG";
    count++;
  } else {
    document.getElementById("me_one").src = "C:/Helio/Projects/Projects/ONE/media/meagain.JPG";
    count--;
  }
}
  function removeAllSocialMedia() {
     document.getElementById("center_Icons_0").src ="";
     document.getElementById("center_Icons_1").src ="";
     document.getElementById("center_Icons_2").src ="";
     document.getElementById("center_Icons_3").src ="";
     document.getElementById("center_Icons_4").src ="";

}
  function removeAllSkills() {
  document.getElementById("center_skills_0").src ="";
  document.getElementById("center_skills_1").src ="";
  document.getElementById("center_skills_2").src ="";
  document.getElementById("center_skills_3").src ="";
  document.getElementById("center_skills_4").src ="";

}
  function addSocialMedia() {
    document.getElementById("center_Icons_0").src ="https://img.icons8.com/ios/80/000000/instagram-new.png";
    document.getElementById("center_Icons_1").src ="https://img.icons8.com/windows/80/000000/hackerrank.png";
    document.getElementById("center_Icons_2").src ="https://img.icons8.com/metro/80/000000/linkedin.png";
    document.getElementById("center_Icons_3").src ="https://img.icons8.com/metro/80/000000/github.png";
    document.getElementById("center_Icons_4").src ="https://img.icons8.com/metro/80/000000/new-post.png";
}
function addAllSkills() {
  document.getElementById("center_skills_0").src ="https://img.icons8.com/ios/80/000000/javascript.png";
  document.getElementById("center_skills_1").src ="https://img.icons8.com/dotty/80/000000/html.png";
  document.getElementById("center_skills_2").src ="https://img.icons8.com/dotty/80/000000/css.png";
  document.getElementById("center_skills_3").src ="https://img.icons8.com/ios-filled/80/000000/java-coffee-cup-logo.png";
  document.getElementById("center_skills_4").src ="https://img.icons8.com/ios/80/000000/mysql.png";
}
  
 
 