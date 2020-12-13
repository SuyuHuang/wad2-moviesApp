

let movieId = null
let movie;
let reviews;
let movies
let logined;
const nickname = 'Kenny'
const email = '894723982@163.com'
const password = '123456'

describe("Movie Details Page", () => {
 
  beforeEach(() => {
    cy.visit(`/`);

  });
  it("should be able to enter to login page via the home page", () => {
    cy.wait(10000)

    cy.get("ul").eq(0).within(() => {

      cy.get("li").eq(4).click();

    });

  });


  it("shoule be unable to log in using the empty email", () => {
    const username = ' ';
    const password = '12345126'
    cy.get("ul").eq(0).within(() => {

      cy.get("li").eq(4).click();

    });
    cy.get("input").eq(0).clear().type(username);
    cy.get('input').eq(1).clear().type(password)
    cy.get('button').eq(0).click();
    cy.get(".content").
      within(() => {
        cy.get("p").contains("The email address is badly formatted.")
      })

  })

  it("shoule be unable to log in using the wrong password", () => {
    const username = '764694181@qq.com';
    const password = '12345126'
    cy.get("ul").eq(0).within(() => {

      cy.get("li").eq(4).click();

    });
    cy.get("input").eq(0).clear().type(username);
    cy.get('input').eq(1).clear().type(password)
    cy.get('button').eq(0).click();
    cy.wait(10000)
    cy.get(".content").
      within(() => {
        cy.get("p").contains("The password is invalid or the user does not have a password.")
      })

  })

  it("shoule be unable to log in using the wrong account", () => {
    const username = '764694112381@qq.com';
    const password = '12345126'
    cy.get("ul").eq(0).within(() => {

      cy.get("li").eq(4).click();

    });
    cy.get("input").eq(0).clear().type(username);
    cy.get('input').eq(1).clear().type(password)
    cy.get('button').eq(0).click();
    cy.get(".content").
      within(() => {
        cy.get("p").contains("There is no user record corresponding to this identifier. The user may have been deleted.")
      })

  })

  it("should be able to sign up", () => {

    cy.get("ul").eq(0).within(() => {
      cy.get("li").eq(4).click();
    });
    cy.get('button').eq(1).click()
    cy.wait(100000)

  
      cy.get("input").eq(0).clear().type(nickname);
      cy.get('input').eq(1).clear().type(email);
      cy.get('input').eq(2).clear().type(password);
      cy.get('button').click();
    
  })


  it("should be able to log in when the user has not logged in the system", () => {
    cy.get("ul").eq(0).within(() => {
      cy.get("li").eq(4).click();
    });
    const username = '764694181@qq.com';
    const password = '123456'

    cy.get("form").within(() => {
      cy.get("input").eq(0).clear().type(username);
      cy.get('input').eq(1).clear().type(password)
      cy.get('button').eq(0).click();
    })
    cy.get("h2").contains("No. Movies");
    cy.get(".badge").contains(20);
  })

  it("should be able to log out", () => {
    cy.get("ul").eq(0).within(() => {
      cy.get("li").eq(4).click();
    });
    cy.get('button').click();
    cy.wait(10000)
    cy.get("li").eq(4).contains("Login")
  })
  it("should be able to log in using github", () => {

    cy.get("ul").eq(0).within(() => {
      cy.get("li").eq(4).click();
    });


  
    cy.get("li").eq(4).contains("Login")
  })
 

});



