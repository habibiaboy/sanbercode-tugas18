describe("my first test", () => {
	it("Login Orangehrmlive ", () => {
		cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
		cy.title().should("eq", "OrangeHRM");
		cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type("Admin");
		cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type("admin123");
		cy.get(".oxd-button").click();
		cy.contains("Dashboard");
	});
});
