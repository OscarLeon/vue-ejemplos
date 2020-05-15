/// <reference types="Cypress" />

beforeEach(() => {
  // Visit the home page
  cy.visit("http://localhost:8080/");

  //Click router-link that go to the TodoList
  cy.get(".go-todo-list").click();
});

context("TodoList View", () => {
  it("Button click adds new todo", () => {
    //Make focus and text by input
    cy.get("#new-task")
      .focus()
      .type("Eat oranges");

    //Click in button 'Add task'
    cy.get("#add-task").click();

    //Verify the data
    cy.get(".todo").contains("Eat oranges");
  });

  it("Clicking a todo crosses it out", () => {
    //Make focus and text by input
    cy.get("#new-task")
      .focus()
      .type("Eat oranges");

    //Click in button 'Add task'
    cy.get("#add-task").click();

    //Verify the data
    cy.get(".todo").contains("Eat oranges");

    //Click for change to 'completed'
    cy.get(".todo")
      .contains("Eat oranges")
      .click();
    //Verify that have a class '.completed' after of click the element li
    cy.get(".todo")
      .contains("Eat oranges")
      .should("have.class", "completed");

    //Click for delete todo
    cy.get(".delete-todo").click();

    //Verify text 'Eat oranges' it has deleted
    cy.get(".todo").should("not.contain", "Eat oranges");
  });

  it("Cross button deletes a todo", () => {
    //Make focus and text by input
    cy.get("#new-task")
      .focus()
      .type("Eat oranges");

    //Click in button 'Add task'
    cy.get("#add-task").click();

    //Verify the data
    cy.get(".todo").contains("Eat oranges");

    //Click for change to 'completed'
    cy.get(".todo")
      .contains("Eat oranges")
      .click();
    //Verify that have a class '.completed' after of click the element li
    cy.get(".todo")
      .contains("Eat oranges")
      .should("have.class", "completed");

    //Click for delete todo
    cy.get(".delete-todo").click();

    //Verify text 'Eat oranges' it has deleted
    cy.get(".todo").should("not.contain", "Eat oranges");
  });
});
