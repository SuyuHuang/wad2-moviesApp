let movieId = null
let movie;
let reviews;
let movies
let logined;
const nickname='Kenny'
const email='894723982@163.com'
const password='123456'
describe("Movie Details Page", () => {
  before(() => {



  
      
  });
  beforeEach(() => {
    cy.visit(`/`);
    
  });
  it("should be able to enter to login page via the home page", () => {
   
    cy.get("ul").eq(0).within(() => {
      // if( cy.get("li").eq(4).chainerId='chainer8'){
      //   console.log("not login")
      // }
      // else if(cy.get("li").eq(4).chainerId='chainer7'){
      //   console.log('login')
      // }
      cy.get("li").eq(4).click();
      
    });
  
  });

  it("should be able to sign up", () =>{
  
    cy.get("ul").eq(0).within(() => {
      cy.get("li").eq(4).click();
    });
    cy.get('.signin').click()

    cy.get("form").within(()=>{
      cy.get("input").eq(0).clear().type(nickname);
      cy.get('input').eq(1).clear().type(email);
      cy.get('input').eq(2).clear().type(password);
      cy.get('button').click();
    })
  })


  it("should be able to log in when the user has not logged in the system", () =>{
    cy.get("ul").eq(0).within(() => {
      cy.get("li").eq(4).click();
    });
  const username='764694182@163.com';
  const password='123456'
    cy.get('h1').eq(0).contains('Log In')
    console.log(cy.get('h1').eq(0).contains('Log In'))

    cy.get("form").within(()=>{
      cy.get("input").eq(0).clear().type(username);
      cy.get('input').eq(1).clear().type(password)
      cy.get('button').click();
    })
    cy.get("h2").contains("No. Movies");
    cy.get(".badge").contains(20);
  })

  it("should be able to log out", () =>{
    cy.get("ul").eq(0).within(() => {
      cy.get("li").eq(4).click();
    });
    cy.get('button').click();
    cy.get("li").eq(4).contains("Login")
  })
 
  });

  

